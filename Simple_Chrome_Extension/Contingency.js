
let keyword = "";
let timing = new Date();
function setTime(){
    timing = new Date();
    console.log(timing)
}

function setKeyword(word){
    keyword = word;
}

function main(){
    setKeyword("food"); setTime();
    console.log(keyword + timing);

}