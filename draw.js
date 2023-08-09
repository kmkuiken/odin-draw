const board = document.querySelector(".container");

let size = 16;

for (let i = 0; i < (size**2); i++) {
  const box = document.createElement("div");
  box.style.cssText = `width: calc(50vh/${size}); height: calc(50vh/${size}); 
                       border-color: black; border-style: solid; border-width: 1px;`;
  box.setAttribute("class", "box");
  board.appendChild(box);
}

let boxes = document.getElementsByClassName("box");

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


