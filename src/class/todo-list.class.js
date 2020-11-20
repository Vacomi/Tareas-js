import { Todo } from "./todo.class";


export class TodoList{
    // tareas;
    constructor(){
        // this.tareas = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(task){
        this.tareas.push( task );
        this.guardarLocalStorage();
    }

    eliminarTodo(id){
       this.tareas = this.tareas.filter( vari => vari.id != id)  // regresa un nuevo arreglo excluyendo lo que coincida 
       this.guardarLocalStorage();
    }

    estadoTodo(id){
        for ( const todo of this.tareas ) {

            // console.log(id, todo.id); diferenciamos de numeros de strings

            if(todo.id == id){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados(){
        this.tareas = this.tareas.filter( vari => !vari.completado );
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        // Convertimos this.tareas a formato JSON para no perder la data
        localStorage.setItem('llave',JSON.stringify( this.tareas ) );
    }

    cargarLocalStorage(){
        if(localStorage.getItem('llave')){ // si existe la llave
            
            //Transformamos un JSON a su tipo Origen
            this.tareas = JSON.parse( localStorage.getItem('llave') );
                // console.log('Cargar Local: ',this.tareas);

        }else{
            this.tareas = [];
        }

        // Haciendo lo mismo, pero con un operador Ternario

        // this.tareas = localStorage.getItem('llave') ? JSON.parse(localStorage.getItem('llave')) : [];


        // this.tareas = this.tareas.map( obj => Todo.fromJson(obj) );
        this.tareas = this.tareas.map( Todo.fromJson );
 
    }
}