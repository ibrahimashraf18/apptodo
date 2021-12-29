var todoInp = document.getElementById('todoInp')
var parent = document.getElementById('ul')

function btnAddToDO(){
var inpValue = todoInp.value
var todoLi = document.createElement('li'); 
todoLi.setAttribute('class', 'input')
var a = document.createTextNode(inpValue);
todoLi.appendChild(a)
parent.appendChild(todoLi);


var deleteBtn = document.createElement('button')
var deleteText = document.createTextNode('DELETE')
deleteBtn.setAttribute('class', 'btn')
deleteBtn.setAttribute('onclick', 'btnDel(this)')
deleteBtn.appendChild(deleteText)
todoLi.appendChild(deleteBtn)




var editBtn = document.createElement('button')
var editText = document.createTextNode('EDIT')
editBtn.setAttribute('class' , 'btn')
editBtn.setAttribute('onclick' , 'editToDo(this)')
editBtn.appendChild(editText)
todoLi.appendChild(editBtn)



parent.appendChild(todoLi)
}



function btnDel(element){
  element.parentNode.remove();
}

function btnDall(){
  parent.innerHTML= ""
}

function editToDo(element){
    element.parentNode.firstChild.nodeValue=prompt()
}
