const btn = document.querySelector('.reset');
btn.style.display = 'none';
const boxes = document.querySelectorAll('.box');
const player1 = 'X';
const player2= 'O';
let counter = 0;
const winner = document.createElement('h1')

function reset(){
    counter = 0;
    boxes.forEach(element => {
        element.classList.remove('clicked');
        element.textContent = '';
        winner.style.display = 'none'
    })
    btn.style.display ='none'
}

function gameOver(){
    boxes.forEach(element => {
        if (element.className !== 'clciked') {
            element.classList.add('clicked');
        }
    })

}


function determineTurn(element){
    const div = document.querySelector('.winner')
    if (!element.classList.contains('clicked')) {
        if (counter % 2 == 0){
            element.innerText = player1;
        }
        else{
            element.innerText = player2;
        }
        counter++;
        element.classList.add('clicked');
    }
    if (counter > 4){
        if (determineWinner() === player1) {
            winner.style.display = 'block';
            winner.textContent = `The winner is Player 1`;
            div.appendChild(winner)
            btn.style.display = 'block';
            gameOver()


        } else if (determineWinner() === player2){
            winner.style.display = 'block';
            winner.textContent = `The winner is Player 2`;
            div.appendChild(winner)
            btn.style.display = 'block';
            gameOver()

        }
        
    }
    if (counter === 9 && determineWinner() == 'no winner'){
        winner.style.display = 'block';
        winner.textContent = 'Draw'
        div.appendChild(winner)
        btn.style.display = 'block';
        gameOver()


    }
}

btn.addEventListener('click' , () => {
    reset();
});


function determineWinner(){

    // board ["X" "O" "X"]
    //       ["X" "O" "X"]
    //       ["X" "O" "X"]


    const board = [[boxes[0].textContent, boxes[1].textContent, boxes[2].textContent], [boxes[3].textContent, boxes[4].textContent, boxes[5].textContent] , [boxes[6].textContent, boxes[7].textContent, boxes[8].textContent]]
    // Check rows
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
    
      return 'no winner';
}



function playGame(){
    boxes.forEach(element => {
        element.addEventListener('click', () => {
            determineTurn(element);
        });
        element.removeEventListener('click', determineTurn)
    });
}
playGame()