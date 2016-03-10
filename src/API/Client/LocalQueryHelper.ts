export class LocalQueryHelper {
  public sort(list, orderBy: string) {
    let fieldName = orderBy;

    if (orderBy.indexOf(' desc') > -1) {
      fieldName = orderBy.substring(0, orderBy.indexOf(' desc'));

      return list.sort((a, b) => {
        if (typeof a[fieldName] === 'number') {
          console.log('sort1');
          return a[fieldName] - b[fieldName];
        }
        if (a[fieldName] < b[fieldName]) {
          console.log('sort2');
          return 1;
        }
        if (a[fieldName] > b[fieldName]) {
          console.log('sort3');
          return -1;
        }
        console.log('sort4');
        return 0;
      });
    }

    return list.sort((a, b) => {
      if (typeof a[fieldName] === 'number') {
        console.log('sort5');
        return b[fieldName] - a[fieldName];
      }
      if (a[fieldName] < b[fieldName]) {
        console.log('sort6');
        return -1;
      }
      if (a[fieldName] > b[fieldName]) {
        console.log('sort7');
        return 1;
      }
      console.log('sort8');
      return 0;
    });
  }
}
