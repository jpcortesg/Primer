// Biblio animaciones
AOS.init();
// nav
let ubiPri = window.pageYOffset; // Ubicación en la que estamos

let nav = document.getElementsByTagName('nav')[0]; // Navegador

window.addEventListener('scroll', function(){// Para el efecto visual, cuando hay scroll
  let desp = window.pageYOffset;

  if(ubiPri>=desp){
    nav.style.top = '0px'; 
  }else{
    nav.style.top = '-100px';
  }
  ubiPri = desp;
});

// menu

let enlaHea = document.querySelectorAll(".enlaces-header")[0];
let sem = true;

let but = document.querySelectorAll('.hamburguer')[0];

but.style.color = "#1fde82";

but.addEventListener('click', function(){
  enlaHea.classList.toggle('menudos');
});
