
// import { TodoList } from './class/todo-list.class.js';
// import { todo } from './class/todo.class.js'; Se importa en el archivo principal

    import './style.css';
    import { Todo, TodoList } from './class'; // se importa de la carpeta class y del archivo index, predterminado
    import { crearTodoHtml } from './js/componentes';


    export const todoList = new TodoList();

    // Agregar Tareas: ANTES POR DEFECTO SE PONIA
        
        // const tarea  = new Todo('Terminar curso de Javascript!!');

        // todoList.nuevoTodo( tarea );  

        // console.log(todoList);

        // crearTodoHtml( tarea );


    /** Local Storage y Session Storage usado en front - end **/
            // localStorage.setItem('mi-Key','ABC123');

            // setTimeout(() => {
            //     localStorage.removeItem('mi-Key');
            // }, 1500);
    // Se esta acortando fefeiiakdjfef


    todoList.tareas.forEach(element  => crearTodoHtml( element));  // crearTodoHtml() asi tambien funciona para 1

    // const newTodo = new Todo('Aprender Javascript');
    // todoList.nuevoTodo(newTodo);
    //todoList.tareas[0].imprimirClase();

    console.log('Tareras', todoList.tareas);
