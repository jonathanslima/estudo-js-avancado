(function(){
  'use strict'

  let cheersBoox = document.getElementById('cheers');
  let name = 'Jonathan';
  let makeUppercase = function(word){
    return word.toUpperCase();
  }

  // calling a variable inside
  let cheers = `
    <h1>${makeUppercase('Hello')}, ${name}!</h1> 
    <p>This an example about using literal templates in javascript</p>
  `

  cheersBoox.innerHTML = cheers;
})()