import { Comparator } from "../core";
import Scalar from "./Scalar";

export default class SparseMatrix {
  constructor(dataList = []) {
    this.dataList = dataList;
    this.scalarToOriginal = {};
  }

  push(data) {
    this.dataList.push(data);
  }

  toScalar(x) {
    const scalar = Scalar.get(x);
    this.scalarToOriginal[scalar] = x;
    return scalar;
  }

  __getOrderedScalarList([xKey, yKey, zKey], [sortYScalar, sortReverse]) {
    const idx = this.getIdx(yKey, xKey, zKey);
    const orderedScalarList = Object.entries(idx)
      .sort(function ([xScalarA, yScalarToZA], [xScalarB, yScalarToZB]) {
        return Comparator.cmp(
          yScalarToZA[sortYScalar],
          yScalarToZB[sortYScalar],
          sortReverse
        );
      })
      .map(function ([xScalar, yScalarToZ]) {
        return xScalar;
      });

    return orderedScalarList;
  }

  getIdx(xKey, yKey, zKey) {
    return this.dataList.reduce(
      function (idx, data) {
        const x = data[xKey];
        const y = data[yKey];
        const z = data[zKey];

        const xScalar = this.toScalar(x);
        const yScalar = this.toScalar(y);

        if (!idx[yScalar]) {
          idx[yScalar] = {};
        }
        idx[yScalar][xScalar] = z;
        return idx;
      }.bind(this),
      {}
    );
  }

  getIdxScalar(xKey, yKey, zKey) {
    return this.dataList.reduce(
      function (idx, data) {
        const x = data[xKey];
        const y = data[yKey];
        const z = data[zKey];

        const xScalar = this.toScalar(x);
        const yScalar = this.toScalar(y);

        if (!idx[yScalar]) {
          idx[yScalar] = {};
        }
        idx[yScalar][xScalar] = this.toScalar(z);
        return idx;
      }.bind(this),
      {}
    );
  }

  getIdxOrdered(
    [xKey, yKey, zKey],
    [sortXScalar, sortXReverse],
    [sortYScalar, sortYReverse]
  ) {
    const idx = this.getIdx(xKey, yKey, zKey);
    return this.__getOrderedScalarList(
      [xKey, yKey, zKey],
      [sortYScalar, sortYReverse]
    ).reduce(
      function (idxOrdered, xScalar) {
        return this.__getOrderedScalarList(
          [yKey, xKey, zKey],
          [sortXScalar, sortXReverse]
        ).reduce(function (idxOrdered, yScalar) {
          if (!idxOrdered[yScalar]) {
            idxOrdered[yScalar] = {};
          }
          idxOrdered[yScalar][xScalar] = (idx[yScalar] || {})[xScalar];
          return idxOrdered;
        }, idxOrdered);
      }.bind(this),
      {}
    );
  }
}
