const board = document.querySelector(".container");

let size = 16;

for (i = 0; i < (size**2); i++) {
  const box = document.createElement("div");
  box.style.cssText = `width: calc(50vh/${size}); height: calc(50vh/${size}); 
                       border-color: black; border-style: solid; border-width: 1px;`;
  board.appendChild(box);
}

