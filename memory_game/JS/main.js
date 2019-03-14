var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
if(cardsInPlay.length === 2) {
	console.log("two cards selected");
if (cardOne === cardTwo) {
		alert("You found a match!")
}else if (cardOne !== cardTwo) {
	alert("Sorry try again.")
}
}

