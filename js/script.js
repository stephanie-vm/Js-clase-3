//MODELO
//Defino un contador 
let contador=0;
let tarea=[];


let datos =localStorage.getItem('tarea');
    if (datos !== null) {
        tarea = JSON.parse(datos);
    }
console.log(tarea);

function annadirTarea(nomreTarea, fechaTarea, completadoTarea) {
    //Objeto
    let miObjeto={
        id:contador,
        nombre:nomreTarea,
        completado:completadoTarea,
        fecha:fechaTarea,
    };
    //Agrego esto al array tareas
    tarea.push(miObjeto);
    //Aumento el contador
    contador++;

    appendTareaDOM(miObjeto);
    localStorage.setItem('tarea', JSON.stringify(tarea));


}
//VISTAS
let lista = document.getElementById('task-list');

function appendTareaDOM(tarea) {

//Items de la lista
let item=document.createElement('li');
item.className ='task-list__item';

//checkbox
let checkbox=document.createElement('input');
checkbox.setAttribute('type','checkbox');
checkbox.setAttribute('id', `tarea-${tarea.id}`);
//Label
let label=document.createElement('label');
label.setAttribute('id',`tarea-${tarea.id}`);
label.innerHTML=`${tarea.nombre}-${tarea.fecha}`
//Acá se agregan los elementos al li
item.appendChild(checkbox);
item.appendChild(label);
lista.appendChild(item);

}

for (let i = 0; i < tarea.length; i++) {
    appendTareaDOM(tarea);
    
}


//CONTROLADOR
const formulario = document.getElementById('new-task-form');
//Cada vez que se da click en agregar:
//acordarme de poner la coma entre el 'submit' y el evento***
formulario.addEventListener('submit',(event)=>{
    //Con esto se cancela el default del form.
    event.preventDefault();

//annadirTarea va a agregar una tarea en la lista
annadirTarea(formulario.elements[0].value, formulario.elements[1].value, false);
//Reseteo el form
    formulario.elements[0].value='';
    formulario.elements[1].value = '';
})