import '/node_modules/materialize-css/dist/js/materialize.min.js';

function setHeaderActive(){
  let nav = document.getElementById('nav-desktop').getElementsByTagName('li');
  let navM = document.getElementById('nav-mobile').getElementsByTagName('li');

  let title = document.querySelector('title').innerText;
  if(title == 'Experiments'){title = 'Home';}
  for(let i = 0; i < nav.length; ++i){
    if(title == nav[i].innerText){
      nav[i].classList.add('active');
      navM[i].classList.add('active');
    }
  }
}

function startMaterialize(){
  document.addEventListener('DOMContentLoaded', function() {
    let elementos = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elementos);
  });
  M.AutoInit();
}

export default () => {setHeaderActive();startMaterialize();};

/*global M*/