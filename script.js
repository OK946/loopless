let html = [];
function printTo(n){
    if(n >= 1){
        html.unshift(`${n}\n`)
        printTo(n - 1);
    } else {
        document.getElementById(`output`).innerText = html.join(``);
        return;
    }
};


