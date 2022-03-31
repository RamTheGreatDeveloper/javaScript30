const secondHand = document.querySelector(".second-hand");
const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
function setDate() {
  const now = new Date();
  //calc to current hh:mm:ss
  const seconds = now.getSeconds();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  //calc to transform: rotate degree using time
  const secondDegree = (seconds / 60) * 360 + 90;
  const hoursDegree = (hours / 12) * 360 + 90;
  const minDegree = (minutes / 60) * 360 + 90;

  // console.log(hours + "hr" + minutes + "m" + seconds + "s");
  //move to div like clock
  secondHand.style.transform = `rotate(${secondDegree}deg)`;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
  minHand.style.transform = `rotate(${minDegree}deg)`;
}

setInterval(setDate, 1000);
