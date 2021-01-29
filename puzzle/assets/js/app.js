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
      this.shuffle().forEach(tile => {
        const token = document.createElement("li")
        token.classList.add("tile");
        token.innerHTML = `${tile}`
        board.appendChild(token)
      })
      figure.replaceChild(board, oldBoard);
    }
    shuffle() {
      const tilesArr = []
      for (var i = 0; i < this.tiles - 1; i++) {
        tilesArr.push(i + 1);
      }
      const randomizeTiles = tilesArr.sort(() => Math.random() - 0.5)
      return randomizeTiles
    }
  }
  const puzzle = new Puzzle(9);
  puzzle.init();
  // puzzle.shuffle();
})