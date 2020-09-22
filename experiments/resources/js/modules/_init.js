/* eslint-disable no-undef */

function setHeaderActive(){
  let navLinks = document.querySelector('.navLinks').getElementsByTagName('li');

  let title = document.querySelector('title').innerText;
  if(title == 'Experiments'){title = 'Home';}
  for(let i = 0; i < navLinks.length; ++i){
    if(title == navLinks[i].innerText){
      navLinks[i].classList.add('active');
    }
  }
}

function startCss(){
  window.navLinks = document.querySelector('.navLinks');
  window.screenDarkener = document.querySelector('.screenDarkener');

  window.openSidenav = function(){
    navLinks.style.visibility = 'visible';
    navLinks.style.left = '0px';

    screenDarkener.style.visibility = 'visible';
    screenDarkener.style.opacity = '.2';
  };

  window.closeSidenav = function(){
    navLinks.style.left = '-300px';
    screenDarkener.style.opacity = '0';

    //waits the animation ends
    setTimeout(function(){
      navLinks.style.visibility = 'collapse';
      screenDarkener.style.visibility = 'collapse';
    }, 300);
  };
}

export default () => {setHeaderActive();startCss();};