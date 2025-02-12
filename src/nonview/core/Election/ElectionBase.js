import { Time } from '../../base/index.js';

export default class ElectionBase {
  static URL_BASE = // eslint-disable-next-line no-undef
    window.location.origin + process.env.PUBLIC_URL + '/data/elections';
  constructor(electionType, date) {
    this.electionType = electionType;
    this.date = date;
  }

  get id() {
    return this.date;
  }

  get electionTypeTitle() {
    if (this.electionType === 'Presidential') {
      return 'Presidential';
    }
    return 'General';
  }

  get electionTypeHashtag() {
    if (this.electionType === 'Presidential') {
      return '#PresPollSL';
    }
    return '#GenElecSL';
  }

  get titleShort() {
    return this.electionTypeHashtag + this.year;
  }

  get year() {
    return this.date.substring(0, 4);
  }

  get dateFormatted() {
    return Time.fromString(this.date).getDate().toLocaleDateString('en-LK', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  get urlData() {
    return (
      ElectionBase.URL_BASE +
      '/government-elections-' +
      this.electionType.toLowerCase() +
      '.regions-ec.' +
      this.year +
      '.tsv'
    );
  }

  get isNoData() {
    return !this.resultsList || this.resultsList.length === 0;
  }

  get isFuture() {
    return this.date.localeCompare(Time.now().date) > 0;
  }

  localeCompare(other) {
    return this.date.localeCompare(other.date);
  }

  toString() {
    return this.date;
  }

  get wikiPageName() {
    return (
      this.year + '_Sri_Lankan_' + this.electionType.toLowerCase() + '_election'
    );
  }

  get yearsSince() {
    const utNow = Time.now().ut;
    const ut = Time.fromString(this.date).ut;
    const dut = utNow - ut;
    return dut / (1000 * 365.25 * 86400);
  }
}
