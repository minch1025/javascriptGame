"use strict";
const N = 45;
const C = 6;

(() => {
  // master number set.
  let president = new Array(45).fill().map((v, i) => i+1);
  console.log(president);

  // Pick C + 1 randoms.
  // One for bonus.
  let shuffled = randomPickup(president, C + 1);
  let bonus = shuffled.pop(1);
  console.log("shuffled: ", shuffled, "bonus: ", bonus);

  let resultElement = document.getElementById("result");
  let bonusElement = document.getElementById("bonus");

  let balls = shuffled.map(n => createBall(n));
  appendBall(resultElement, balls, 0, () => {
    let bonusBall = createBall(bonus);
    appendBall(bonusElement, [bonusBall], 0, () => {});
  });
})();



// Pickup n numbers from pickup at random from president.
// president: number array
// n: num of pickup
function randomPickup(president, n){
  var p = president;
  var result = [];
  for (var i=0; i<n; i++){
    let idx = Math.floor(Math.random() * p.length);
    result.push(p.splice(idx,1)[0])
  }
  return result;
}

// ball object
// num: ball number
function createBall(num){
  let el = document.createElement('div');
  el.textContent = num;
  el.className='ball';

  el.style.background =
    num <= 10 ? 'red' :
    num <= 20 ? 'yellow':
    num <= 30 ? 'green':
    num <= 40 ? 'blue':
    num <= 50 ? 'orange':
    'purple';
  return el;
}

// append ball
// el: container elemenet
// balls: ball element
// n: current idx
// cb: callback
function appendBall(el, balls, n, cb){
  setTimeout(() => {
    el.appendChild(balls[n]);
    if (n < balls.length - 1){
      appendBall(el, balls, n+1, cb);
    } else {
      cb();
    }
  }, 200);
}

