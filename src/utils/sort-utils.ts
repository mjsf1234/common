import _ from 'underscore';

export abstract class SortUtils {
  public static sort(data: any, sortBy: Array<any> = []): any {
    let keySort = function (a: any, b: any, d: any) {
      d = d !== null ? d : 1;
      // a = a.toLowerCase(); // this breaks numbers
      // b = b.toLowerCase();
      a = isNum(a) ? a * 1 : a ? a.toLowerCase() : ''; // restore numbers
      b = isNum(b) ? b * 1 : b ? b.toLowerCase() : '';
      if (a == b) {
        return 0;
      }
      return a > b ? 1 * d : -1 * d;
    };

    let isNum = function (v: any) {
      return !isNaN(parseFloat(v)) && isFinite(v);
    };

    // not sure what we want to do if no keys provided.
    // use obIx0 on a member?
    sortBy = sortBy || [];

    let KL = sortBy.length;

    // as yet poorly defined -- maybe sort on
    if (!KL) {
      return data.sort(keySort);
    }

    for (let k = 0; k < sortBy.length; k++) {
      // asc unless desc or skip
      let orderByKey = Object.keys(sortBy[k])[0];
      sortBy[k][orderByKey] =
        sortBy[k][orderByKey].toLowerCase() == 'desc' || sortBy[k][orderByKey] == -1
          ? -1
          : sortBy[k][orderByKey].toLowerCase() == 'skip' || sortBy[k][orderByKey] === 0
          ? 0
          : 1;
    }

    data.sort(function (a: any, b: any) {
      let sorted = 0;
      let ix = 0;

      while (sorted === 0 && ix < KL) {
        let k = Object.keys(sortBy[ix])[0];
        if (k) {
          let dir = Object.values(sortBy[ix])[0];
          sorted = keySort(a[k], b[k], dir);
          ix++;
        }
      }
      return sorted;
    });
    return data;
  }
}
