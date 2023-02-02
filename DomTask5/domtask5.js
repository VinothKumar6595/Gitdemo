var listGroup =document.getElementsByClassName('list-group-item');
listGroup[3].style.backgroundColor='green';

for(i=0;i<listGroup.length;i++){
    listGroup[i].style.fontWeight='bold';
}

var li=document.getElementsByTagName('li');
li[2].style.backgroundColor='yellow';
for(i=0;i<li.length;i++){
    li[i].style.color='red';
}

