const boxes = document.querySelectorAll('.box');
const player1 = 'X';
const player2= 'O';
let counter = 0;

const winner = document.getElementsByTagName('h1')



function firstPlayerInsertOption(element){
    element.innerText = player1
}

function secondPlayerInsertOption(element){
    element.innerText = player2
}


function determineTurn(element){
    if (counter % 2 == 0){
        secondPlayerInsertOption(element);
    }
    else{
        firstPlayerInsertOption(element)
    }
    counter ++;
    if (counter > 4){
        determineWinner()
        if (determineWinner() != null) {
            const winner = document.createElement('h1')
            if (determineWinner() === player1) {
                winner.textContent = `The winner is Player 1`
            } else {
                winner.textContent = `The winner is Player 2`
            }
            document.body.appendChild(winner)
        }
    }
}

function determineWinner(){
    const board = [[boxes[0].textContent, boxes[1].textContent, boxes[2].textContent], [boxes[3].textContent, boxes[4].textContent, boxes[5].textContent] , [boxes[6].textContent, boxes[7].textContent, boxes[8].textContent]]
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
          return board[i][0];
        }
      }
    
      // Check columns
      for (let j = 0; j < 3; j++) {
        if (board[0][j] === board[1][j] && board[1][j] === board[2][j]) {
          return board[0][j];
        }
      }
    
      // Check diagonals
      if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return board[0][0];
      }
      if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return board[0][2];
      }
    
      return null;
}

function playGame(){
    boxes.forEach(element => {
        element.addEventListener('click', () => {
            if (element.value !== 'X' || element.value !== player2){
                determineTurn(element);
            }
        });
    });
}
playGame()