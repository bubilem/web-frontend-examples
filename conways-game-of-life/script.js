let size = 40;
let field = [];
var htmlField = document.getElementById("field");

for (let i = 0; i < size * size; i++) {
  let div = document.createElement("div");
  div.onclick = (e) => {
    field[i] = field[i] ? 0 : 1;
    e.target.classList.toggle("live");
  };
  htmlField.appendChild(div);
}

let gameInterval;
let play = false;
document.getElementById("control").onclick = (e) => {
  play = !play;
  if (play) {
    console.log("plaing...");
    e.target.innerHTML = "STOP";
    gameInterval = setInterval(step, document.getElementById("delay").value);
  } else {
    console.log("stoping...");
    e.target.innerHTML = "PLAY";
    clearInterval(gameInterval);
  }
};

document.getElementById("delay").onchange = (e) => {
  if (play) {
    clearInterval(gameInterval);
    gameInterval = setInterval(step, e.target.value);
  }
};

function step() {
  let cells = htmlField.childNodes;
  field = new Array(size * size).fill(0);
  let i = 0;
  for (let cell of cells) {
    let x = i % size;
    let y = Math.floor(i / size);
    let live = cell.classList.contains("live");
    let liveNeighborsCount = 0;
    for (let neighborDirection of [
      { x: -1, y: -1 },
      { x: 0, y: -1 },
      { x: 1, y: -1 },
      { x: -1, y: 0 },
      { x: 1, y: 0 },
      { x: -1, y: 1 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
    ]) {
      let neighbourX = x + neighborDirection.x;
      if (neighbourX < 0) {
        neighbourX = size - 1;
      }
      if (neighbourX == size) {
        neighbourX = 0;
      }
      let neighbourY = y + neighborDirection.y;
      if (neighbourY < 0) {
        neighbourY = size - 1;
      }
      if (neighbourY == size) {
        neighbourY = 0;
      }
      let neighbourIndex = neighbourY * size + neighbourX;
      if (cells[neighbourIndex].classList.contains("live")) {
        liveNeighborsCount++;
      }
    }
    if (
      (live && (liveNeighborsCount == 2 || liveNeighborsCount == 3)) ||
      (!live && liveNeighborsCount == 3)
    ) {
      field[i] = 1;
    }
    i++;
  }
  i = 0;
  for (let cell of cells) {
    if (field[i++] == 1) {
      cell.classList.add("live");
    } else {
      cell.classList.remove("live");
    }
  }
}
