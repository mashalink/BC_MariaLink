// Tee funktio logEvenNumbers, joka:
// - tulostaa kaikki parilliset kokonaisluvut 1 ja 99 välillä tällä kaavalla:  2, 98, 4, 96, ..., 50.
// - Tulosta luvut samalle riville konsolissa.

const logEvenNumbers = () => {
  for (let i = 2; i <= 50; i += 2) {
    console.log(`${i}`);
    if (i == 50) break;
    console.log(`${100 - i}`);
  }
};

logEvenNumbers();
