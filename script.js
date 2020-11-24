var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];


function renderTodos(){
    for (var i = 0;i < todos.length; i++){
        // pcreate li emel
       var li = document.createElement('li')
        // add to text to li
        li.innerText=todos[i]

        
        //apend it to ul"todolist
        todoList.appendChild(li)
        
        
        
    }
}


renderTodos()