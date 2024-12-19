const input = document.getElementById('input');
const creatButton = document.getElementById('create_button');
const todolist = document.getElementById('todo_list');

const createTodo = () => {


    if(!input.value.trim()) return alert('напиши что нибудь')

    const div = document.createElement('div');
    const text = document.createElement('h3');

    div.setAttribute('class', "block_text");

    text.innerHTML = input.value;

    div.append(text);
    todolist.append(div);

    input.value = "";

    const editBtn = document.createElement("button")
    editBtn.setAttribute('class', "edit_button")
    editBtn.innerHTML = 'edit'

    editBtn.onclick = () => {
        text.innerHTML = prompt()
    }

    const buttons_div = document.createElement('div')

    buttons_div.setAttribute('class', 'buttons_div')

    buttons_div.append(editBtn)




    const deleteBtn = document.createElement('button')
    deleteBtn.setAttribute('class', 'delete_button' )
    deleteBtn.innerHTML = 'delete'
    buttons_div.append(deleteBtn)
    div.append(buttons_div)
    deleteBtn.onclick = () => {
        todolist.removeChild(div)
    }
}

//  creatButton.addEventListener('click', createTodo);

creatButton.onclick = () => createTodo();

input.addEventListener('keydown', (e) =>{
    if(e.key === "Enter") createTodo();
});

for(let i = 0; i < 10; i ++){
    console.log(i);
}
