var newInput=document.createElement('input');
newInput.type='text';
newInput.className='form-control mr-2';
newInput.id='description';
var form=document.getElementById('addForm');
var sub = document.getElementById('submit');
form.insertBefore(newInput,sub);

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

function addItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var li= document.createElement('li');
    li.className='list-group-item';
    var liText=document.createTextNode(newItem);
    li.appendChild(liText);
    var newItem1=document.getElementById('description').value;
    var liText1=document.createTextNode(" " + newItem1);
    li.appendChild(liText1);
    
    var deleteBtn = document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);

    var editBtn = document.createElement('button');
    editBtn.className='btn btn-info btn-sm float-right edit ';
    editBtn.appendChild(document.createTextNode('EDIT'));
    li.appendChild(editBtn);

    itemList.appendChild(li);
}

function removeItem(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
var text = e.target.value.toLowerCase();
var items =itemList.getElementsByTagName('li');
Array.from(items).forEach(function(item){
var itemName=item.firstChild.textContent;
var description=item.childNodes[1].textContent;
if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) !=-1 ){
    item.style.display='block';
}
else{
    item.style.display='none';
}
});
}