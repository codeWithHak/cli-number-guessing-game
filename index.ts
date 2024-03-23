#! /usr/bin/env node

import inquirer from "inquirer"

// 1) Computer will geerate a random number

// 2) user's input/guess

// 3) compare both numbers


const randomNumber = (Math.floor(Math.random() * 6 + 1))


const answers = await inquirer.prompt([{
    name:"userGuess",
    type:"number",
    message:"Please guess a number between 1 to 6: "
}])



if (answers.userGuess === randomNumber) {
    console.log("Congratulations! you guessed the right number");
}

else if (answers.userGuess +1 === randomNumber){
    console.log("You are just one digit behind");
    
}

else if (answers.userGuess +2 === randomNumber){
    console.log("You are two digits behind");
    
}

else if (answers.userGuess +3 === randomNumber){
    console.log("You are three digits behind");
    
}

else if (answers.userGuess + 4 === randomNumber){
    console.log("You are four digits behind");
    
}

else if (answers.userGuess +5 === randomNumber){
    console.log("You are five digits behind");
    
}

else if (answers.userGuess -1 === randomNumber){
    console.log("You are just 1 digit ahead");
    
}

else if (answers.userGuess -2 === randomNumber){
    console.log("You are two digits ahead");
    
}

else if (answers.userGuess -3 === randomNumber){
    console.log("You are three digits ahead");
    
}

else if (answers.userGuess -4 === randomNumber){
    console.log("You are four digit ahead");
    
}

else if (answers.userGuess -5 === randomNumber){
    console.log("You are five digits ahead");
    
}

console.log(`Number was: ${randomNumber} and you guesseed: ${answers.userGuess}`);



