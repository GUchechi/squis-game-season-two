
const textEl = document.getElementById('text');
const text = `Stay Updated to get the Top Series on Netflix without any stress. Over 800M+ downloads across the globe. Don't miss out!!!`
let idx = 1;
let speed = 100;

writeText()

function writeText () {
    textEl.innerHTML = text.slice(0, idx)

    idx++

    if( idx > text.length){
        idx = 1
    }

    setTimeout(writeText, speed)
}