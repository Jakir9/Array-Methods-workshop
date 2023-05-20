let sevenTimesTable = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];

let seventySevenTimesTable = [77, 154, 231, 308, 385, 461, 538, 616, 693, 770];

let real7Multiples = sevenTimesTable.every((items) => {
  return items % 7 === 0;
});

let real77Multiples = seventySevenTimesTable.every((items) => {
  return items % 77 === 0;
});

let fake77Multiples = seventySevenTimesTable.every((items) => {
  return items % 77 !== 0;
});
