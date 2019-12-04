var cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];

var cardsInPlay = [];

var flipCard = function() {
  var cardId = this.getAttribute('data-id');
  var currentCard = cards[cardId];
  this.setAttribute('src', currentCard.cardImage);
  console.log('User flipped ' + currentCard.rank + ' of ' + currentCard.suit);
  console.log('User flipped ' + currentCard.cardImage);
  cardsInPlay.push(currentCard.rank);
  checkForMatch();
};

var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
    var newCard = document.createElement('img');
    newCard.setAttribute('src', 'images/back.png');
    newCard.setAttribute('data-id', i);
    newCard.addEventListener('click', flipCard);
    document.body.appendChild(newCard);
  }
};


var checkForMatch = function() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log('You found a match!');
      alert('You found a match!');
    } else {
      console.log('Sorry, try again.');
      alert('Sorry, try again.');
    }
  }
};

createBoard();