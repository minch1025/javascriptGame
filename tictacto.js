var b = document.body;
var t = document.createElement('table');
var rs = [];
var ds = [];
var turn = 'x'; //ox 형태를 바꿔줍니다. 

var callback = function(event){

    // console.log(event.target);//d
    // console.log(event.target.parentNode);//r
    // console.log(event.target.parentNode.parentNode);//t

var wr = rs.indexOf(event.target.parentNode);
    console.log('wr',wr);
var wd = ds[wr].indexOf(event.target);
    console.log('wd',wd);

if (ds[wr][wd].textContent !== ''){
    console.log('not empty');
    //칸이 이미 채워져 있는가? 
}else {    
    console.log('empty');
    ds[wr][wd].textContent = turn;

var at = false;

if(
   ds[wr][0].textContent == turn&&
   ds[wr][1].textContent== turn&&
   ds[wr][2].textContent== turn
){    
       at= true;
   }
if(
   ds[0][wd].textContent == turn&&
   ds[1][wd].textContent == turn&&
   ds[2][wd].textContent== turn
){
    at = true;
    }
if(wr- wd == 0 || Math.abs(wr - wd) == 2 ){
    if(
        ds[0][0].textContent == turn&&
        ds[1][1].textContent == turn&&
        ds[2][2].textContent == turn
        ){
            at = true;
       }
    }

if(at){
     console.log(turn + 'is win!!! ');
 }else{
     if(turn=='x'){
         turn='o';
     }else{
         turn='x';
     }
 }
}
};


for ( var i =1; i<=3; i+=1){
    var r = document.createElement('tr');
    rs.push(r);
    ds.push([]);
    for(var j=1; j<=3; j+=1){        
        var d= document.createElement('td');
        d.addEventListener('click',callback);
        ds[i-1].push(d);
        r.appendChild(d);
    }
    t.appendChild(r);
}
b.appendChild(t);
console.log('rs',rs,'ds', ds);

//보통은 이렇게 하진 않음 

