var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);

function addItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var li= document.createElement('li');
    li.className='list-group-item';
    var liText=document.createTextNode(newItem);
    li.appendChild(liText);
  
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