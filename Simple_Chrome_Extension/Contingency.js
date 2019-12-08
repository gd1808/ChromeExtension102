
let keyword = "";
let timing;
let result = ""
function setTime(){
    timing = new Date();
}

function setKeyword(word){
    keyword = word;
    setTime();
}
function timeCorrection(){
    var month = timing.getMonth() + 1;
    var year = timing.getFullYear();

    return year + "/" + month;
}

function main() {
    setKeyword("food");
    console.log(keyword + " after:" + timeCorrection());

}