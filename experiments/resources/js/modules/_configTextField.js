import globalize from './_globalize';

function globalizeTextFieldFunctions(){
  globalize('enableTextField', (id) => {
    document.getElementById('feedBack').style = 'display: none';
    document.getElementById(id).parentElement.classList.add('used');
  });

  globalize('disableTextField', (id) => {
    const textField = document.getElementById(id);
    if (textField.value.length == 0){
      textField.parentElement.classList.remove('used');
    }
  });
}

export default () => {
  globalizeTextFieldFunctions();
};