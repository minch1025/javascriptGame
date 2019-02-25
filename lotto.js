// initialize "president"
var president = Array(45)
  .fill()
  .map(function(value, index){
    return index + 1;
  });

console.log(president);

var shuffle = [];

while(president.length > 0) {
  var move = president.splice(
    Math.floor(Math.random() * president.length),
    1
  )[0];
  //하나만 뽀뱌아서 들여내기 
  shuffle.push(move);
  //하나만 뽑아서 뽑아오기 끝날 때까지 
}

console.log(shuffle);

var bonus = shuffle[shuffle.length - 1];

//length-1은 마지막 자릿수 구하기
var correctNum = shuffle.slice(0, 6);

//슬라이스 자리값 나누기
console.log('correctNum', correctNum.sort(function(p, c){return c-p;}), 'bonus', bonus);

//오름차순 내림차순 을 등록하기
var result = document.getElementById('result');

function drawingBall(number, result){
  var ball = document.createElement('div');

  ball.textContent = number;
  ball.style.display = 'inline-block';
  ball.style.border = '1px solid black';
  ball.style.borderRadius = '10px';
  ball.style.width = '20px';
  ball.style.height = '20px';
  ball.style.textAlign = 'center';
  ball.style.marginRight = '10px';

  // background color.
  var background = '';
  if(number <= 10){
    backgrounds = 'red';
  } else if(number <= 20){
    backgrounds ='yellow';
  } else if(number <= 30){
    backgrounds = 'green';
  } else if(number <= 40){
    backgrounds = 'blue';
  } else if(number <= 50){
    backgrounds = 'orange';
  } else{
    backgrounds = 'purple';
  }

  ball.style.background = backgrounds;

  result.appendChild(ball);
}

setTimeout(function  callback() {
  drawingBall(correctNum[0], result);
}, 1000);
// 밀리초 1000 - 1초
setTimeout(function callback(){
  drawingBall(correctNum[1],result);
}, 2000);
setTimeout(function callback(){
  drawingBall(correctNum[2],result);
}, 3000);
setTimeout(function callback(){
  drawingBall(correctNum[3],result);
}, 4000);
setTimeout(function callback(){
  drawingBall(correctNum[4],result);
}, 5000);
setTimeout(function callback(){
  drawingBall(correctNum[5],result);
}, 6000);

setTimeout(function callback(){
  var S = document.getElementsByClassName('bonus')[0];
  //클래스가 얼마나 설정될 지 모르기에 우선 [0]으로 지정해둠 
  drawingBall(bonus, S);
}, 7000);
