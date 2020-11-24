'use strict';

function leftJoin (table1, table2){

  let result=[];

  for (let storageSpot of table1.table) {

    if (storageSpot){

      let current = storageSpot.head;

      while (current){
        let pairFromTable1 = current.value;
        let valueFromTable2 = table2.get(pairFromTable1[0]) || null;
        let newJoinedValue = [...pairFromTable1, valueFromTable2];
        result.push(newJoinedValue);
        current = current.next;
      }
    }
  }
  return result;
}

module.exports = leftJoin;
