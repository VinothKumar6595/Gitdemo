//ParentElemet
var itemList = document.querySelector('#items');
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='red';

//firstChild
console.log(itemList.firstChild);
itemList.firstChild.textContent='HEllo';

//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello';

//lastChild
console.log(itemList.lastChild);
itemList.lastChild.textContent="goodbye";

//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent="goodbye";

//nextSibling

var header = document.querySelector('.container');
console.log(header.nextSibling);
header.nextSibling.textContent='Hello1';

//nextElementSibling

var header1 = document.querySelector('.title');
console.log(header1.nextElementSibling);
header1.nextElementSibling.style.backgroundColor='grey';

//previousSibling

console.log(header.previousSibling);
header.previousSibling.textContent='HEllo';

//previousElementSibling

console.log(header1.previousElementSibling);

//create element
var newDiv = document.createElement('div');
console.log(newDiv);
//AddclassName
newDiv.className='Hello';
//Add ID
newDiv.id='bye';

//Add Attr
newDiv.setAttribute('title' , 'Hello Div');

//create a text node 

var newDivText= document.createTextNode('Hello World');

//add Textnode to div

newDiv.append(newDivText);

//Insert to DOM
var container =document.querySelector('.container');
var h1=document.querySelector('h1');
console.log(container);

container.insertBefore(newDiv,h1);







