import React from "react";
import DataTableViewRow from "./DataTableViewRow";
import { DataTable } from "../../../nonview/core";

export default function DataTableViewBody({
  sortedDataList,
  headerKeys,
  showExpanded,
}) {
  if (!showExpanded) {
    sortedDataList = sortedDataList.slice(0, DataTable.MAX_ROWS);
  }
  return (
    <tbody>
      {sortedDataList.map(function (data, iRow) {
        return (
          <DataTableViewRow
            key={"data-row-" + iRow}
            iRow={iRow}
            headerKeys={headerKeys}
            data={data}
          />
        );
      })}
    </tbody>
  );
}
