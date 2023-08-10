const board = document.querySelector(".container");
const sizeConfirm = document.querySelector("#board-size-confirm");
const sizeInput = document.querySelector("#board-size");
const clearBoard = document.querySelector("#clear-board");
let size = sizeInput.value;
let defaultSize = 16;
let boxes = document.getElementsByClassName("box");

function createBoxes(startup, boxAmount) {
  if (startup === false) {
    // removing previously made boxes
    // need ref to size because as elements are removed boxes.length becomes smaller
    for (let i = 0; i < (defaultSize**2); i++) {
      boxes[0].remove();
    }
  }

  // creating new boxes
  for (let i = 0; i < (boxAmount**2); i++) {
    const box = document.createElement("div");
    box.style.cssText = `width: calc(45vw/${boxAmount}); height: calc(45vw/${boxAmount}); 
                          border-color: black; border-style: solid; border-width: 1px;`;
    box.setAttribute("class", "box");
    board.appendChild(box);
  };

  // getting reference to new boxes
  boxes = document.getElementsByClassName("box");
  
  // giving new boxes event listeners
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mousemove",  () => {
      boxes[i].style.backgroundColor = "black";
    });
  }
  
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("touchmove",  () => {
      boxes[i].style.backgroundColor = "black";
    });
  }
};

// create initial boxes on startup
createBoxes(true, defaultSize);

sizeInput.addEventListener("input", (event) => {
  size = event.target.value;
});

// reset boxes and create new ones
sizeConfirm.addEventListener("click", () => {
  if (defaultSize != size) {
    createBoxes(false, size);
    defaultSize = size;
  }
});

clearBoard.addEventListener("click", () => {
  // don't take new selection into account because we want the same size as before
  createBoxes(false, defaultSize);
});



