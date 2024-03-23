#! usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will geerate a random number
// 2) user's input/guess
// 3) compare both numbers
const randomNumber = (Math.floor(Math.random() * 6 + 1));
const answers = await inquirer.prompt([{
        name: "userGuess",
        type: "number",
        message: "Please guess a number between 1 to 6: "
    }]);
// if (answers.userGuess > 6) {
//     console.log("You selected a number above 6");
// }
// else if (answers.userGuess < 1) {
//     console.log("You selected a very low number");
// }
if (answers.userGuess === randomNumber) {
    console.log("Congratulations! you guessed the right number");
}
else {
    console.log("Your guess is not correct! try again ");
}
