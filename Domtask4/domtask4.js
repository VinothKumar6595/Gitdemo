var listGroup =document.getElementsByClassName('list-group-item');
console.log(listGroup);
listGroup[3].style.backgroundColor='green';

for(i=0;i<listGroup.length;i++){
    listGroup[i].style.fontWeight='bold';
}