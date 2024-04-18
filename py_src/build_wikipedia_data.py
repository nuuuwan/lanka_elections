import json
import wikipediaapi
import os
import re
from utils import File, Log, TimeFormat, JSONFile
from gig import Ent, EntType
log = Log('build_wikipedia_data')


SRI_LANKA_PAGE_PREFIX = '_(Sri_Lanka)'
SRI_LANKA_PAGES = [
    "New_Democratic_Front",
]

ELECTION_LIST = [
      ("Presidential", "2024-10-24"),
      ("Presidential", "2019-11-16"),
      ("Presidential", "2015-01-08"),
      ("Presidential", "2010-01-26"),
      ("Presidential", "2005-11-17"),
      ("Presidential", "1999-12-21"),
      ("Presidential", "1994-11-09"),
      ("Presidential", "1988-12-19"),
      ("Presidential", "1982-10-20"),    
      ("Parliamentary", "2025-08-05"),
      ("Parliamentary", "2020-08-05"),
      ("Parliamentary", "2015-08-17"),
      ("Parliamentary", "2010-04-08"),
      ("Parliamentary", "2004-04-02"),
      ("Parliamentary", "2001-12-05"),
      ("Parliamentary", "2000-10-10"),
      ("Parliamentary", "1994-08-16"),
      ("Parliamentary", "1989-02-15"),
]

def clean(x):
      x = x.replace('.', '. ')
      x = re.sub(r'\s+', ' ', x)
      return x 

def get_election_wiki_page_name_list():
    wiki_page_name_list = []
    for election_type, date_str in ELECTION_LIST:
        year_str = date_str.split('-')[0]
        wiki_page_name = f'{year_str}_Sri_Lankan_{election_type.lower()}_election'
        wiki_page_name_list.append(wiki_page_name)
    return wiki_page_name_list


def get_electoral_district_wiki_page_name_list():
    ents = Ent.list_from_type(EntType.ED)
    wiki_page_name_list = []
    for ent in ents:
        name_snake = ent.name.replace(' ', '_')
        wiki_page_name = f'{name_snake}_Electoral_District'
        wiki_page_name_list.append(wiki_page_name)
    return wiki_page_name_list 


def get_polling_division_wiki_page_name_list():
    ents = Ent.list_from_type(EntType.PD)
    wiki_page_name_list = []
    for ent in ents:
        name_snake = ent.name.replace(' ', '_')
        wiki_page_name = f'{name_snake}_Polling_Division'
        wiki_page_name_list.append(wiki_page_name)
    return wiki_page_name_list 

def get_misc_wiki_page_name_list():
    return [
        'Elections_in_Sri_Lanka',
        'Bellwether',
    ]




def get_party_wiki_page_name_list():
    names = [
        "All Ceylon Tamil Congress",
        "Democratic People's Liberation Front",
        "Eelam People's Democratic Party",
        "Illankai Tamil Arasu Kachchi",
        "Jathika Jana Balawegaya",
        "Janatha Vimukthi Peramuna",
        "Lanka Sama Samaja Party",
        "Mahajana Eksath Peramuna",
        "Muslim National Alliance",
        "New Democratic Front",
        "National Movement for People's Power",
        "National People's Power",
        "National Unity Alliance",
        "People's Alliance",
        "Samagi Jana Balawegaya",
        "Sri Lanka Freedom Party",
        "Sri Lanka Muslim Congress",
        "Sri Lanka Mahajana Pakshaya",
        "Sri Lanka Podujana Peramuna",
        "Tamil Makkal Viduthalai Pulikal",
        "Tamil United Liberation Front",
        "United National Party",
        "United People's Freedom Alliance", 
        "Sihala Urumaya",
        "Jathika Hela Urumaya",
    ]
    return [name.replace(' ', '_') for name in names]

def get_wikipedia_summary_nocache(wiki_page_name):
    log.debug(f'Fetching: "{wiki_page_name}"')
    try:
        wiki = wikipediaapi.Wikipedia("lk_elections", "en")
        if wiki_page_name in SRI_LANKA_PAGES:
            wiki_page_name += SRI_LANKA_PAGE_PREFIX
        page = wiki.page(wiki_page_name)
        summary = page.summary
        log.debug('\t' + summary)
        return summary
    except Exception as e:
        log.error(f'Error fetching {wiki_page_name}: {e}')  
        return ""
def get_wikipedia_summary(wiki_page_name):
        data_path = os.path.join('py_src', 'wikipedia_cache', wiki_page_name + '.json')
        data_file = JSONFile(data_path)
        if data_file.exists:
            data =  data_file.read()
            return data['summary']
        
        summary = get_wikipedia_summary_nocache(wiki_page_name)
        data_file.write(dict(summary=summary))
        return summary

def main():
    var_name = 'WIKIPEDIA_SUMMRY_IDX'
    time_str = TimeFormat.TIME.formatNow
    lines = [
        
        '// Autogenerated by build_wikipedia_data.py',
        '// at ' + time_str,
        '',
        f'const {var_name} = ' + '{',
    ]


    wiki_page_name_list = get_election_wiki_page_name_list() + get_electoral_district_wiki_page_name_list() + get_misc_wiki_page_name_list() + get_party_wiki_page_name_list()
    for wiki_page_name in wiki_page_name_list:
        summary =clean( get_wikipedia_summary(wiki_page_name))
        lines.extend([
            '',
            '  // ' + wiki_page_name,
            f'  "{wiki_page_name}": {json.dumps(summary)},',
        ])
    

    lines.extend([
        '',
        '};',
        '',
        f'export default {var_name};',
    ])
    
    data_path = os.path.join('src', 'nonview', 'constants', f'{var_name}.js')
    File(data_path).write_lines(lines)
    log.info(f'Wrote {data_path}')

if __name__ == "__main__":
    main()