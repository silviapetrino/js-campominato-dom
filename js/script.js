
const button = document.getElementById("start-game");
const container = document.querySelector(".container_sp");
const gameChoise = document.getElementById("game-difficult");
const gameOverMessage = document.getElementById("gameover");


  // al click del bottone la scelta di gioco selezionata attiva la funzione corrispondente

button.addEventListener("click", function () {
  resetGame();
  if (gameChoise.value === "easy") {
    startGameEasy();
  } else if (gameChoise.value === "medium") {
    startGameMedium();
  } else if (gameChoise.value === "hard") {
    startGameHard();
  }
});


// *********functions*************


function resetGame() {
  return container.innerHTML = " ";
}


function startGameEasy() {
  resetGame();

  const bombsList = generateUniqueRandomBombs(1, 100);
  console.log(bombsList);

  for (i = 1; i < 101; i++) {
    const isBomb = bombsList.includes(i);
    const square = createSquare(i, isBomb);
    container.append(square);

    if (!isBomb) {
      square.addEventListener("click", hendleClickCell);
    } else {
      square.classList.add("bomb");
      square.addEventListener("click", gameOver);
    }
    }
}


function startGameMedium() {
  resetGame();

  const bombsList = generateUniqueRandomBombs(1, 81);
  console.log(bombsList);

  for (i = 1; i < 82; i++) {
    const isBomb = bombsList.includes(i);
    const square = createSquareMedium(i, isBomb);
    container.append(square);

    if (!isBomb) {
      square.addEventListener("click", hendleClickCell);
    } else {
      square.classList.add("bomb");
      square.addEventListener("click", gameOver);
    }
    }
}

  function startGameHard(){
    resetGame();
  
    const bombsList = generateUniqueRandomBombs(1, 49);
    console.log(bombsList);
  
    for (i = 1; i < 50; i++) {
      const isBomb = bombsList.includes(i);
      const square = createSquareHard(i, isBomb);
      container.append(square);
  
      if (!isBomb) {
        square.addEventListener("click", hendleClickCell);
      } else {
        square.classList.add("bomb");
        square.addEventListener("click", gameOver);
      }
      }
  }



  // i quadrati sono creati in base alla difficoltà del gioco scelta 

// 3. aggiungo l'argomento isBomb: se il quadrato è na bomba, aggiungi la classe bomba

function createSquare(index, isBomb) {
  const newSquare = document.createElement("div");
  newSquare.classList.add("square-easy");

  if (isBomb) {
    newSquare.classList.add("bomb");
  }

  newSquare.innerHTML = "";
  newSquare.id = index;
  return newSquare;
}


function createSquareMedium(index, isBomb) {
  const newSquare = document.createElement("div");
  newSquare.classList.add("square-medium");

  if (isBomb) {
    newSquare.classList.add("bomb");
  }

  newSquare.innerHTML = "";
  newSquare.id = index;
  return newSquare;
}


function createSquareHard(index, isBomb) {
  const newSquare = document.createElement("div");
  newSquare.classList.add("square-hard");

  if (isBomb) {
    newSquare.classList.add("bomb");
  }

  newSquare.innerHTML = "";
  newSquare.id = index;
  return newSquare;
}



// 1. funzione per generare  un numero da 1 a 16: inserisco un ciclo che gira finché non sono usciti tutti i numeri, che aggiungo man mano alla lista;

/**
 * 
 * @param {number}  
 * @param {number}  
 * 
 */
function generateUniqueRandomBombs(min, max) {
  const bombsList = [];

  while (bombsList.length < 16) {
    const numeroCasuale = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!bombsList.includes(numeroCasuale)) {
      bombsList.push(numeroCasuale);
    }
  }

  return bombsList;
}



// 2. creo una funzione per un elemento in modo che non possa essere cliccato nuovamente

function hendleClickCell() {
  this.classList.add("active");
  console.log(this.id);
  this.removeEventListener("click", hendleClickCell);
}



// 4. gameOver

function gameOver() {
  const bombSquares = document.querySelectorAll(".bomb");
  const numBombSquares = bombSquares.length;
  
  for (let i = 0; i < numBombSquares; i++) {
    bombSquares[i].classList.add("activeted");
  }


}

