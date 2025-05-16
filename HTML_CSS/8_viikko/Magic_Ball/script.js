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
  const ball = document.getElementById("ball");
  const centerCircle = document.getElementById("centerCircle");
  const answerDiv = document.getElementById("answer");

  ball.style.animation = "none";
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      ball.style.animation = "shake 0.6s";
      setTimeout(() => {
        ball.style.animation = "idle 2s infinite ease-in-out";
      }, 600);
    });
  });

  answerDiv.classList.remove("visible");

  setTimeout(() => {
    answerDiv.classList.remove("eightMode");

    setTimeout(() => {
      centerCircle.classList.add("answer");

      if (!input) {
        answerDiv.textContent = "Please, ask a question!";
      } else {
        const index = Math.floor(Math.random() * answers.length);
        answerDiv.textContent = answers[index];
        inputEl.value = "";
      }

      answerDiv.classList.add("visible");

      setTimeout(() => {
        answerDiv.classList.remove("visible");
        centerCircle.classList.remove("answer");

        setTimeout(() => {
          answerDiv.textContent = "8";
          answerDiv.classList.add("eightMode");
          answerDiv.classList.add("visible");
        }, 1000);
      }, 5000);
    }, 1000);
  }, 1000);
}
