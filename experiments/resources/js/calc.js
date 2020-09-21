import init from './init.js';
init();

let n1;
let n2;
let signal;
let display = document.querySelector('#displayText');

window.addNum = function(num){
  if(display.innerText == 0){
    display.innerText = num;
  }else{
    display.innerText += num;
  }
};

window.opera = function(sig) {
  signal = sig;
  n1 = display.innerText;
  display.innerText = '0';
};

window.equal = function(){
  n2 = display.innerText;
  n1 = parseInt(n1);
  n2 = parseInt(n2);

  const acceptedOperations = {
    div(n1,n2) {
      return n1/n2;
    },
    mul(n1,n2) {
      return n1*n2;
    },
    sub(n1,n2) {
      return n1-n2;
    },
    sum(n1,n2) {
      return n1+n2;
    }
  };

  try {
    display.innerText = acceptedOperations[signal](n1,n2);
  } catch (error) {
    console.log('Error: Operation not allowed ' + error);
  }
};
M.toast({html: 'A calculator using JavaScript'});

/*global M*/