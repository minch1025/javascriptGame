//非同期練習中心
//変数名はより詳しく！！！
//１台１で
var imageLocation = '0'; 
var dictionary = {
    scissor:'-142px',
    rock:'0',
    paper:'-284px'
};
//find -> 二重配列に使用　indexOf -> 一次配列に使用
console.log(Object.entries(dictionary));
//繰り返しと競合ができやすい場合は関数使用
function computerChoice(imageLocation) {
   return Object.entries(dictionary).find(function(v) {
        return v[1] == imageLocation;
    })[0];
}

var Interval = setInterval(() => { //setInterval は無限ループを見せる
    if (imageLocation == dictionary.rock) {//全画面より以下に指定され他づつ画面が移動できる。
        imageLocation = dictionary.scissor;
    }   else if (imageLocation == dictionary.scissor) {
        imageLocation = dictionary.paper;
    }   else {
        imageLocation = dictionary.rock;
    }
    document.querySelector('#computer').style.background =
        'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ' + 
        imageLocation + ' 0';
}, 100); //100は0.1秒
//結果の確認のためsetIntervalを止める機能

//htmlにクラスボタンを作成して省略する
document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        clearInterval(Interval); //一回停止させて結果を見ます。

        setTimeout(function() {
            Interval = setInterval(() => { //setInterval は無限ループを見せる
                if (imageLocation == dictionary.rock) {//全画面より以下に指定され他づつ画面が移動できる。
                    imageLocation = dictionary.scissor;
                }   else if (imageLocation == dictionary.scissor) {
                    imageLocation = dictionary.paper;
                }   else {
                    imageLocation = dictionary.rock;
                }
                document.querySelector('#computer').style.background =
                    'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ' + 
                    imageLocation + ' 0';
            }, 100); //100は0.1秒
        }, 1000);

        var myChoice = this.textContent;
        console.log(myChoice, computerChoice(imageLocation));
        //ゲーム結果比較スタート
        if (myChoice== 'scissor'){
            if(computerChoice(imageLocation) == 'scissor'){
                console.log('winwin');
            }else if(computerChoice(imageLocation) == 'rock'){
                console.log('you lose');
                }else{
                console.log('you win');
                }

        }else if(myChoice == 'rock'){
            if(computerChoice(imageLocation) == 'rock'){
                console.log('winwin');
            }else if(computerChoice(imageLocation) == 'paper'){
                console.log('you lose');
                }else{
                console.log('you win');
                }
       }else if(myChoice == 'paper'){
            if(computerChoice(imageLocation) == 'paper'){
                console.log('winwin');
            }else if(computerChoice(imageLocation) == 'scissor'){
                console.log('you lose');
                }else{
                console.log('you win');
                }
            }   
        
    });
    //querySelector:最初に指定された１のみ入力
    //querySelectorAll:全体的に選択範囲が広がる
});


