let addTodo = (e) => {
    e.preventDefault();
    let newTodo = document.createElement('li');
    let newInput = document.getElementById('item').value;

    newTodo.innerText = newInput;

    document.querySelector('ul').appendChild(newTodo);
}

document.querySelector('form').addEventListener('submit', addTodo);