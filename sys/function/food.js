let date=document.querySelector('.date');
let flag=0;
time();
function time(){
    let d=new Date();
    if(d.getHours()<7&&d.getHours()>=5){
        date.innerHTML="现在的时间是："+"清晨"+d.getHours()+"点"+d.getMinutes()+"分"+d.getSeconds()+"秒";
    }
    if(d.getHours()<9&&d.getHours()>=7){
        date.innerHTML="现在的时间是："+"早上"+d.getHours()+"点"+d.getMinutes()+"分"+d.getSeconds()+"秒";
    }
    if(d.getHours()<12&&d.getHours()>=9){
        date.innerHTML="现在的时间是："+"上午"+d.getHours()+"点"+d.getMinutes()+"分"+d.getSeconds()+"秒";
    }
    if(d.getHours()>=12&&d.getHours()<14){
        date.innerHTML="现在的时间是："+"中午"+d.getHours()+"点"+d.getMinutes()+"分"+d.getSeconds()+"秒";
    }
    if(d.getHours()>=14&&d.getHours()<18){
        date.innerHTML="现在的时间是："+"下午"+d.getHours()+"点"+d.getMinutes()+"分"+d.getSeconds()+"秒";
    }
    if(d.getHours()>=18&&d.getHours()<19){
        date.innerHTML="现在的时间是："+"傍晚"+d.getHours()+"点"+d.getMinutes()+"分"+d.getSeconds()+"秒";
    }
    if(d.getHours()>=19&&d.getHours()<24){
        date.innerHTML="现在的时间是："+"晚上"+d.getHours()+"点"+d.getMinutes()+"分"+d.getSeconds()+"秒";
    }
    if(d.getHours()>=0&&d.getHours()<5){
        date.innerHTML="现在的时间是："+"凌晨"+d.getHours()+"点"+d.getMinutes()+"分"+d.getSeconds()+"秒";
    }
    
    setTimeout(time,1000);
}

function addline(){
    let line=document.querySelector('.k1');
    line.innerHTML+=` <tr>
    <td>描述</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>
        <select class="form-control">
            <option>是</option>
            <option>否</option>
        </select>
    </td>
    <td>
        <select class="form-control">
            <option>星期一</option>
            <option>星期二</option>
            <option>星期三</option>
            <option>星期四</option>
            <option>星期五</option>
            <option>星期六</option>
            <option>星期日</option>
        </select>
    </td>
    <td><button class="btn btn-primary" onclick="delt(this)">删除</button></td>
</tr>`;
    
}

function addline2(){
    let line=document.querySelector('.k2');
    line.innerHTML+=` <tr>
    <td>描述</td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><button class="btn btn-primary" onclick="delt(this)">删除</button></td>
</tr>`;
}

function delt(obj){
    var del=obj.parentNode.parentNode;
    del.parentNode.removeChild(del);
}


function control(){
    let move=document.querySelector('.menu');
    let pic=document.querySelectorAll('.fuc');
    let head=document.querySelector('.head');
    let name=document.querySelector('.name');
    let job=document.querySelector('.job');
    flag++;
    console.log(pic);
    if(flag%2!=0){
        move.classList.remove("animaout");
        move.classList.remove("animain");
        move.classList.add("animain");
        head.classList.remove("hi");
        name.classList.remove("hi");
        job.classList.remove("hi");
        head.classList.add("hi");
        name.classList.add("hi");
        job.classList.add("hi");

        head.classList.add("hi");
        name.classList.add("hi");
        job.classList.add("hi");
        for(let j=0;j<6;j++){
            let pp=pic[j].firstChild;
            pp.classList.remove("pic");
            pp.classList.add("pic");
        }
    }else{
        for(let j=0;j<6;j++){
            let pp=pic[j].firstChild;
            pp.classList.remove("pic");
        }
        move.classList.remove("animaout");
        move.classList.remove("animain");
        move.classList.add("animaout");
        head.classList.remove("hi");
        name.classList.remove("hi");
        job.classList.remove("hi");
    }
    
    
}