let date=document.querySelector('.date');
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
