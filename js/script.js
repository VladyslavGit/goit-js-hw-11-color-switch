const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector("button[data-action='start']");
const stopBtn = document.querySelector("button[data-action='stop']");
let idOfSetInterval;

function switchColor() {
  const currentColor = randomIntegerFromInterval(0, colors.length - 1);
  document.body.style.backgroundColor = `${colors[currentColor]}`;
}

startBtn.addEventListener("click", startSwitch);
function startSwitch(e) {
  startBtn.removeEventListener("click", startSwitch);
  idOfSetInterval = setInterval(switchColor, 1000);
  startBtn.disabled = true;
}

stopBtn.addEventListener("click", stopSwitch);
function stopSwitch(e) {
  startBtn.addEventListener("click", startSwitch);
  clearInterval(idOfSetInterval);
  startBtn.disabled = false;
}
