var size = 15;
var toWin = 5;
var field = new Array(size).fill().map(() => new Array(size).fill("-"));
var gameOver = false;

play();

function play() {
  var player = "x";
  var htmlField = document.getElementById("field");
  var div;
  for (let i = 0; i < size * size; i++) {
    div = document.createElement("div");
    div.onclick = function () {
      if (gameOver) {
        clearField();
        gameOver = false;
      } else if (this.className != "x" && this.className != "o") {
        this.classList.add(player);
        field[Math.floor(i / size)][i % size] = player;
        if ((gameOver = checkWin(player, Math.floor(i / size), i % size))) {
          console.log("Player " + player + " wins.");
        }
        player = player == "x" ? "o" : "x";
      }
    };
    htmlField.appendChild(div);
  }
}

function clearField() {
  field = new Array(size).fill().map(() => new Array(size).fill("-"));
  for (let div of document.getElementById("field").getElementsByTagName("div")) {
    div.classList.remove("x", "o", "win");
  }
}

function clearWin() {
  for (let div of document.getElementById("field").getElementsByTagName("div")) {
    div.classList.remove("win");
  }
}

function checkWin(player, y, x) {
  var directions = [
    [
      [0, -1],
      [0, 1],
    ],
    [
      [-1, 0],
      [1, 0],
    ],
    [
      [-1, -1],
      [1, 1],
    ],
    [
      [-1, 1],
      [1, -1],
    ],
  ];
  var f = document.getElementById("field").getElementsByTagName("div");
  for (let direction of directions) {
    var inLine = 1;
    f[y * size + x].classList.add("win");
    for (let step of direction) {
      let nx = x;
      let ny = y;
      for (let i = 1; i < size; i++) {
        nx += step[0];
        ny += step[1];
        if (nx < 0 || ny < 0 || nx >= size || ny >= size || field[ny][nx] != player) {
          break;
        }
        inLine++;
        f[ny * size + nx].classList.add("win");
      }
    }
    if (inLine >= toWin) {
      return true;
    }
    clearWin();
  }
  return false;
}
