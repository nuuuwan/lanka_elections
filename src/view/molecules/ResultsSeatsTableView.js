import { Box } from "@mui/material";
import { SparseMatrix } from "../../nonview/base";
import { Party, Seats } from "../../nonview/core";

import { ElectionLink, SectionBox } from "../atoms";
import { MatrixView } from "../molecules";

function getSparseMatrix(election, ents) {
  let sparseMatrix = new SparseMatrix();
  const seats = new Seats(election);
  election.sortEntsByValid(ents).forEach(function (ent) {
    const partyToSeats = seats.getPartyToSeats(ent.id);
    if (!partyToSeats) {
      return null;
    }
    for (let [partyID, seats] of Object.entries(partyToSeats)) {
      sparseMatrix.push({
        Region: ent,
        Party: Party.fromID(partyID),
        Seats: seats,
      });
    }
  });
  return sparseMatrix;
}

function getDescription(election, ents) {
  return (
    <Box>
      Seats won in the <ElectionLink election={election} /> Election.
    </Box>
  );
}

export default function ResultsSeatsTableView({ election, ents }) {
  const sparseMatrix = getSparseMatrix(election, ents);

  return (
    <SectionBox
      title={
        <Box>
          <ElectionLink election={election} />
          {" (Seats)"}
        </Box>
      }
      description={getDescription(election, ents)}
    >
      <MatrixView
        sparseMatrix={sparseMatrix}
        zKey="Seats"
        xKey="Party"
        yKey="Region"
      />
    </SectionBox>
  );
}
