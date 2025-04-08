/* 
Kirjoita funktio sumFromOneToHundred:
- Laske silmukan avulla kaikkien kokonaisulukujen summa välillä 1 ja 100
- Tulosta lopputulos konsoliin
*/

const sumFromOneToHundred = () => {
  let summa = 0;
  for (i = 1; i <= 100; i++) {
    summa += i;
  }
  console.log(`${summa}`);
};

sumFromOneToHundred();
