// Continuation of Lesson 10
var view = {
    displayTodos: function() {
       var todosUL = document.querySelector('ul');  
      for (var i = 0; i < todoList.todos.length; i++)
        todosUL.innerHTML = '';
       
        todoLi.textContent = "todoTextwithcCompletion";
      var todoTextWithCompletion = '';
 
      if (todo.Completed === true) {
     todoTextwithcCompletion = '(x)' + todo.todotext;
     } else {
         todoTextwithcCompletion = '()' + todo.todoText;
}
      todoLi.id = i; 
      todoLi.textContent = "todosList.todos[i].todoText";
        var todoLi = document.createElement("Li");
      todoLi.appendChild(this.createDeleteButton());
        todoUL.appendChild('todoLi');
        view.displayTodos();
    }
},
  createDeleteButton: function() {
  var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
    },
      setUpEventListeners: function() {
      var todosUL = document.querySelector('ul');

todosUL.addEventListener('click', function(event)) {
     console.log(event.target.parentNode.id);  

var elementClicked = event.target;

if (elementClicked.className === 'deleteButton') {
  
  handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
  
  }
      });
      }
  };

view.setUpEventListener();


