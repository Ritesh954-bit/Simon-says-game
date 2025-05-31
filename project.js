let gameseq =[];
let userseq =[];
let userScore = 0; 
let highScore = 0;

// if (userScore > highScore) {
//     highScore = userScore;
//     localStorage.setItem("highScore", highScore); 
// }
// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById("scoreDisplay").innerText = `Score: ${userScore}`;
// });


let btns =["red" ,"yellow" ,"green" ,"purple"];

let started =false;
let level =0;

let h2 =document.querySelector("h2");

document.addEventListener("keypress", function () {
    if(started ==false){
        console.log("game started");
        started =true;
    
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("Flash");
    setTimeout(function () {
    btn.classList.remove("Flash");
    } ,250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function () {
    btn.classList.remove("userFlash");
    } ,250);
}

function levelUp() {
    userseq = [];
    level++;
    h2.innerText =`level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randcolor =btns[randIdx];
    let randBtn =document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameFlash(randBtn); 
}

function checkAns (idx){
if (userseq[idx] === gameseq[idx]){
   if(userseq.length == gameseq.length){
    setTimeout(levelUp ,1000);
    levelUp();
    }
}else{
    h2.innerHTML=`Game over! your score was <b>${level}</b> <br> press any key to start.`;
    document.querySelector("body").style.backgroundColor ="red";
    setTimeout ( function(){
    document.querySelector("body").style.backgroundColor ="white";
    } ,150);
    reset();
  }    
}
function btnpress (){
    // console.log(this);
    let btn = this;
    userFlash(btn);

usercolor =btn.getAttribute("id");
userseq.push(usercolor);

checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click",btnpress);
}
function reset (){
    started = false;
    gameseq =[];
    userseq =[];
    level =0;
}