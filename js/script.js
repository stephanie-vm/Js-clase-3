//Tema de hoy:lista de tareas

//primero tengo ingresar al form con el ID
const formulario = document.getElementById('new-task-form');
//Defino un contador 
let contador=0;
//ingreso al ID de la lista
let lista = document.getElementById('task-list');
//Defino un arreglo para guardar los datos que se digitan
let tarea=[];

//Cada vez que se da click en agragar:
//acordarme de poner la coma entre el 'submit' y el evento***
formulario.addEventListener('submit',(event)=>{
    //Con esto se cancela el default del form.
    event.preventDefault()
    console.log(formulario.elements[0].value);

//Items de la lista
    let item=document.createElement('li');
    item.className ='task-list__item';

//checkbox
    let checkbox=document.createElement('input');
    checkbox.setAttribute('type','checkbox');
    checkbox.setAttribute('id', `tarea-${contador}`);
//Label
    let label=document.createElement('label');
    label.setAttribute('id',`tarea-${contador}`);
    label.innerHTML=formulario.elements[0].value;

//Acá se agregan los elementos al li
    item.appendChild(checkbox);
    item.appendChild(label);
    lista.appendChild(item);
//Objeto
    let miObjeeto={
        id:contador,
        name:formulario.elements[0].value,
        completado:false,
        fecha:formulario.elements[0].value,
    };
//Agrego esto al array tareas
    tarea.push(miObjeeto);
    console.log(tarea);
    contador++;
//Reseteo el form
    formulario.elements[0].value='';
})