const computerMove = document.getElementById("computer-move");
const yourMove = document.getElementById("your-move");
const resultDisplay = document.getElementById("result");
const gamePoints = document.getElementById("Point")
const choice = ["Rock", "Paper", "Scissors"];
let pointIncrement = 0;





function addEvent(yourChoices){
    
    yourMove.textContent = yourChoices;

    let computerChoice = choice[Math.floor(Math.random() * 3)]
    computerMove.textContent = computerChoice;
    console.log(computerChoice)

    if (yourChoices === computerChoice){
        resultDisplay.textContent = "It's a Draw";

    }else if (yourChoices === "Rock" && computerChoice === "Paper"){
        resultDisplay.textContent = "You lose!";

    }else if (yourChoices === "Rock" && computerChoice === "Scissors"){
        resultDisplay.innerText = "You win!";
        pointIncrement += 1;
        gamePoints.textContent = pointIncrement
       
        
       
        
        
    }else if (yourChoices === "Paper" && computerChoice === "Rock"){
        resultDisplay.textContent = "You win!";
        pointIncrement += 1;
        gamePoints.textContent = pointIncrement
       
      
         
       
        
    }else if (yourChoices === "Paper" && computerChoice === "Scissors"){
        resultDisplay.textContent = "You lose";

    }else if (yourChoices === "Scissors" && computerChoice === "Rock"){
        resultDisplay.textContent = "You lose";

    }else if (yourChoices === "Scissors" && computerChoice === "Paper"){
        resultDisplay.textContent = "You win!";
        pointIncrement += 1;
        gamePoints.textContent = pointIncrement
        
        
       
        
    }
}
    

    