function judgeRole(){
    var role=document.querySelectorAll('.ro');
    var user=document.querySelector('.f1');
    var pwd=document.querySelector('.f2');
    var flag=0;
    console.log(role);
    console.log(role[1].checked);
    if(user.value==null||user.value==""){
        alert("请输入用户名！");
    }
    if(pwd.value==null||pwd.value==""){
        alert("请输入密码！");
    }

    for(let i=0;i<5;i++){
        if(role[i].checked==true){
            flag=1;
            if((user.value!=null&&user.value!="")&&(pwd.value!=null&&pwd.value!="")){
                if(role[i].value=="oldman"){
                    window.open("../content/index.html");
                    window.close("index.html");
                }
                if(role[i].value=="doctor"){
                    window.open("../information/info.html");
                    window.close("index.html");
                }
                if(role[i].value=="nurse"){
                    window.open("http://www.sohu.com");
                    window.close("index.html");
                }
                if(role[i].value=="admin"){
                    window.open("http://www.qq.com");
                    window.close("index.html");
                }
                if(role[i].value=="worker"){
                    window.open("http://www.douyu.com");
                    window.close("index.html");
                }
            }
            
        }
    }
    if(flag==0){
        alert("请选择身份！");
    }
   
}

function register(){
    let note=document.querySelector('.note');
    note.innerHTML="医生、护士、护工请先注册！";
    note.style.fontSize="22px";
    note.style.textAlign="center";
    note.style.color="red";
    console.log("succed")

}

console.log(screen.width);
console.log(window.innerWidth);