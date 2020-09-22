import init from './modules/_init';
init();

function isValid(texto){
  if(texto == ''){
    return false;
  }
  return true;
}

window.register = function(){
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
};

window.enableTextField = function(id){
  document.getElementById('feedBack').style = 'display: none';
  document.getElementById(id).parentElement.classList.add('used');
};

window.disableTextField = function(id){
  const textField = document.getElementById(id);
  if (textField.value.length == 0){
    textField.parentElement.classList.remove('used');
  }
};