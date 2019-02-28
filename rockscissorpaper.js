//非同期練習中心
//変数名はより詳しく！！！
//１台１で
var imageLocation = '0';
var dictionary = {
    scissor: '-142px',
    rock: '0',
    paper: '-284px'
};
//find -> 二重配列に使用　indexOf -> 一次配列に使用
console.log(Object.entries(dictionary));
//繰り返しと競合ができやすい場合は関数使用
function computerChoice(imageLocation) {
    return Object.entries(dictionary).find(function (v) {
        return v[1] == imageLocation;
    })[0];
}
var Interval;
function startAnime() {
     Interval = setInterval(() => { //setInterval は無限ループを見せる
        if (imageLocation == dictionary.rock) {//全画面より以下に指定され他づつ画面が移動できる。
            imageLocation = dictionary.scissor;
        } else if (imageLocation == dictionary.scissor) {
            imageLocation = dictionary.paper;
        } else {
            imageLocation = dictionary.rock;
        }
        document.querySelector('#computer').style.background =
            'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ' +
            imageLocation + ' 0';
    }, 100); //100は0.1秒
    //結果の確認のためsetIntervalを止める機能
        return Interval; // 
}

startAnime(); //지역변수라서 여기다가 한번 더 넣어준다  

//htmlにクラスボタンを作成して省略する
var score ={
    scissor: 1,
    rock: 0,
    paper: -1
};
document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        clearInterval(Interval); //一回停止させて結果を見ます。
        setTimeout(function() {
           startAnime();
        }, 1000);
        var myChoice = this.textContent;
        if(score[myChoice]-score[computerChoice(imageLocation)] == 0){
            console.log('winwin');
        }else if(score[myChoice]-score[computerChoice(imageLocation)]== -1 || score[myChoice]-score[computerChoice(imageLocation)]== 2){
            console.log('you win');
        }else{
            console.log('you lose');
        }
        //ゲーム結果比較スタート
    });
    //querySelector:最初に指定された１のみ入力
    //querySelectorAll:全体的に選択範囲が広がる
});
//   scissor rock paper  (computer)
//s    0 0     0-1  0 1
//r    -10    -1-1  -11
//p    10     1-1   11