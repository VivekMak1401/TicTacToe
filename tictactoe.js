const cells = document.querySelectorAll(".cell");
// console.log(cells);

const winnerText = document.getElementById("winner-text");
const restart = document.getElementById("restart");
// const exit = document.getElementById("exit");

let currentPlayer = "X";
let container = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;


const winner = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

cells.forEach((cell, index) => {
    cell.addEventListener("click", 
    () => {
        if (gameActive && cell.textContent === "")
        {
            cell.textContent = currentPlayer;
            container[index]= currentPlayer;

                if(checkWinner(currentPlayer))
                {
                    gameActive = false;
                    winnerText.textContent = `${currentPlayer} Wins!`;

                    restart.style.display = "inline";
                    return;
                }

                if(container.every(cell => cell !== "")){
                    gameActive = false;
                    winnerText.textContent = "Game Over! It's Draw";

                    restart.style.display = "inline";
                    return;
                }

                currentPlayer = currentPlayer === "X" ? "O" : "X";
                console.log("Next Player: " + currentPlayer);
        }
    });
});

function checkWinner(player){
    return winner.some(combination=>combination.every(index=>container[index] === player));
}

restart.addEventListener("click", ()=>
{
    container.fill("");
    cells.forEach(cell=>cell.textContent = "");
    gameActive = true;
    winnerText.textContent = "";
    restart.style.display = "none";
    currentPlayer = "X";
});

// exit.addEventListener("click", ()=>{
//     winnerText.textContent = "Game Over!";
// });
