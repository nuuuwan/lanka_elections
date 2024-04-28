import { Ent, EntType } from "../base";
import { Election, Party, PartyGroup } from "../core";
import Demographics from "./Demographics/Demographics";

export default class GenericStore {
  static async get() {
    // Elections
    const elections = await Election.listAll();
    const completedElections = Election.filterCompleted(elections);
    const parliamentaryELections = elections.filter(
      (election) => election.electionType === "parliamentary"
    );

    // Ents
    const countryEnt = await Ent.fromID("LK");
    const edEnts = await Ent.listFromType(EntType.ED);
    const pdEnts = await Ent.listFromType(EntType.PD);

    // Demographics
    const demographicsIdx = await Demographics.idxFromEnts([
      countryEnt,
      ...edEnts,
      ...pdEnts,
    ]);

    // Parties
    const partyList = Party.listAll();

    // Party Group
    const partyGroupList = PartyGroup.listAll();

    const newState = {
      elections,
      completedElections,
      parliamentaryELections,
      countryEnt,
      edEnts,
      pdEnts,
      partyList,
      partyGroupList,
      demographicsIdx,
    };
    return newState;
  }
}
