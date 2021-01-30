window.addEventListener("load", () => {
  class Puzzle {
    constructor(tiles) {
      this.tiles = tiles;
      this.grid = [
        // position 1 is x
        // position 2 is y
        ["0px", "0px"], ["100px", "0px"], ["200px", "0px"],
        ["0px", "100px"], ["100px", "100px"], ["200px", "100px"],
        ["0px", "200px"], ["100px", "200px"], ["200px", "200px"]
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
          token.style.top = this.grid[i][0]
          token.style.left = this.grid[i][1]
          token.style.width = "100px"
          token.style.height = "100px"
          token.value = i
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
      return tilesArr;
    }
    setEmptyPosition() {
      localStorage.setItem("emptyPosition", JSON.stringify(["200", "200"]))
      localStorage.setItem("notEmptyPosition", JSON.stringify(this.grid))
    }
    checkPosition() {
      // console.log(localStorage.getItem("notEmptyPosition"))
      document.querySelectorAll(".tile").forEach(tile => {
        // on click loop thru all unavailable positions
        // if position is not unavailable pass
        // if position is available replace localStorage item with current positon
        // and move tile to newly available position then replace localstorage with old position
        tile.addEventListener("click", (e) => {
          const notEmpty = JSON.parse(localStorage.getItem("notEmptyPosition"))
          notEmpty.forEach(pos => {
            if (pos.join(",") === `${e.target.style.left},${e.target.style.top}`) {
              console.log(pos)
            }
          })
        })
      })
    }
    // initialize game
    // init() {
    // grab figure and ul elements
    // const figure = document.querySelector("figure.puzzle-figure");
    // const oldBoard = document.querySelector("ul.puzzle");
    // const board = document.createElement("ul");
    // calls method to position tiles on a grid randomly
    // const positions = this.positionTiles();
    // board.classList.add("new-puzzle")
    // grid resizes height wise depending on the number of tiles given
    // currently breaks because of grid
    // may comment out and get to work without grid
    // board.style.width = `300px`;
    // board.style.height = `${100 * (this.tiles / 3)}px`
    // shuffles numbers in list items.
    // this
    //   .shuffle()
    //   .forEach((tile, i) => {
    //     // creates tile elements for each shuffled number
    //     const token = document.createElement("li")
    //     token.classList.add("tile");
    //     token.innerHTML = `${tile}`;
    //     // commented out because this shuffle is based on grid
    //     // tyring to make work without grid
    //     // token.style.top = positions[i][0]
    //     // token.style.left = positions[i][1]
    //     token.style.width = "100px"
    //     token.style.height = "100px"
    //     token.value = i
    //     board.appendChild(token);
    //   })
    // replace old board with new one
    // figure.replaceChild(board, oldBoard);
    // this.checkPositions(this.grid);
    // }
    // shuffle() {
    // loop through number given to new puzzle
    // const tilesArr = []
    // for (var i = 0; i < this.tiles - 1; i++) {
    //   tilesArr.push(i + 1);
    // }
    // randomize numbers to create new game each refresh
    //   const randomizeTiles = tilesArr.sort(() => Math.random() - 0.5)
    //   return randomizeTiles
    // }
    // positionTiles() {
    //   const randomizeGrid = this.grid.sort(() => Math.random() - 0.5);
    //   return randomizeGrid;
    // }
    // checkPositions() {
    // document.querySelectorAll(".tile")
    //   .forEach((tile, i) => {
    //     tile.addEventListener("click", (e) => {
    //       console.log()
    //     })
    //   })
    // }
  }
  const puzzle = new Puzzle(9);
  puzzle.init();
})