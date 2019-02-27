"use strict";

// CONSTANTS
const HANDS = ['rock', 'scissor', 'paper'];
const LOCATION_MAP = [ '0', '-142px', '-284px'];
const INTERVAL = 100; // 100ms

// GLOBAL
var timerId = -1;
var cpuHand = 0;

// attach event handler to buttons.
document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    stopAnimation();

    let myHand = HANDS.indexOf(btn.textContent);
    let result = judge(myHand);

    console.log('cpu: ', HANDS[cpuHand], ', my hand: ', HANDS[myHand] ,' [' + result + ']');

    // restart animation after 1000ms
    setTimeout(startAnimation, 1000);
  }); // end of addEventListener
}); // end of forEach

// ANIMATION START!
startAnimation();

// judgement!
function judge(myHand){
  // "cpuHand" is global.
  return cpuHand == myHand ? 'even'
    : (cpuHand - myHand + 3) % 3 == 1 ? 'win'
    : 'loose';
}

// start image animation.
function startAnimation(){
  timerId = setInterval(() => {
    cpuHand = (cpuHand + 1) % 3;
    document.getElementById('computer').style
      .background = 'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ' + LOCATION_MAP[cpuHand] + ' 0';
  }, INTERVAL);
  console.log('start timerID: ', timerId);
}

// stop image animation.
function stopAnimation(){
  clearInterval(timerId);
  console.log('stop timerID: ', timerId);
}
