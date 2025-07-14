// What I’ve found in 2 decades of programming games and gameplay systems can be summarized with the following 3 rules when writing any game system:

// 1. Code should say what it does

// The function/variable/system should concisely and accurately state it’s function

// 2. Code should do what it says

// ‘void FireWeapon()’ had better fire the weapon. If it handles the weapon not being equipped, 
// out of ammo, or otherwise may in fact NOT fire the weapon it violates this rule. 
// If it may not fire the weapon it MUST return a result to satisfy this rule.

// 3. Every system that is weakly or strongly coupled to another should always satisfy “does it logically make sense for X to ‘know’ about Y

// Should an Actor know about its CharacterController? Sure, that makes logical sense. 
// Should a CharacterController know about it’s Actor? Probably not, but not necessarily a deal breaker 
// as the two are sort of coupled by definition. Should a rigid body know about Vehicles and their 
// chassis/wheels? Absolutely not. Should an Actor know about weapons? Maybe, if that’s the only thing 
// ever equipped, otherwise some abstraction to manage generic held items is preferable than an Actor knowing 
// about all of them and their properties.

// Before you include/import anything ask yourself “should this system know about that system?” 
// and be real with yourself if the answer is “not really”. Rules are intended to be broken sometimes, 
// but once you make a direct dependency between two systems the link will only grow and never shrink.



//GameBoard Object
// function Gameboard() {
//   const board = [];
//   const rows = 3;
//   const columns = 3;

//   for(let i=0; i< rows; i++){
//     board[i] = []; // Or maybe we could do null here
//     for (let j = 0; j < columns; j++){
//       board[i][j] = [];
//     }
//   }


//   // const cells = Cell();
//   console.log("Gameboard is created");
// };


// function Cell(){
//   console.log("Cells are created");
// }

// function GameController(){
//   const playerOne = "Player One";
//   const playerTwo = "Player Two";
//   // console.log(playerTwo);
//   const board = Gameboard();

//   const players = [
//     {
//       name: "X",
//       score: 0
//     },
//     {
//       name: "Y",
//       score: 0
//     }

//   ]
// }

// const game = GameController();


// You’re going to store the gameboard as an array inside of a Gameboard object,  DONE
// so start there! Your players are also going to be stored in objects, DONE
// and you’re probably going to want an object to control the flow of the game itself. ON ITS WAY


//As little global code as possible; GOT IT
 
//Factories GOT IT

//If you only need an instance of something (e.g. the gameboard, the displayController etc)
//then wrap the factory inside an IIFE GOT IT

//Think about where each bit of logic should reside. Brainstorming GOT IT

//Make the game work in console first. GOT IT

//Check for when the game is over GOT IT

//ONCE the game works in the console create an object that'll handle the display/DOM logic
//Write a function that'll render the contents of the gameboard array to the page
//Function that allows players to add marks to a specific spot on the board by clicking on it once


//In the end allow players to put in their names, include button to start/restart game
//Add display element that shows the reslt upon the game end

//Factory example:
// function createUser (name) {
//   const discordName = "@" + name;
//   return { name, discordName };
// }



(function (){
    const Gameboard = {
    //  playerX : {
    //     sign: "X",
    //     score: 0
    // },

    // playerCircle : {
    //     sign: "◯",
    //     score: 0
    // },

    playerFactory(sign){
        return {
            sign: sign,
            score: 0
        }
    },

    boardgame: [],
    createCell(){
        for(let i = 0; i<3;i++){
            boardgame[i] = [];
            for(let j = 0;j<3;j++){
                boardgame[i][j] = null;
            }
        }
    },

    detectInput(){
        
    },

    cellBeenUsed(){

    },

    isThereWinner(){

    },


    // go : createCell(),
    
    
    gameFlow : {
        //Create board
        //Create cells
        //Create the players
        //Detect player input
        //Check if that field has already been used before
        //Check if there is a winner or tie
        //Restart the game
    }

    };




})();



const boardgame = [];
function createCell(){
    for(let i = 0; i<3;i++){
        boardgame[i] = [];
        for(let j = 0;j<3;j++){
            boardgame[i][j] = null;
        }
    }
};
console.log(boardgame);


const go = createCell();

function createPlayer(sign){
    return {
        sign: sign,
        score :0
    }
}

const playerOne = createPlayer("X");
const playerTwo = createPlayer("◯");

let turn = playerOne;

function placeSign(i, j) {
    if(i > 2 || j > 2) {
        console.error("You can't go out of the boardgame you dumb fuck");
        return 0;
    }
    if(boardgame[i][j] !== null) {
        console.error("That has been used you shit brain");
        return 0;
    }
    boardgame[i][j] = turn.sign;
    switchTurns();
}

function switchTurns(){
    if (turn == playerOne){
        turn = playerTwo;
    } else {
        turn = playerOne;
    }
}

function detectGameOver(){

}

//[X, X, X]
//[N, N, N]
//[N, N, N]

// [1][1] + [1][2] + [1][3]
// [2][1] + [2][2] + [2][2]
// [3][1] + [3][2] + [3][3]

//[i][1-3]
//[1][1] + [2][1] + [3][1] => [i][1]
//[1][1] + [2][2] + [3][3] => j = i on all of them


//Modular patterns: creating the board, creating the cell, players sign+score, checks if there is a winner or tie based on board content, 
// maybe a module that restarts the game, module that places sign on the board 
// switch turns

