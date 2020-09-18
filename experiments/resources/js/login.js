import md5 from 'crypto-js/md5';
import init from './init.js';
init();

function isValid(texto){
  if(texto == ''){
    return false;
  }
  return true;
}

window.register = function(){
  const name = document.querySelector('#name');
  const mail = document.querySelector('#mail');
  const feedBack = document.querySelector('#feedBack');

  if(isValid(name.value) && isValid(mail.value)){
    feedBack.innerText = 'Sending to the server';
    feedBack.style = `color: yellow;
      border-color: yellow;
      display: inline-block;`;

    fetch('https://node-server-side.herokuapp.com/users',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name.value, mail: mail.value
      })
    })
      .then((response) => {
        if(response.ok && response.status == 200){
          feedBack.innerText = 'Successful registration';
          feedBack.style = `color: green;
          border-color: green;
          display: inline-block;`;
          window.location.href = 'userList.html';
        }
      });

  }else{
    feedBack.innerText = 'invalid data';
    feedBack.style = 'color: red; border-color: red; display: inline-block';
  }
};

function getUsers(){

  fetch('https://node-server-side.herokuapp.com/users')
    .then((response) => response.json())
    .then((response) => {
      response.forEach((user) => {
        let userAvatar = 'https://www.gravatar.com/avatar/' + md5(user.mail);

        const item = document.createElement('li');
        item.classList = 'collection-item avatar';
        item.innerHTML = `<img class="circle" src="${userAvatar}">
        <span>${user.name}</span>
        <p>Email: ${user.mail}</p>`;

        document.querySelector('#userList').appendChild(item);
      });
    });

}

if(document.querySelector('title').innerText == 'Login') {
  M.toast({html: 'Login page that communicates with an external API'});
}else{
  getUsers();
  M.toast({html: 'Shows a list of users using an external API'});
}

/*global M*/