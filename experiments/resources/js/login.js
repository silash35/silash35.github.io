import globalize from './modules/_globalize';
import configTextField from './modules/_configTextField';
import init from './modules/_init';
init(); configTextField();

function isValid(texto){
  if(texto == ''){
    return false;
  }
  return true;
}

globalize('register', () => {
  const name = document.getElementById('name');
  const mail = document.getElementById('mail');
  const feedBack = document.getElementById('feedBack');

  if(isValid(name.value) && isValid(mail.value)){
    feedBack.innerText = 'Sending to the server';
    feedBack.style = `color: #ffde03;
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
          display: inline-block;`;
          window.location.href = 'userList.html';
        }
      });

  }else{
    feedBack.innerText = 'invalid data';
    feedBack.style = 'color: red; display: inline-block';
  }
});