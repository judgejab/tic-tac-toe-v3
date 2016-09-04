// PROJECT: Create Tic-Tac-Toe game


//Use the module pattern to wrap all of your JavaScript code into a single global variable or an immediately invoked function.
(function () {

'use strict';

var currentPlayer;
var player1;
var player2;
var moveCounter;

// Grab original HTML and hold it as a variable
var boardHTML = '<div class="board" id="board"><header><h1>Tic Tac Toe</h1><ul><li class="players player1" id="player1"><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-200.000000, -60.000000)" fill="#000000"><g transform="translate(200.000000, 60.000000)"><path d="M21 36.6L21 36.6C29.6 36.6 36.6 29.6 36.6 21 36.6 12.4 29.6 5.4 21 5.4 12.4 5.4 5.4 12.4 5.4 21 5.4 29.6 12.4 36.6 21 36.6L21 36.6ZM21 42L21 42C9.4 42 0 32.6 0 21 0 9.4 9.4 0 21 0 32.6 0 42 9.4 42 21 42 32.6 32.6 42 21 42L21 42Z"/></g></g></g></svg></li><li class="players player2" id="player2"><svg xmlns="http://www.w3.org/2000/svg" width="42" height="43" viewBox="0 0 42 43" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-718.000000, -60.000000)" fill="#000000"><g transform="translate(739.500000, 81.500000) rotate(-45.000000) translate(-739.500000, -81.500000) translate(712.000000, 54.000000)"><path d="M30 30.1L30 52.5C30 53.6 29.1 54.5 28 54.5L25.5 54.5C24.4 54.5 23.5 53.6 23.5 52.5L23.5 30.1 2 30.1C0.9 30.1 0 29.2 0 28.1L0 25.6C0 24.5 0.9 23.6 2 23.6L23.5 23.6 23.5 2.1C23.5 1 24.4 0.1 25.5 0.1L28 0.1C29.1 0.1 30 1 30 2.1L30 23.6 52.4 23.6C53.5 23.6 54.4 24.5 54.4 25.6L54.4 28.1C54.4 29.2 53.5 30.1 52.4 30.1L30 30.1Z"/></g></g></g></svg></li></ul></header><ul class="boxes"><li class="box" id="a1"></li><li class="box" id="a2"></li><li class="box" id="a3"></li><li class="box" id="b1"></li><li class="box" id="b2"></li><li class="box" id="b3"></li><li class="box" id="c1"></li><li class="box" id="c2"></li><li class="box" id="c3"></li></ul></div>';


// add event listener to 'start game' button
document.querySelector('a').addEventListener("click", loadBoard);


// playerObject
function Player(name) {
	this.name = name;
	this.currentPlayer = false;
};

	
// Add programming, so that when the player clicks the start button the start screen disappears, the board appears, and the game begins.
function loadBoard() {
	document.body.innerHTML = boardHTML;

	moveCounter = 0;

	player1 = new Player(player1);
	player2 = new Player(player2);

	var startingPlayerNum = Math.floor((Math.random() * 2) + 1);
	console.log(startingPlayerNum);

	if(startingPlayerNum === 1){
		player1.currentPlayer = true;
		currentPlayer = player1;
	} else {
		player2.currentPlayer === true;
		currentPlayer = player2
	}

	eventHandler();

	currentPlayerFlag()
};


// Let a player add their name before the game starts
	//Name appears while the game is playing


// The current player is indicated at the top of the page -- the box with the symbol O or X is highlighted for the current player. 
function currentPlayerFlag() {
	if(currentPlayer === player1){
		document.getElementById('player1').classList.add("active");
		document.getElementById('player2').className = "players";
	}
	if(currentPlayer === player2){
		document.getElementById('player2').classList.add("active");
		document.getElementById('player1').className = "players";
	}
};
		

// When the current player mouses over an empty square on the board, it's symbol the X or O should appear on the square.
function mouseOver() {
	
	if(!this.classList.contains("box-filled-1") && !this.classList.contains("box-filled-2")) {
		if(currentPlayer === player1){
			this.style.backgroundImage = "url(img/o.svg)";
		} else {
			this.style.backgroundImage = "url(img/x.svg)";
		}
	}
};


// When mouse is moved off of empty square, get rid of X or O
function mouseOut() {
	// Do this using the x.svg or o.svg graphics 
	if(!this.classList.contains("box-filled-1") || !this.classList.contains("box-filled-2")) {
		if(currentPlayer === player1){
			this.style.backgroundImage = "";
		} else {
			this.style.backgroundImage = "";
		}
	}
};


// Players can only click on empty squares. When the player clicks on an empty square, attach the class box-filled-1 (for O) or box-filled-2 (for X) to the square.	
function placePiece() {
	if(!this.classList.contains("box-filled-1") && !this.classList.contains("box-filled-2")) {
		if(currentPlayer === player1){
			this.classList.add("box-filled-1");

			player1.currentPlayer = false;
			player2.currentPlayer = true;
			currentPlayer = player2;

			currentPlayerFlag();
			moveCounter++;
			console.log(moveCounter);
			gameState();
			
		} else {
			this.classList.add("box-filled-2");

			player2.currentPlayer = false;
			player1.currentPlayer = true;
			currentPlayer = player1;

			currentPlayerFlag();
			moveCounter++;
			console.log(moveCounter);
			gameState();
			
		}
	}
};


// The game ends when one player has three of their symbols in a row either horizontally, vertically or diagonally.
function gameState() {

	var result;

	//boxes
	var a1 = document.getElementById('a1');
	var a2 = document.getElementById('a2');
	var a3 = document.getElementById('a3');
	var b1 = document.getElementById('b1');
	var b2 = document.getElementById('b2');
	var b3 = document.getElementById('b3');
	var c1 = document.getElementById('c1');
	var c2 = document.getElementById('c2');
	var c3 = document.getElementById('c3');

	//See if Player 1 has won
	if((a1.classList.contains("box-filled-1") && a2.classList.contains("box-filled-1") && a3.classList.contains("box-filled-1")) || (b1.classList.contains("box-filled-1") && b2.classList.contains("box-filled-1") && b3.classList.contains("box-filled-1")) || (b1.classList.contains("box-filled-1") && b2.classList.contains("box-filled-1") && b3.classList.contains("box-filled-1")) || (c1.classList.contains("box-filled-1") && c2.classList.contains("box-filled-1") && c3.classList.contains("box-filled-1")) || (a1.classList.contains("box-filled-1") && b1.classList.contains("box-filled-1") && c1.classList.contains("box-filled-1")) || (a2.classList.contains("box-filled-1") && b2.classList.contains("box-filled-1") && c2.classList.contains("box-filled-1")) || (a3.classList.contains("box-filled-1") && b3.classList.contains("box-filled-1") && c3.classList.contains("box-filled-1")) || (a1.classList.contains("box-filled-1") && b2.classList.contains("box-filled-1") && c3.classList.contains("box-filled-1")) || (a3.classList.contains("box-filled-1") && b2.classList.contains("box-filled-1") && c1.classList.contains("box-filled-1"))){
		result = "player1"
		return gameOver(result);
	}

	//See if Player 2 has won
	if((a1.classList.contains("box-filled-2") && a2.classList.contains("box-filled-2") && a3.classList.contains("box-filled-2")) || (b1.classList.contains("box-filled-2") && b2.classList.contains("box-filled-2") && b3.classList.contains("box-filled-2")) || (b1.classList.contains("box-filled-2") && b2.classList.contains("box-filled-2") && b3.classList.contains("box-filled-2")) || (c1.classList.contains("box-filled-2") && c2.classList.contains("box-filled-2") && c3.classList.contains("box-filled-2")) || (a1.classList.contains("box-filled-2") && b1.classList.contains("box-filled-2") && c1.classList.contains("box-filled-2")) || (a2.classList.contains("box-filled-2") && b2.classList.contains("box-filled-2") && c2.classList.contains("box-filled-2")) || (a3.classList.contains("box-filled-2") && b3.classList.contains("box-filled-2") && c3.classList.contains("box-filled-2")) || (a1.classList.contains("box-filled-2") && b2.classList.contains("box-filled-2") && c3.classList.contains("box-filled-2")) || (a3.classList.contains("box-filled-2") && b2.classList.contains("box-filled-2") && c1.classList.contains("box-filled-2"))){
		result = "player2"
		return gameOver(result);
	}

	//If all of the squares are filled and no players have three in a row the game is a tie.
	if(moveCounter === 9){
		result = "tie";
		console.log("tie");
		return gameOver(result);
	}
}; 


function gameOver(result) {
	// Add programming so that when the game ends, the board disappears and the game end screen appears. 
	if(result === "player1"){
		//Player 1 wins
		document.body.innerHTML = '<div class="screen screen-win screen-win-one" id="finish"><header><h1>Tic Tac Toe</h1><p class="message">Player 1 Wins!</p><a href="#" class="button">New game</a></header></div>';
		
		//New game
		document.querySelector('a').addEventListener("click", loadBoard);
	} else if(result === "player2"){
		//Player 2 wins
		document.body.innerHTML = '<div class="screen screen-win screen-win-two" id="finish"><header><h1>Tic Tac Toe</h1><p class="message">Player 2 Wins!</p><a href="#" class="button">New game</a></header></div>'; 
		
		//New game
		document.querySelector('a').addEventListener("click", loadBoard);
	} else{
		// It's a tie
		document.body.innerHTML = '<div class="screen screen-win screen-win-tie" id="screen-win"><header><h1>Tic Tac Toe</h1><p class="message">Tie!</p><a href="#" class="button">New game</a></header></div>';

		//New game
		document.querySelector('a').addEventListener("click", loadBoard);
	}
};
		

// Add programming to support playing against the computer. Only one player plays, the other is controlled by your programming.

// Event Handlers
function eventHandler() {

	//boxes
	var a1 = document.getElementById('a1');
	var a2 = document.getElementById('a2');
	var a3 = document.getElementById('a3');
	var b1 = document.getElementById('b1');
	var b2 = document.getElementById('b2');
	var b3 = document.getElementById('b3');
	var c1 = document.getElementById('c1');
	var c2 = document.getElementById('c2');
	var c3 = document.getElementById('c3');

	//Add eventhandler for boxes being clicked
	a1.addEventListener("click", placePiece);
	a2.addEventListener("click", placePiece);
	a3.addEventListener("click", placePiece);
	b1.addEventListener("click", placePiece);
	b2.addEventListener("click", placePiece);
	b3.addEventListener("click", placePiece);
	c1.addEventListener("click", placePiece);
	c2.addEventListener("click", placePiece);
	c3.addEventListener("click", placePiece);

	//Add eventhandler for boxes being mousedOver
	a1.addEventListener("mouseover", mouseOver);
	a2.addEventListener("mouseover", mouseOver);
	a3.addEventListener("mouseover", mouseOver);
	b1.addEventListener("mouseover", mouseOver);
	b2.addEventListener("mouseover", mouseOver);
	b3.addEventListener("mouseover", mouseOver);
	c1.addEventListener("mouseover", mouseOver);
	c2.addEventListener("mouseover", mouseOver);
	c3.addEventListener("mouseover", mouseOver);

	//Add event handler for boxes NOT being mouse over
	a1.addEventListener("mouseout", mouseOut);
	a2.addEventListener("mouseout", mouseOut);
	a3.addEventListener("mouseout", mouseOut);
	b1.addEventListener("mouseout", mouseOut);
	b2.addEventListener("mouseout", mouseOut);
	b3.addEventListener("mouseout", mouseOut);
	c1.addEventListener("mouseout", mouseOut);
	c2.addEventListener("mouseout", mouseOut);
	c3.addEventListener("mouseout", mouseOut);
}

})();

