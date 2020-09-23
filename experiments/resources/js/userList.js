import md5 from 'crypto-js/md5';
import init from './modules/_init.js';
import configAlert from './modules/_configAlert';
init(); configAlert();

const getUsers = () => {

  fetch('https://node-server-side.herokuapp.com/users')
    .then((response) => response.json())
    .then((response) => {
      response.forEach((user) => {
        let userAvatar = 'https://www.gravatar.com/avatar/' + md5(user.mail);

        const item = document.createElement('li');
        item.classList = 'collectionItem avatar';
        item.innerHTML = `
        <img class="circle" src="${userAvatar}">
        <section class="collectionItemText">
          <p class='bold'>${user.name}</p>
          <p>Email: ${user.mail}</p>
        </section>`;

        document.getElementById('userList').appendChild(item);
      });
    })
  ;
};

getUsers();