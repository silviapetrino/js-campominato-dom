
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

  const bombsList = generateUniqueRandomBombs();
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

function gameOver() {
  container.innerHTML = `<div id="gameover">Hai perso!</div>`
}

// function startGameMedium(){
//   resetGame();

//   generateUniqueRandomBombs()

//     for(i = 1; i < 82; i++) {
//       const square = createSquareMedium(i);
//       container.append(square);
//       square.addEventListener("click", hendleClickCell);
//     } 
//   }

//   function startGameHard(){
//     resetGame();

//     generateUniqueRandomBombs()

//     for(i = 1; i < 50; i++) {
//       const square = createSquareHard(i);
//       container.append(square);
//       square.addEventListener("click", hendleClickCell);
//     } 
//   }



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


function createSquareMedium(index) {
  const newSquare = document.createElement("div");
  newSquare.classList.add("square-medium");
  newSquare.innerHTML = "";
  newSquare.id = index;
  return newSquare;
}


function createSquareHard(index) {
  const newSquare = document.createElement("div");
  newSquare.classList.add("square-hard");
  newSquare.innerHTML = "";
  newSquare.id = index;
  return newSquare;
}



// 1. funzione per generare  un numero da 1 a 16: inserisco un ciclo che gira finché non sono usciti tutti i numeri, che aggiungo man mano alla lista;



function generateUniqueRandomBombs() {
  const min = 1;
  const max = 100;
  const bombsList = [];

  while (bombsList.length < 16) {
    const numeroCasuale = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!bombsList.includes(numeroCasuale)) {
      bombsList.push(numeroCasuale);
    }
  }

  return bombsList;
}

// 2. creo una funzione per il quadrato in modo che non possa essere cliccato nuovamente

function hendleClickCell() {
  this.classList.add("active");
  console.log(this.id);
  this.removeEventListener("click", hendleClickCell);
}