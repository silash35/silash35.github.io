import globalize from './_globalize';

function globalizeAlertFunctions(){
  globalize('closeAlert', function(t){
    t.parentElement.parentElement.style.opacity = '0';

    setTimeout(function(){
      t.parentElement.parentElement.style.display = 'none';
    }, 300);
  });
}

export default () => {
  globalizeAlertFunctions();
};