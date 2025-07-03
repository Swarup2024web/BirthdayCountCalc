let countdownInterval;

function startCountdown() {
  const input = document.getElementById("birthday").value;
  const message = document.getElementById("message");
  if (!input) {
    message.textContent = "Please select your birthday!";
    return;
  }

  clearInterval(countdownInterval);
  message.textContent = "";

  const now = new Date();
  let birthday = new Date(input);
  birthday.setFullYear(now.getFullYear());

  if (birthday < now) {
    birthday.setFullYear(now.getFullYear() + 1);
  }

  countdownInterval = setInterval(() => {
    const currentTime = new Date();
    const timeLeft = birthday - currentTime;

    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("days").textContent = 0;
      document.getElementById("hours").textContent = 0;
      document.getElementById("minutes").textContent = 0;
      document.getElementById("seconds").textContent = 0;
      message.textContent = "🎂 Happy Birthday to You! 🎉";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }, 1000);
}
