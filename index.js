// Write your code here
// Write your code here! 
// Write your code here!const body = document.querySelector('body')


const body = document.querySelector('body')
body.removeChild(document.querySelector('#main'));

const newHeader = document.createElement('h1');
newHeader.id  = 'victory';
newHeader.textContent = 'Kevin is the champion';
body.appendChild(newHeader)