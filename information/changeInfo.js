let input=document.querySelectorAll('.input');
for(let j=0;j<12;j++){
    input[j].value=localStorage.getItem(input[j].name);
}

function save(){
    let information=document.querySelectorAll('.input');
    for(let i=0;i<information.length;i++){
       localStorage.setItem(information[i].name,information[i].value);
    }
    alert("信息修改完成！");
}