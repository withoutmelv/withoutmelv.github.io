let p=document.getElementById("info");
let table=document.querySelectorAll('.table');
let count=0;
for(let j=0;j<24;j+=2){
    table[j].innerHTML=localStorage.key(count);
    table[j+1].innerHTML=localStorage.getItem(localStorage.key(count));
    count++;
}

function jump(){
    window.open("otherInfo.html");
    window.close("info.html");
}
