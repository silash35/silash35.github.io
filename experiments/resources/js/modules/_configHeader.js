/* eslint-disable no-undef */
import globalize from './_globalize';

function setHeaderActive(){
  const links = navLinks.getElementsByTagName('li');
  let title = document.querySelector('title').innerText;

  if(title == 'Experiments'){title = 'Home';}
  for(let i = 0; i < links.length; ++i){
    if(title == links[i].innerText){
      links[i].classList.add('active');
    }
  }
}

function globalizeSidenavFunctions(){
  globalize('openSidenav',() => {
    navLinks.style.visibility = 'visible';
    navLinks.style.left = '0px';

    screenDarkener.style.visibility = 'visible';
    screenDarkener.style.opacity = '.2';
  });

  globalize('closeSidenav', () => {
    navLinks.style.left = '-300px';
    screenDarkener.style.opacity = '0';

    //waits the animation ends
    setTimeout(function(){
      navLinks.style.visibility = 'collapse';
      screenDarkener.style.visibility = 'collapse';
    }, 300);
  });
}

export default () => {
  globalize('navLinks', document.querySelector('.navLinks'));
  globalize('screenDarkener',document.querySelector('.screenDarkener'));

  setHeaderActive();
  globalizeSidenavFunctions();
};