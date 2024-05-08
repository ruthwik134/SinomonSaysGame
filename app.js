let gamesequence=[];
let usesequence=[];
let score=0;
let colorbutton=["pink","red","yellow","purpule"];
let started=false;
let level=0;
h2=document.querySelector("h2");
h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is satrted");
        started=true;
        leveled();
    }
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);

}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },500);

}
function leveled(){
    level++;
    usesequence=[];
    h2.innerText=`Level ${level}`;
    btn=Math.floor(Math.random()*3);
    btn1=colorbutton[btn];
    gamesequence.push(btn1);
    console.log(gamesequence);
    rnbtn=document.querySelector(`.${btn1}`);
    //console.dir(rnbtn);
    btnflash(rnbtn);
}
function checkAns(idx){
    //console.log(level);
    if(usesequence[idx]==gamesequence[idx]){
        if(usesequence.length==gamesequence.length){
           setTimeout(leveled(),780);
        }
        //console.log("yes");
       
    }
    else{
        h2.innerHTML=`<b>out with score ${level}<b>`;
        if (score<level){
            score=level;
            h3.innerText=`the highest score is ${score}`;

        }
        else{
            h3.innerText=`the highest score is ${score}`;
        }
        

        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        },150);

        reset();
        
    }


}
function btnPress(){
    //console.log(this);
    btn=this;
    userflash(btn);
    k=btn.getAttribute("id");
    usesequence.push(k);
    //console.log(usesequence);
    checkAns(usesequence.length-1);
    




}
btns=document.querySelectorAll(".btn");
for (btn of btns){
    btn.addEventListener("click",btnPress)
}
function reset(){
    started=false;
    gamesequence=[];
    usesequence=[];
    level=0;
}