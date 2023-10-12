let resetBtn = document.getElementById('resetBtn');

class StartGame {
    constructor() {
        this.playerXTurn();

    }

    playerXTurn() {
        let xButton = document.getElementById('1');
        xButton.addEventListener('click', () => {
            document.getElementById('1').innerHTML = 'X'
        })       
    }

    resetGame() {
        return this.function1();
    }

}



class ResetGame {
    constructor() { }

    get restartGame() {
        return this.function1();
    }

    function1() {
        document.getElementById('resetBtn').addEventListener('click', () => {
           location.reload();           
        })
    }
}



// const playerX = new PlayerX();
// const playerY = new PlayerY();
const resetGame = new ResetGame();
resetGame.restartGame;
new StartGame;



// function myFunction1() {
//     document.getElementById('1').innerHTML = 'X';
// }

// function myFunction2() {
//     document.getElementById('2').innerHTML = 'X';
// }

// function myFunction3() {
//     document.getElementById('3').innerHTML = 'X';
// }

// function myFunction4() {
//     document.getElementById('4').innerHTML = 'X';
// }

// function myFunction5() {
//     document.getElementById('5').innerHTML = 'X';
// }

// function myFunction6() {
//     document.getElementById('6').innerHTML = 'X';
// }

// function myFunction7() {
//     document.getElementById('7').innerHTML = 'X';
// }

// function myFunction8() {
//     document.getElementById('8').innerHTML = 'X';
// }

// function myFunction9() {
//     document.getElementById('9').innerHTML = 'X';
// }


