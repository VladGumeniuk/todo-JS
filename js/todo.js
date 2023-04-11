const toDoList = document.querySelector(".list-add");
const toDoForm = document.querySelector(".todo__form");
const toDoInput = document.querySelector(".todo__form-input");
const doneList = document.querySelector(".list-done");

let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
localStorage.setItem("items", JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem("items"));

const liMaker = (text) => {
  const liHTML = document.createElement("li");
  liHTML.classList.add("todo__add-item");
  toDoList.append(liHTML);

  const spanHTML = document.createElement("span");
  spanHTML.innerText = text;
  liHTML.append(spanHTML);

  const doneHTML = document.createElement("button");
  doneHTML.classList.add("btn-done");
  liHTML.append(doneHTML);

  const buttonHTML = document.createElement("button");
  buttonHTML.classList.add("add-btn");
  buttonHTML.innerText = "X";
  liHTML.append(buttonHTML);

  doneHTML.addEventListener("click", function () {
    const liHTML = document.createElement("li");
    liHTML.classList.add("todo__add-item");
    doneList.append(liHTML);

    const spanHTML = document.createElement("span");
    spanHTML.innerText = text;
    liHTML.append(spanHTML);

    const buttonHTML = document.createElement("button");
    buttonHTML.classList.add("add-btn");
    buttonHTML.innerText = "X";
    liHTML.append(buttonHTML);

    buttonHTML.addEventListener("click", function () {
      this.closest(".todo__add-item").remove();
    });

    this.closest(".todo__add-item").remove();
  });

  const buttons = document.querySelectorAll(".add-btn");

  buttons.forEach((button, index) => {
    button.addEventListener("click", function () {
      const buttonID = index;
      buttonHTML.addEventListener("click", function () {
        buttonHTML.closest(".todo__add-item").remove();
        data.splice(buttonID, 1);
        localStorage.setItem("items", JSON.stringify(itemsArray));
        console.log(data);
      });
      console.log(buttonID);
    });
  });
};

toDoForm.addEventListener("submit", function (e) {
  e.preventDefault();

  itemsArray.push(toDoInput.value);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  liMaker(toDoInput.value);
  toDoInput.value = "";
  toDoInput.focus();
});

data.forEach((item) => {
  liMaker(item);
});

document.querySelector(".btn-clear").addEventListener("click", function () {
  localStorage.clear();
});
// =======================
