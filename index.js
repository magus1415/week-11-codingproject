var currentTurn = 'x';
// Displays current players turn
document.getElementById('lbl-currentTurn').innerHTML = currentTurn;
// EventListener on Reset button to refresh page, targets resetButton function
document.getElementById('resetBtn').addEventListener('click', resetButton);
// Loops through 9 clicks, targets handleUserClick function that will make sure a space wasn't already taken and if it hasn't runs the changeTurn function
let alertId = document.getElementById("alert-winner-id");
let alertTieId = document.getElementById("alert-tie-id");

for (let i = 1; i <= 9; i++) {
    document.getElementById(`btn-${i}`).addEventListener('click', handleUserClick);
}

// Grabbing button element and checking if it's '-', it is then allows the current turn to select that spot, otherwise alerts to choose another space
function handleUserClick(event) {
    let element = event.target;
    if (element.innerHTML == '-') {
        element.innerHTML = currentTurn;
        console.log(currentTurn);
        changeTurn();
    } else {
        alert('Choose another space');
    }
}

// Tells us which turn it's on and checks if there is a winner everytime the function is ran
function changeTurn() {
    if (currentTurn == 'x') {
        checkWinner();
        currentTurn = 'o';
    } else {
        checkWinner();
        currentTurn = 'x';
    }

    document.getElementById('lbl-currentTurn').innerHTML = currentTurn;
}

// Iterates 9 times and puts the selected click to an array
function checkWinner() {
    let btnValues = [];
    for (let i = 1; i <= 9; i++) {
        let btn = document.getElementById(`btn-${i}`).innerHTML;
        btnValues.push(btn);
    }

    const winningCombinations = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Diagonal top-left to bottom-right
        [2, 4, 6]  // Diagonal top-right to bottom-left
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (btnValues[a] === 'x' || btnValues[a] === 'o') {
            if (btnValues[a] === btnValues[b] && btnValues[b] === btnValues[c]) {
                announceWinner(alertId);
                return;
            }
        }
    }
    if (btnValues.every(value => value === 'x' || value === 'o')) {
        announceTie(alertId);
    }
}

function announceWinner(element) {
    element.classList.add("alert", "alert-primary");
    element.innerHTML = `${currentTurn} is the winner`
}

function announceTie(element) {
    element.classList.add("alert", "alert-primary");
    element.innerHTML = `It's a tie`;
}

// refreshes page
function resetButton() {
    location.reload();
}


