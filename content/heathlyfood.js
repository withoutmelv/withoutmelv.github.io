function changepic2(){
    let changetitle=document.querySelectorAll('.ts');
    let changepic=document.querySelectorAll('.ps');
    let arr=["立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑"];
    let pic=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg"];
    for(let j=0;j<changetitle.length;j++){
        changetitle[j].innerHTML=arr[j];
        changepic[j].src=pic[j];
    }
    let title2=document.querySelector('.subt2');
    let title1=document.querySelector('.subt1');
    title1.classList.remove('lightcolor');
    title1.classList.remove('darkcolor');
    title2.classList.remove('lightcolor');
    title2.classList.remove('darkcolor');
    title2.classList.add('lightcolor');
    title1.classList.add('darkcolor');
}

function changepic1(){
    let changetitle=document.querySelectorAll('.ts');
    let changepic=document.querySelectorAll('.ps');
    let arr=["立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至","小寒","大寒"];
    let pic=["13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg","21.jpg","22.jpg","23.jpg","24.jpg"];
    for(let j=0;j<changetitle.length;j++){
        changetitle[j].innerHTML=arr[j];
        changepic[j].src=pic[j];
    }
    let title1=document.querySelector('.subt1');
    let title2=document.querySelector('.subt2');
    title1.classList.remove('lightcolor');
    title1.classList.remove('darkcolor');
    title2.classList.remove('lightcolor');
    title2.classList.remove('darkcolor');
    title1.classList.add('lightcolor');
    title2.classList.add('darkcolor');
}

// window.onscroll=function(){
//     var scldis=document.body.scrollTop || document.documentElement.scrollTop;
//     var pic=document.querySelectorAll('.ps');
//     if(scldis>=500){
//         for(let j=0;j<12;j++){
//              pic[j].classList.add('ee');
//         }
      
        
//     }
//     /*
//     if(scldis>=764){
//         pic[1].classList.add('ee');
//     }
//     if(scldis>=1210){
//         pic[2].classList.add('ee');
//     }*/
//     console.log(scldis);
// }