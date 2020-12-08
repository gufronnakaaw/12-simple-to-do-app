const todoContainer = document.querySelector('.todo-container');
const btnAdd = document.querySelector('.btn-add');
const inputAdd = document.querySelector('.input-add');

btnAdd.addEventListener('click', () => {

    if( inputAdd.value == "" ){
        alert('you must write something!');
        return;
    }

    renderData(inputAdd.value);

    inputAdd.value = "";
    
});



function renderData(username){

    const div = document.createElement('div');
    const input = document.createElement('input');
    const buttonDelete = document.createElement('button');
    const userDelete = document.createElement('i');

    buttonDelete.classList.add('btn-delete');
    
    userDelete.setAttribute('class', 'fa fa-trash');

    buttonDelete.setAttribute('onclick', "deleteThis(this)");

    buttonDelete.append(userDelete);

    input.type = 'text';
    input.setAttribute('value', username);
    input.setAttribute('disabled', '');

    div.classList.add('show');
    div.append(input, buttonDelete);

    todoContainer.append(div);
}

const deleteThis = (el) => confirm('are you sure?') ? el.parentElement.remove(el.parentElement) : '';