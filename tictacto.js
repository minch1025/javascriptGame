

var b = document.body;
var t = document.createElement('table');
var rs = [];
var ds = [];
var turn = 'x'; //ox 형태를 바꿔줍니다. //
var result = document.createElement('div');

var callback = function (event) {

    // console.log(event.target);//d
    // console.log(event.target.parentNode);//r
    // console.log(event.target.parentNode.parentNode);//t

    var wr = rs.indexOf(event.target.parentNode);
    console.log('wr', wr);
    var wd = ds[wr].indexOf(event.target);
    console.log('wd', wd);

    if (ds[wr][wd].textContent !== '') {
        console.log('not empty');
        //칸이 이미 채워져 있는가? 
    } else {
        console.log('empty');
        ds[wr][wd].textContent = turn;

        var at = false;

        if (
            ds[wr][0].textContent == turn &&
            ds[wr][1].textContent == turn &&
            ds[wr][2].textContent == turn
        ) {
            at = true;
        }
        if (
            ds[0][wd].textContent == turn &&
            ds[1][wd].textContent == turn &&
            ds[2][wd].textContent == turn
        ) {
            at = true;
        }
        if (wr - wd == 0 || Math.abs(wr - wd) == 2) {
            if (
                ds[0][0].textContent == turn &&
                ds[1][1].textContent == turn &&
                ds[2][2].textContent == turn
            ) {
                at = true;
            }
        }

        if (at) {
            //console.log(turn + 'is win!!! ');
            result.textContent = turn + 'is win!!!';
            turn = 'x';
            // ds.forEach(function (r) {
            //     r.forEach(function (d) {
            //         d.textContent = ''
            //     });

           // });
          // reset();
        } else {
            if (turn == 'x') {
                turn = 'o';
            } else {
                turn = 'x';
            }

        }

    }

};
//인덴트 잘 파악해서 넣어두기 
function reset(){ //function 을 다시 만들어서 리셋을 만듬 
    ds.forEach(function (r) {  
        r.forEach(function (d) {
            d.textContent = ''
        });

    });
}

for (var i = 1; i <= 3; i += 1) {
    var r = document.createElement('tr');
    rs.push(r);
    ds.push([]);
    for (var j = 1; j <= 3; j += 1) {
        var d = document.createElement('td');
        d.addEventListener('click', callback);
        ds[i - 1].push(d);
        r.appendChild(d);
    }
    t.appendChild(r);

}

b.appendChild(t);
b.appendChild(result);
console.log('rs', rs, 'ds', ds);




