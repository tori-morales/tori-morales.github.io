let gradientEl = document.body;

let hex1 = "rgba(0,105,150,1)";
let hex2 = "rgba(62,153,62,1)"; //stop 2 ALWASYS 100
let currentStop, targetStop;
currentStop = 9;
let maxStop = 30;
let minStop = 0;

let start;

/*
  /* 
  background: radial-gradient(
    circle,
    rgba(0, 105, 150, 1) 9%,
    rgba(62, 153, 62, 1) 100%
  ); */

newTarget = () => {
  if (targetStop > maxStop / 2) {
    return Math.random() * maxStop;
  } else {
    return Math.random() * maxStop + maxStop / 2;
  }
};

document.body.addEventListener("mousemove", (e) => {
  let clX = e.clientX + "px";
  let cly = e.clientY + "px";
  let gradient = `background: radial-gradient(circle at ${clX} ${cly},   rgba(0, 105, 150, .75) 0%,
    rgba(62, 153, 62, .8) 100%)`;

  document.body.style = gradient;
});

// window.addEventListener("load", () => {
//   console.log("starting");
//   gradientEl = document.body;
//   requestAnimationFrame(step);

//   setInterval(() => {
//     targetStop = newTarget();
//   }, Math.random() * 200 + 150);
// });
