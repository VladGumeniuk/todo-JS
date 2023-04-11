const containerNote = document.querySelector(".box");

let itemsArray = [];
localStorage.setItem("items", JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem("items"));

let createNote = () => {
  document.querySelector(".btn").addEventListener("click", function () {
    let displayNote = `
         <li class="todo__add-item">
          <span>Hello World!</span>
          <button class="btn-done" role="article"></button>
          <button class="add-btn" role="article">X</button>
        </li>
    `;
    containerNote.innerHTML += displayNote;
    itemsArray.push(displayNote);
    localStorage.setItem("items", JSON.stringify(itemsArray));
  });
};

createNote();

data.forEach((item) => {
  createNote(item);
});

let delNote = (that) => {
  that.closest("div.card").remove();
};
