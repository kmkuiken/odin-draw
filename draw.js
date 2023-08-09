const board = document.querySelector(".container");
const sizeConfirm = document.querySelector("#board-size-confirm");
const sizeInput = document.querySelector("#board-size");
let size = sizeInput.value;
let defaultSize = 16;
let boxes = document.getElementsByClassName("box");

for (let i = 0; i < (defaultSize**2); i++) {
  const box = document.createElement("div");
  box.style.cssText = `width: calc(50vh/${defaultSize}); height: calc(50vh/${defaultSize}); 
                       border-color: black; border-style: solid; border-width: 1px;`;
  box.setAttribute("class", "box");
  board.appendChild(box);
};

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

sizeInput.addEventListener("input", (event) => {
  size = event.target.value;
});

sizeConfirm.addEventListener("click", () => {
  if (defaultSize != size) {
    // removing previously made boxes
    
    // need ref to size because as elements are removed boxes.length becomes smaller
    for (let i = 0; i < (defaultSize**2); i++) {
      boxes[0].remove();
    }

    // creating new boxes with new size parameter
    for (let i = 0; i < (size**2); i++) {
      const box = document.createElement("div");
      box.style.cssText = `width: calc(50vh/${size}); height: calc(50vh/${size}); 
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

    // set new default size in case user changes size again
    defaultSize = size;
  }
});