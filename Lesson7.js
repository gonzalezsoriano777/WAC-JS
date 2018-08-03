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


