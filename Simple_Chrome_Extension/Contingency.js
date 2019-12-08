
let keyword = "";
let timing;
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

function writeQuery(query) {
    let div = document.getElementById("gs_lc50");
    let inputs = div.getElementsByClassName("gb_bf");
    let textBox = inputs.item(0);

    textBox.innerHTML = query;
}


function main() {
    setKeyword("food");
    let query = keyword + " after:" + timeCorrection();
    console.log(query);
    writeQuery(query);
}