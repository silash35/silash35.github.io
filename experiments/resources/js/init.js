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
}

export default () => {setHeaderActive();startCss();};