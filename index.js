const addTodo = (e) => {
    e.preventDefault();
    let newTodo = document.createElement('li');
    let newInput = document.getElementById('item').value;

    newTodo.innerText = newInput;
    newTodo.addEventListener('click', completeTodo);

    let todoButton = document.createElement('button');
    todoButton.innerText = 'x';
    todoButton.addEventListener('click', removeTodo);

    newTodo.append(todoButton);

    document.querySelector('ul').appendChild(newTodo);
}

const removeTodo = (e) => {
    e.stopPropagation();
    e.target.parentNode.remove();
}

const completeTodo = (e) => {
    if(e.target.getAttribute('aria-checked') != 'true') {
        e.target.setAttribute('aria-checked', 'true');
        document.getElementById('completed-message').style.visibility = 'visible';
        window.setTimeout(() => {
            document.getElementById('completed-message').style.visibility = 'hidden';
        }, 2000);
    } else {
        e.target.setAttribute('aria-checked', 'false');
    }
}

document.querySelector('form').addEventListener('submit', addTodo);