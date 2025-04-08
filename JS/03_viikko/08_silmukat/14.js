/* 
Kirjoita funktio nimeltä createWordPyramid:
- Ota syötteenä sana (esim. "koodi").
- Käytä silmukkaa rakentaaksesi pyramidityylisen kuvion:
    Esimerkki sanalle "koodi":
    k
    ko
    koo
    kood
    koodi
*/

const createWordPyramid = (str) => {
  let length = str.length;

  for (i = 0; i < length; i++) {
    let newstr = "";
    for (j = 0; j <= i; j++) {
      newstr += str[j];
    }
    console.log(newstr);
  }
};

createWordPyramid("test string");
