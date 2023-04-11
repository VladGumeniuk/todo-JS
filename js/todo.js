const toDoList = document.querySelector(".todo__add");
const toDoForm = document.querySelector(".todo__form");
const toDoInput = document.querySelector(".todo__form-input");
const doneList = document.querySelector(".todo__done");

toDoForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const toDoText = toDoInput.value;

  const liHTML = document.createElement("li");
  liHTML.classList.add("todo__add-item");
  toDoList.append(liHTML);

  const spanHTML = document.createElement("span");
  spanHTML.innerText = toDoText;
  liHTML.append(spanHTML);

  const doneHTML = document.createElement("button");
  doneHTML.classList.add("btn-done");
  liHTML.append(doneHTML);

  const buttonHTML = document.createElement("button");
  buttonHTML.innerText = "X";
  buttonHTML.classList.add("add-btn");
  liHTML.append(buttonHTML);

  doneHTML.addEventListener("click", function () {
    const liHTML = document.createElement("li");
    liHTML.classList.add("todo__add-item");
    doneList.append(liHTML);

    const spanHTML = document.createElement("span");
    spanHTML.innerText = toDoText;
    liHTML.append(spanHTML);

    const buttonHTML = document.createElement("button");
    buttonHTML.innerText = "X";
    buttonHTML.classList.add("add-btn");
    liHTML.append(buttonHTML);

    buttonHTML.addEventListener("click", function () {
      const resault = confirm("Ты уверен брат что хочешь это сделать?");

      if (resault == true) {
        this.closest(".todo__add-item").remove();
      }
    });

    this.closest(".todo__add-item").remove();
  });

  buttonHTML.addEventListener("click", function () {
    const resault = confirm("Ты уверен брат что хочешь это сделать?");

    if (resault == true) {
      this.closest(".todo__add-item").remove();
    }
  });

  toDoInput.value = "";
  toDoInput.focus();
});
