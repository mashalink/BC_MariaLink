// Tulosta luvut 1-10
let laskuri = 1;
while (laskuri <= 10) {
  console.log(laskuri);
  laskuri++; // sama kuin laskuti = laskuri + 1
}
// Sama for-lauseella
for (let laskuri = 1; laskuri <= 10; laskuri++) {
  console.log(laskuri);
}

while (true) {
  // pyydä käyttäjältö salasanaa
  let salasana = prompt("Anna salasana.");
  if (salasana == "sala") {
    alert("Okein!");
    // break "rikkoo" eli lopettaa silmukan
    break;
  }
}
