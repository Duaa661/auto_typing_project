const span=document.querySelector('span');
const wordslist=['Developer','coder','Youtuber','Student','Enginner','Doctor','Freelancer'];
let worldindex=0;
let charcterIndex=0;
let reversetype=false
const intervaildid=setInterval(()=>{
    if(!reversetype){
        span.innerText=span.innerText+wordslist[worldindex][charcterIndex];
    charcterIndex++;
    }
    else{
        span.innerText=span.innerText.slice(0,span.innerText.length-1)
    }
    if(span.innerText.length===0 && reversetype){
        reversetype=false
        charcterIndex=0;
        worldindex++;
    }
    if(worldindex===wordslist.length){
        worldindex=0;
    }
if(charcterIndex===wordslist[worldindex].length) {
    reversetype=true;
}
},200)