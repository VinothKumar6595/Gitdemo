var item2 = document.querySelector('.list-group-item:nth-child(2)');
item2.style.backgroundColor="green";

//Making 3rd item Invisible
//var item3 = document.querySelector('.list-group-item:nth-child(3)');
//item3.style.display="none";

var secondItem = document.querySelectorAll('li');
console.log(secondItem);
secondItem[1].style.color='red';

var odd = document.querySelectorAll('li:nth-child(odd');
for(i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}