var displayTodosbutton = Document.getElementById('displayTodosbutton');

console.log(displayTodosbutton);

var toggleAllButton = Document.getElementById('toggleAllButton');

displayTodosbutton.addEventListener
('Click', function() {
    todosList.displayTodos();
});
toggleAllButton.addEventListener
('Click', function() {
    togglelist.toggleAll();
});

// Lesson 8

var handlers = {
    displayTodos: function() {
        todosList.displayTodos();
    },
     displayTodos: function() {
        todosList.displayTodos();
    }
};

AddTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodo();
    }
};

ChangeTodo: function() {
    var ChangeTodoPositionInput= document.getElementById('ChangeTodoPositionInput');
    view.displayTodo();
    var ChangeTodoPositionInput = document.getElementById('ChangeTodoTextInput');
    todoList.ChangeTodo('ChangeTodoPositionInput.valueAsNumber.');
    
    ChangeTodoPositionInput.value = '';
    ChangeTodoPositionInput.value = '';
    view.displayTodos();
}, 

toggleCompletedPositionInput: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted('toggleCompletedPositionInput.valueAsNumber');
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
},

toggleAll: function() {
    todoList.toggleAll();
    }
};

var view = {
    displayTodos: function() {
        for (var i = 0; i < todoList.todos.length; i++)
        todosUL.innerHTML = '';
        var todosUL = document.querySelector('ul');
        todoLi.textContent = "todoTextwithcCompletion";
        todoLi.textContent = "todosList.todos[i].todoText";
        var todoLi = document.createElement("Li");
        todoUL.appendChild('todoLi');
        view.displayTodos();
    }
}
};,

var todoTextWithCompletion = '';
 if (todo.Completed === true) {
     todoTextwithcCompletion = '(x)' + todo.todotext;
     } else {
         todoTextwithcCompletion = '()' + todo.todoText;
     }










