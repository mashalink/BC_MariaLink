/* Tämä tehtävä on vapaaehtoinen.

Luo Magic 8-Ball -ohjelma, joka matkii klassista kohtalon ennustamisen lelua. 
Käyttäjä syöttää kyllä-tai-ei -kysymyksen, ja ohjelma antaa satunnaisen vastauksen 8-pallosta. 
Määrittele itse vastausvaihtoehdot. 
Tarvitset tähän tehtävään myös html-sivua ja sinne prompt() kysymyksen esittämiseen. */

const magicBall = () => {
  const question = prompt("What is your question?");
  if (!question) return;

  const answers = [
    "The stars say yes!",
    "Nope. Not today.",
    "Ask again later.",
    "Without a doubt!",
    "The future is unclear.",
    "Magic is on your side!",
    "Signs point to no.",
    "Absolutely — go for it!",
  ];

  const randomNumber = Math.floor(Math.random() * 8 + 1);
  const answer = answers[randomNumber];

  document.getElementById("responseBox").innerText = answer;
};
