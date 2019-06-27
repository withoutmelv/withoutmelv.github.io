window.onscroll=function(){
    var scldis=document.body.scrollTop || document.documentElement.scrollTop;
    var pic=document.querySelectorAll('.gardencontent1');
    if(scldis>=325){
        pic[0].classList.add('ee');
    }
    if(scldis>=764){
        pic[1].classList.add('ee');
    }
    if(scldis>=1210){
        pic[2].classList.add('ee');
    }
    console.log(scldis);
}