const cats = ["tony", "daisy", "socks", "rockie"];

function capitalised(str) {
  console.log(str);
  return str.toUpperCase();
}

const capilisedCats = cats.map(capitalised);
console.log(capilisedCats);
