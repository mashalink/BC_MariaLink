// Luo muuttuja nimeltä 'num1' ja anna sille liukulukuarvo.
let num1 = 65.8219;

// Luo muuttuja nimeltä 'num2' ja anna sille eri liukulukuarvo.
let num2 = 52.0241;

// Pyöristä sekä 'num1' että 'num2' lähimpään kokonaislukuun
// ja tallenna tulokset muuttujiin 'roundedNum1' ja 'roundedNum2'
let roundedNum1 = Math.round(num1);
let roundedNum2 = Math.round(num2);

// Laske neliöjuuri 'roundedNum1':stä
// ja tallenna se muuttujaan nimeltä 'sqrtNum1'.
let sqrtNum1 = Math.sqrt(roundedNum1);

// Etsi suurempi numero 'roundedNum1':n ja 'roundedNum2':n välillä
// ja tallenna se muuttujaan nimeltä 'maxNum'.
let maxNum = Math.max(roundedNum1, roundedNum2);

// Käytä console.log() -funktiota tulostamaan 'roundedNum1', 'roundedNum2', 'sqrtNum1' ja 'maxNum' konsoliin.
console.log(roundedNum1);
console.log(roundedNum2);
console.log(sqrtNum1);
console.log(maxNum);

// Käytä typeof operaattoria tarkistaaksesi jokaisen uuden muuttujan tietotyypin
// ja tulosta tulos käyttäen console.log().
console.log(typeof roundedNum1);
console.log(typeof roundedNum2);
console.log(typeof sqrtNum1);
console.log(typeof maxNum);
