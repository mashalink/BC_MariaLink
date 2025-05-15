const answers = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes – definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

function magicBall() {
  const inputEl = document.getElementById("userQuestion");
  const input = inputEl.value.trim();
  const answerDiv = document.getElementById("answer");
  const ball = document.getElementById("ball");

  if (!input) {
    answerDiv.textContent = "Please ask a question!";
    answerDiv.classList.add("visible");
    return;
  }

  inputEl.value = "";

  answerDiv.classList.remove("visible");
  ball.style.animation = "shake 0.6s";

  setTimeout(() => {
    ball.style.animation = "idle 2s infinite ease-in-out";
    const index = Math.floor(Math.random() * answers.length);
    answerDiv.textContent = answers[index];
    answerDiv.classList.add("visible");

    // Hide answer after 7 seconds
    setTimeout(() => {
      answerDiv.classList.remove("visible");
    }, 5000);
  }, 1000);
}
