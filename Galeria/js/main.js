let ubiPri = window.pageYOffset; // Ubicación en la que estamos

let nav = document.getElementsByTagName('header')[0]; 

window.addEventListener('scroll', function(){

  let ubiSec = window.pageYOffset;

  if(ubiPri>=ubiSec){
    nav.style.top = '0px'; 
  }else{
    nav.style.top = '-126px';
  }
  ubiPri = ubiSec;
});