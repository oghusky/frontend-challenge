window.addEventListener("load", () => {
  class Puzzle {
    constructor(tiles) {
      this.tiles = tiles;
      this.grid = [
        // position 1 is x
        // position 2 is y
        [0, 0], [100, 0], [200, 0],
        [0, 100], [100, 100], [200, 100],
        [0, 200], [100, 200], [200, 200]
      ];
    }
    init() {
      // grab figure and ul elements
      const figure = document.querySelector("figure.puzzle-figure");
      const oldBoard = document.querySelector("ul.puzzle");
      const board = document.createElement("ul");
      board.classList.add("new-puzzle")
      board.style.width = `300px`;
      board.style.height = `${100 * (this.tiles / 3)}px`;
      // replace old board with new one
      // so board size and tile count are dynamic
      figure.replaceChild(board, oldBoard);
      // shuffles numbers in list items.
      this
        .shuffle()
        .forEach((tile, i) => {
          // creates tile elements for each shuffled number
          const token = document.createElement("li")
          token.classList.add("tile");
          token.innerHTML = `${tile}`;
          // commented out because this shuffle is based on grid
          // trying to make work without grid
          token.style.top = `${this.grid[i][0]}px`
          token.style.left = `${this.grid[i][1]}px`
          token.style.width = "100px"
          token.style.height = "100px"
          token.setAttribute("value", i)
          board.appendChild(token);
        })
      this.setEmptyPosition();
      this.checkPosition();
    }
    shuffle() {
      // loop through number given to new puzzle
      const tilesArr = []
      for (var i = 0; i < this.tiles - 1; i++) {
        tilesArr.push(i + 1);
      }
      // randomizes array of given tile number
      return tilesArr.sort(() => .5 - Math.random());
    }
    setEmptyPosition() {
      // same block is set as empty for each game
      localStorage.setItem("emptyPosition", JSON.stringify([200, 200]))
    }
    checkPosition() {
      document.querySelectorAll(".tile").forEach(tile => {
        tile.addEventListener("click", (e) => {
          // check for position of tile compared to other tiles
          const empty = JSON.parse(localStorage.getItem("emptyPosition"));
          // if position is available replace localStorage item with current positon
          // and move tile to newly available position then replace localstorage with old position
          // move right
          if ((parseInt(e.target.style.left.split("px")[0]) + 100 === empty[0]) && (parseInt(e.target.style.top.split("px")[0]) === empty[1])) {
            this.tileAction(e, empty);
          }
          // move left
          if ((parseInt(e.target.style.left.split("px")[0]) - 100 === empty[0]) && (parseInt(e.target.style.top.split("px")[0]) === empty[1])) {
            this.tileAction(e, empty);
          }
          // move down
          if ((parseInt(e.target.style.left.split("px")[0]) === empty[0]) && (parseInt(e.target.style.top.split("px")[0]) + 100 === empty[1])) {
            this.tileAction(e, empty);
          }
          // move up
          if ((parseInt(e.target.style.left.split("px")[0]) === empty[0]) && (parseInt(e.target.style.top.split("px")[0]) - 100 === empty[1])) {
            this.tileAction(e, empty);
          }
        })
      })
    }
    tileAction(e, empty) {
      // set current tile position to empty position from ls
      // set empty position in ls to tiles old position
      localStorage.setItem("tempEmptyPosition", JSON.stringify([parseInt(e.target.style.left.split("px")[0]), parseInt(e.target.style.top.split("px")[0])]))
      e.target.style.left = `${empty[0]}px`;
      e.target.style.top = `${empty[1]}px`;
      const temp = JSON.parse(localStorage.getItem("tempEmptyPosition"))
      localStorage.setItem("emptyPosition", JSON.stringify(temp))
    }
  }
  // create new puzzle
  const puzzle = new Puzzle(9);
  // init puzzle
  puzzle.init();
})