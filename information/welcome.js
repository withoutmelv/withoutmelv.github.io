let name=document.querySelector('.name');
name.innerHTML=localStorage.getItem("姓名");
if(localStorage.getItem("性别")==="男"){
    name.innerHTML+="先生";
}
else{
    name.innerHTML+="女士";
}