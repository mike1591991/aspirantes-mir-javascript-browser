const tareas = [];
var container = document.getElementById('container');

function handleSubmit(event) {
  let input = document.querySelector('.i_Agrega').value;
  let mike = {id: tareas.length, title: input, completed: false};
  tareas.push(mike);
  creaChk(tareas);
}

function handleCheckTask(event) {
  if (event.checked){
    tareas[event.id].completed = true;
  } else {
    tareas[event.id].completed = false;
  }
}
function handleDelete(event) {
  const onlyUncompleted = tareas.filter(tarea => tarea.completed === false);
  const onlyCompleted = tareas.filter(tarea => tarea.completed === true);
  creaChk(onlyUncompleted);
}
function tareasCompletadas() {
  const onlyCompleted = tareas.filter(tarea => tarea.completed === true);
  creaChk(onlyCompleted);
}
function tareasNoCompletas() {
  const onlyUncompleted = tareas.filter(tarea => tarea.completed === false);
  creaChk(onlyUncompleted);
}
function allTareas() {
  creaChk(tareas);
}
document.getElementById("submit").addEventListener("click", function(event){
  event.preventDefault();
});

function creaChk(obj) {
  container.replaceChildren();
  for (let i = 0; i < obj.length; i++) {
    var chk = document.createElement('input');
    chk.setAttribute('type', 'checkbox');
    chk.setAttribute('id', obj[i].id);
    chk.setAttribute('value', obj[i].title);
    chk.setAttribute('name', 'tarea');
    chk.setAttribute('onclick', 'handleCheckTask(this);');
    if (obj[i].completed === true) {
      chk.setAttribute('checked', true);
    }

    var lbl = document.createElement('label');
    lbl.setAttribute('for', obj[i].id);
    lbl.appendChild(document.createTextNode(obj[i].title));

    var br = document.createElement('br');

    container.appendChild(chk);
    container.appendChild(lbl);
    container.appendChild(br);
  }

}
