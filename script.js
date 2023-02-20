let addMessage = document.querySelector('.message'),
  addButton = document.querySelector('.add'),
  todo = document.querySelector('.todo')

let todoList = [];

if(localStorage.getItem('todo')){
  todoList = JSON.parse(localStorage.getItem('todo'))
  displayMessages();
}


addButton.addEventListener('click', function (){

  let newTodo = {
    todo: addMessage.value,
    checked: false,
    important: false
  }

  todoList.push(newTodo)
  displayMessages()
  localStorage.setItem('todo', JSON.stringify(todoList))
})

function displayMessages(){
  let displayMessage = '';
  todoList.forEach(function (item, index){
    displayMessage +=
    `
  <li>
  <input type="checkbox" id="item_${index}" ${item.checked ? 'checked' : ''}>
  <label for="item_${index}">${item.todo}</label>
  </li>
    `;
  todo.innerHTML = displayMessage
  console.log(displayMessage)
  })

}

todo.addEventListener('change', function (event){
  let idInput = event.target.getAttribute('id');
  let forLabel = todo.querySelector('[for='+ idInput +']')
  console.log(forLabel)
})