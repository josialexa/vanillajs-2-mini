const addTodo = (e) => {
    e.preventDefault();
    let newTodo = document.createElement('li');
    let newInput = document.getElementById('item').value;

    newTodo.innerText = newInput;

    let todoButton = document.createElement('button');
    todoButton.innerText = 'x';
    todoButton.addEventListener('click', removeTodo);

    newTodo.append(todoButton);

    document.querySelector('ul').appendChild(newTodo);
}

const removeTodo = (e) => {
    e.target.parentNode.remove();
}

document.querySelector('form').addEventListener('submit', addTodo);