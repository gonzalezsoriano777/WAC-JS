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
}, 

toggleCompletedPositionInput: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted('toggleCompletedPositionInput.valueAsNumber');
    toggleCompletedPositionInput.value = '';
},

toggleAll: function() {
    todoList.toggleAll();
    }
};


