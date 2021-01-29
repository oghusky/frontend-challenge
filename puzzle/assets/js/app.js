window.addEventListener("load", () => {
  class Puzzle {
    constructor(tiles) {
      this.tiles = tiles;
    }
    init() {
      const figure = document.querySelector("figure.puzzle-figure");
      const oldBoard = document.querySelector("ul.puzzle");
      const board = document.createElement("ul");
      board.classList.add("new-puzzle")
      board.style.width = `300px`;
      for (var i = 0; i < this.tiles - 1; i++) {
        const token = document.createElement("li")
        token.classList.add("tile");
        token.innerHTML = `${i + 1}`
        board.appendChild(token)
      }
      figure.replaceChild(board, oldBoard);
    }
  }
  const puzzle = new Puzzle(9);
  puzzle.init();
})