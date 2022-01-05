//Wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName('button');

    for(let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === "submit"){
                alert("You click a button!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`you clicked ${gameType}`);
            }
        })
    }
})

function runGame(){
    //creates tw random number between number 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer(){
    
}

function calculateCorrectAnswer(){
    
}

function incrementScore(){
    
}

function displayAdditionQuestion(){
    
}

function displaySubtractionQuestion(){
    
}

function displayMultiplyQuestion(){
    
}

function displayDivideQuestion(){
    
}