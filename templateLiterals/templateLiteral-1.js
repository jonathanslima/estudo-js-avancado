(function(){
  'use strict'

  let cheersBoox = document.getElementById('cheers');

  // let cheers = '<h1>Hello</h1> <p>This an example about using literal templates in javascript</p>'
  // If you use this way below, will throw an error 
  // let cheers = '<h1>Hello</h1> 
  //<p>This an example about using literal templates in javascript</p>'

  // use this way
  let cheers = `
    <h1>Hello</h1> 
    <p>This an example about using literal templates in javascript</p>
  `

  cheersBoox.innerHTML = cheers;
})()