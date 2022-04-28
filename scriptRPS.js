// For this project you will make a Rock, Paper, and Scissors game.

// The design of your webpage is completely up to you. The only requirements are as follows:
// - A user is able to choose between three options, Rock, Paper, and Scissors.
// - When an option is chosen, it must be obvious to the use which option has been chosen.
// - When clicking a 'submit' button, the user's choice will be submitted and it will be compared against a randomly generated computer choice.
// - The user is then presented with an alert that tells them if they won, tied, or lost, and includes the user's input as well as the computer's input.
// alert("Hello Player1!")

function submitOption(userSelection) {
//can you put a function on a radio button?
//const computersAnswer = Math.floor(Math.random() * 3)

/* what are all the options?
what beats each?
Rock crushes scissors, scissors cut paper, and paper covers rock

pass in selection
let rock = 0;
let paper = 1;
let scissors = 2; */

const computersAnswer = Math.floor(Math.random() * 3)

//for rock

    if (userSelection === 0 && computersAnswer === 0) {
       
        alert("Tie! try again")
        } 
        else if (userSelection === 0 && computersAnswer === 1) {
        
        alert("Paper Covers Rock! Computer Wins!")
        }
        else if (userSelection === 0 && computersAnswer === 2) {
       
        alert("Rock Crushes Scissors! Player Wins!")
        }
    

//for paper 
    if (userSelection === 1 && computersAnswer === 0) {
    
     alert("Paper Covers Rock! Player Wins!")
        } 
        else if (userSelection === 1 && computersAnswer === 1) {
        
            alert("Tie! try again")
        }
        else if (userSelection === 1 && computersAnswer === 2) {
            
            alert("Scissors cut Paper! Computer Wins!")
        }
    
    

//for scissors 

    if (userSelection === 2 && computersAnswer === 0) {
   
    alert("Rock crushes Scissors! Computer Wins!")
    return
    } 
    else if (userSelection === 2 && computersAnswer === 1) {
       
        alert("Scissors cut Paper! Player Wins!")
    }
    else if (userSelection === 2 && computersAnswer === 2) {
      
        alert("Tie! try again")
    }


}