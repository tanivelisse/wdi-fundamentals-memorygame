var cards = [
{
	rank : 'queen',
	suit : 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank : 'king',
	suit : 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
},
{
	rank : 'king',
	suit : 'hearts',
	cardImage: 'images/king-of-hearts.png'
},{
	rank : 'queen',
	suit : 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
];

var cardsInPlay = [];

//created game logic functions

var checkForMatch = function()	{
if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
};
}

var flipcard = function () {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].suit);
	console.log("User flipped " + cards[cardId].cardImage);
	this.setAttribute('src', cards[cardId].cardImage);
 	if (cardsInPlay.length === 2) {
	checkForMatch();
};
}
// create Card Board funtion 
var createBoard = function(){
	for (var i = 0; i < cards.length; i++){
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', "images/back.png");
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipcard);
	document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();



