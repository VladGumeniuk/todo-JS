const formToDo = document.querySelector(".todo__form");
const inputToDo = document.querySelector(".todo__form-input");
const listAdd = document.querySelector(".list-add");
const listDone = document.querySelector(".list-dones");

let saveLS = [];
let doneLS = [];

if (localStorage.getItem("toDo")) {
  saveLS = JSON.parse(localStorage.getItem("toDo"));
  saveLS.forEach(function (task) {
    insertHTML(task);
  });
}
if (localStorage.getItem("done")) {
  doneLS = JSON.parse(localStorage.getItem("done"));
  doneLS.forEach(function (task) {
    doneHTML(task);
  });
}

formToDo.addEventListener("submit", addToDo);
listAdd.addEventListener("click", deleteToDo);
listAdd.addEventListener("click", doneToDo);
listDone.addEventListener("click", deleteToDo);

function addToDo(event) {
  event.preventDefault();

  const textToDo = inputToDo.value;

  const newTask = {
    id: Date.now(),
    text: textToDo,
  };

  saveLS.push(newTask);
  setLS();

  insertHTML(newTask);

  inputToDo.value = "";
  inputToDo.focus();
}

function deleteToDo(event) {
  if (event.target.dataset.action !== "delete") {
    return;
  }

  const parenNode = event.target.closest(".list-add-item");

  const id = Number(parenNode.id);
  saveLS = saveLS.filter(function (toDo) {
    if (toDo.id === id) {
      return false;
    } else {
      return true;
    }
  });
  setLS();

  doneLS = doneLS.filter(function (toDo) {
    if (toDo.id === id) {
      return false;
    } else {
      return true;
    }
  });
  localStorage.setItem("done", JSON.stringify(doneLS));

  parenNode.remove();
}

function doneToDo(event) {
  if (event.target.dataset.action !== "done") {
    return;
  }
  const id = event.target.closest(".list-add-item");
  const idSpan = id.querySelector("#ttext");
  const spanText = idSpan.innerText;
  console.log(spanText);

  const twoTask = {
    id: Date.now(),
    text: spanText,
  };

  doneLS.push(twoTask);
  localStorage.setItem("done", JSON.stringify(doneLS));

  doneHTML(twoTask);

  const parenNode = event.target.closest(".list-add-item");

  const idLi = Number(parenNode.id);
  saveLS = saveLS.filter(function (toDo) {
    if (toDo.id === idLi) {
      return false;
    } else {
      return true;
    }
  });
  setLS();

  parenNode.remove();
}

function setLS() {
  localStorage.setItem("toDo", JSON.stringify(saveLS));
}

function insertHTML(task) {
  const createHTML = `
    <li id="${task.id}" class="list-add-item">
      <span id="ttext">${task.text}</span>
      <button class="list-done" data-action="done" role="article"></button>
      <button class="list-delete" data-action="delete" role="article">X</button>
    </li>`;

  listAdd.insertAdjacentHTML("beforeend", createHTML);
}

function doneHTML(task) {
  const createHTML = `
    <li id="${task.id}" class="list-add-item">
      <span id="ttext">${task.text}</span>
      <button class="list-delete" data-action="delete" role="article">X</button>
    </li>`;

  listDone.insertAdjacentHTML("beforeend", createHTML);
}
