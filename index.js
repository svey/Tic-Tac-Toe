var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var prompt = require('prompt');
var git = require('simple-git')();
var fs = require('fs');
var Table = require('cli-table');

clear();
console.log(
  chalk.yellow(
    figlet.textSync('Tic Tac Toe', { horizontalLayout: 'full' })
  )
);

console.log('SQUARES ARE REFRENCED BY ROW AND SPACE HORIZONTALLY: \n ROW 0: [0][1][2] \n ROW 1: [0][1][2] \n ROW 2: [0][1][2]');

var table = new Table({
  chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
         , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
         , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
         , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
});

table.push(
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
)
 
console.log(table.toString());

var player = 'X'

function togglePlayer() {
  if(player === 'X') {
    return player = 'O';
  }

  if(player === 'O') {
    return player = 'X';
  }
}

//WINNER CHECK
function checkWinner() {
  if (table[0][0] === 'X' && table[0][1] === 'X' && table[0][2] === 'X' ) {
    return console.log('X wins!')
  }
  if (table[0][0] === 'O' && table[0][1] === 'O' && table[0][2] === 'O' ) {
    return console.log('O wins!')
  }
  if (table[1][0] === 'X' && table[1][1] === 'X' && table[1][2] === 'X' ) {
    return console.log('X wins!')
  }
  if (table[1][0] === 'O' && table[1][1] === 'O' && table[1][2] === 'O' ) {
    return console.log('O wins!')
  }
  if (table[2][0] === 'X' && table[2][1] === 'X' && table[2][2] === 'X' ) {
    return console.log('X wins!')
  }
  if (table[2][0] === 'O' && table[2][1] === 'O' && table[2][2] === 'O' ) {
    return console.log('O wins!')
  }
  if (table[0][0] === 'X' && table[1][0] === 'X' && table[2][0] === 'X' ) {
    return console.log('X wins!')
  }
  if (table[0][0] === 'O' && table[1][0] === 'O' && table[2][0] === 'O' ) {
    return console.log('O wins!')
  }
  if (table[0][1] === 'X' && table[1][1] === 'X' && table[2][1] === 'X' ) {
    return console.log('X wins!')
  }
  if (table[0][1] === 'O' && table[1][1] === 'O' && table[2][1] === 'O' ) {
    return console.log('O wins!')
  }
  if (table[0][2] === 'X' && table[1][2] === 'X' && table[2][2] === 'X' ) {
    return console.log('X wins!')
  }
  if (table[0][2] === 'O' && table[1][2] === 'O' && table[2][2] === 'O' ) {
    return console.log('O wins!')
  }
  if (table[0][0] === 'X' && table[1][1] === 'X' && table[2][2] === 'X' ) {
    return console.log('X wins!')
  }
  if (table[0][0] === 'O' && table[1][1] === 'O' && table[2][2] === 'O' ) {
    return console.log('O wins!')
  }
  if (table[0][2] === 'X' && table[1][1] === 'X' && table[2][0] === 'X' ) {
    return console.log('X wins!')
  }
  if (table[0][2] === 'O' && table[1][1] === 'O' && table[2][0] === 'O' ) {
    return console.log('O wins!')
  }
  prompt.get(['row', 'space'], function (err, result) {
    if (err) { return onErr(err); }
    if(result) { return onResult(result); }
  });
}

prompt.start();


prompt.get(['row', 'space'], function (err, result) {
  if (err) { return onErr(err); }
  if(result) { return onResult(result); }
});

function onErr(err) {
  console.log(err);
  return 1;
}

function onResult(result) {
  clear();
  
  console.log(
    chalk.yellow(
      figlet.textSync('Tic Tac Toe', { horizontalLayout: 'full' })
    )
  );

  console.log('SQUARES ARE REFRENCED BY ROW AND SPACE HORIZONTALLY: \n ROW 0: [0][1][2] \n ROW 1: [0][1][2] \n ROW 2: [0][1][2]');
  table[result.row][result.space] = player;

  togglePlayer();
  
  console.log(table.toString());
  
  checkWinner();
  
};


