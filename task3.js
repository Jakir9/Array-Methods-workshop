let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

let multiple3 = 3;
let multiple5 = 5;
let multiple60 = 60;
let multiple90 = 90;

let filteredNums = someNumbers.some((items) => {
  return (
    items % multiple3 === 0 ||
    items % multiple5 === 0 ||
    items % multiple60 === 0 ||
    items % multiple90 === 0
  );
});
