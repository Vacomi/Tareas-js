import { Todo } from "../class/todo.class";

import { todoList } from "../index";

//Referencias en Html 
const divTodoList   = document.querySelector('.todo-list'); // ul

const txtInput      = document.querySelector('.new-todo'); // caja de entrada de tareas

const btnBorraTodo  = document.querySelector('.clear-completed'); // boton eliminar todos

const ulFiltros     = document.querySelector('.filters'); // zona ul con clase filtros

const anchorFiltros = document.querySelectorAll('.filtro');

// Metodo para crear en el html
export const crearTodoHtml = ( todo ) => {

    const htmlTodo = `
           
            <li class="${ (todo.completado) ? 'completed' : ''}" data-id="${ todo.id }">
                    <div class="view">
                        <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : '' }>
                        <label>${ todo.tarea }</label>
                        <button class="destroy"></button>
                    </div>
                    <input class="edit" value="Create a TodoMVC template">
			</li>
    `;

    // creamos un elemento que contenga la lista de arriba
        const div = document.createElement('div');

            div.innerHTML = htmlTodo ;
    
            divTodoList.append( div.firstElementChild );
           
            return div.firstElementChild;
}


/** EVENTOS **/
txtInput.addEventListener('keyup', ( event ) => {

    if( event.keyCode === 13 && txtInput.value.length > 0){

        console.log(txtInput.value);
        const nuevoTodo = new Todo( txtInput.value );
        todoList.nuevoTodo( nuevoTodo );
        crearTodoHtml( nuevoTodo );
        txtInput.value= '';
    }

});

divTodoList.addEventListener('click', (event) =>{
   
    const nombreElemento = event.target.localName; // input, label, button;
    const todoElemento   = event.target.parentElement.parentElement;
    const todoId         = todoElemento.getAttribute('data-id');

    console.log(nombreElemento);

    if(nombreElemento.includes('input')){ // click en el check box
        todoList.estadoTodo( todoId );
        todoElemento.classList.toggle('completed');
    }else if( nombreElemento.includes('button')){ // hay que borrar la tarea
        todoList.eliminarTodo( todoId );

        // Eliminamos del Html
        divTodoList.removeChild(todoElemento);
    }
    console.log(todoList);
});

btnBorraTodo.addEventListener('click', ()=>{

    todoList.eliminarCompletados();

    for(let i = divTodoList.children.length-1 ; i >= 0;  i--){

        const elemento = divTodoList.children[i];
        if(elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }

    }

}); 

ulFiltros.addEventListener('click', (event)=>{

        const filtro = event.target.text;
        if( !filtro ){ return }
        
        anchorFiltros.forEach( ele => ele.classList.remove('selected'));
        event.target.classList.add('selected');
        
        for( const elemento of divTodoList.children ){
            elemento.classList.remove('hidden');
            const terminado = elemento.classList.contains('completed');

            switch( filtro ){

                case 'Pendientes':
                    if( terminado ){ elemento.classList.add('hidden')};
                break;

                case 'Completados':
                    if( !terminado ){ elemento.classList.add('hidden')};
                break;

            }
        }

});
