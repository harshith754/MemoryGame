document.body.style.zoom="90%"
let cardArray = [];
const cardArrayeasy = [
  {
    name: 'fries',
    img: 'images/fries.png  '
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'fries',
    img: 'images/fries.png  '
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  }

]
const cardArrayhard = [
  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'fries',
    img: 'images/fries.png  '
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'curry',
    img: 'images/Curry.png'
  },
  {
    name: 'ramen',
    img: 'images/Ramen.png'
  },
  {
    name: 'samosa',
    img: 'images/Samosa.png'
  },
  {
    name: 'donut',
    img: 'images/Donut.png'
  },

  {
    name: 'milkshake',
    img: 'images/milkshake.png'
  },
  {
    name: 'fries',
    img: 'images/fries.png  '
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png'
  },
  {
    name: 'pizza',
    img: 'images/pizza.png'
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png'
  },
  {
    name: 'curry',
    img: 'images/Curry.png'
  },
  {
    name: 'ramen',
    img: 'images/Ramen.png'
  },
  {
    name: 'samosa',
    img: 'images/Samosa.png'
  },
  {
    name: 'donut',
    img: 'images/Donut.png'
  }
]

cardArrayeasy.sort(() => 0.5 - Math.random());
cardArrayhard.sort(() => 0.5 - Math.random());

let cardChosen = []
let cardChosenId = []
let cardsWon = []
const gridDisplay = document.querySelector('#grid')
let resultDisplay = document.querySelector('#result')
let chances = document.querySelector('#chance')
let messageDisplay = document.querySelector('#message')
let chanceDisplay = document.querySelector('.chance-display')
let scoreDisplay = document.querySelector('.score-display')
let message = document.querySelector('.message-display');
let hardButton = document.querySelector('#hard');
let easyButton = document.querySelector('#easy');
let maincontainer = document.querySelector('#maincontainer')
let nameDisplay = document.querySelector('#name-display');
let insDisplay = document.querySelector('#instruction-display');
// let easyimg = document.querySelector('.easy-image-div');
// let hardimg = document.querySelector('.hard-image-div');
let typedisplay = document.querySelector('.type-display-grid');
let nameinsdisplay = document.querySelector('#name-display-main');
let instructiondisplay = document.querySelector('#instruction-display-main');






chanceDisplay.classList.add("hide");
scoreDisplay.classList.add("hide");
message.classList.add("hide");
document.body.classList.add("first");

const startButton = document.querySelector('#start-button')
startButton.classList.add("hide");
resultDisplay.textContent = 0;
chances.textContent = 0;
let a = 0;

easyButton.addEventListener('click', () => {
  cardArray = cardArrayeasy;
  maincontainer.classList.add("maineasy");
  createBoard();

})
hardButton.addEventListener('click', () => {
  cardArray = cardArrayhard;
  maincontainer.classList.add("mainhard");
  createBoard();

})
function restart() {


  const imgs = document.querySelectorAll("img");
  for (let img of imgs) {
    img.remove();
  }

  startButton.removeEventListener('click', restart);
  resultDisplay.textContent = 0;
  chances.textContent = 0;
  a = 0;

  cardsWon = [];
  cardChosen = [];
  cardChosenId = [];
  cardArray.sort(() => 0.5 - Math.random());
  messageDisplay.textContent = "Game Restarted";
  createBoard();
}

const gamemusic = new Audio('audio/gamemusic.mp3');
gamemusic.volume = 0.8;
function createBoard() {

  gamemusic.play();
  document.body.classList.remove("first");
  startButton.classList.remove("hide");
  startButton.innerText = "Restart";
  startButton.style.fontSize = "18px"
  startButton.style.width = "200px"
  startButton.style.padding = "8px"


  // startButton.removeEventListener('click', createBoard)
  startButton.addEventListener('click', restart);

  startButton.style.top = "96%";
  // hardButton.classList.add("hide");
  // easyButton.classList.add("hide");
  nameDisplay.classList.add("hide");
  insDisplay.classList.add("hide");
  // easyimg.classList.add("hide");
  // hardimg.classList.add("hide");
  typedisplay.classList.add("hide");
  nameinsdisplay.classList.add("hide");
  instructiondisplay.classList.add("hide");

  chanceDisplay.classList.remove("hide");
  scoreDisplay.classList.remove("hide");
  message.classList.remove("hide");

  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('card-id', i)
    card.addEventListener('click', flipCard)

    gridDisplay.appendChild(card);

  }

  if (cardArray.length === 20) {
    const imgs = document.querySelectorAll("img");
    for (let img of imgs) {
      img.style.width = "83px";
      img.style.height = "97px"
    }

  }
}


function checkMatch() {

  const cards = document.querySelectorAll('#grid img')

  const optionOneId = cardChosenId[0]
  const optionTwoId = cardChosenId[1]

  console.log("check for match!!")
  if (cardArray[optionOneId].name === cardArray[optionTwoId].name) {
    messageDisplay.textContent = "     Good JOB!!"

    var audio = new Audio('audio/success.mp3');
    audio.play();
    cards[optionOneId].setAttribute('src', 'images/white.png')
    cards[optionTwoId].setAttribute('src', 'images/white.png')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardChosenId)
  }
  else {
    messageDisplay.textContent = "  Wrong choices!!"
    audio = new Audio('audio/wrong-choice2.mp3');
    audio.play();
    console.log("wait")

    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')

  }
  resultDisplay.textContent = cardsWon.length
  cardChosen.pop()
  cardChosen.pop()
  cardChosenId.pop();
  cardChosenId.pop();

  if (cardsWon.length == cardArray.length / 2) {
    messageDisplay.style.margin = "1px";
    messageDisplay.textContent = `Congratulations you found them all in  \t ${a} attempts!!`;
    messageDisplay.setAttribute('width', '700px');


    cardsWon = [];
    gamemusic.pause();
    var audio1 = new Audio('audio/rickroll.mp3');
    audio1.play();
    var audio2 = new Audio('audio/clapping.mp3');
    audio2.play();

  }
}

function flipCard() {
  var audio = new Audio('audio/flip1.mp3');
  let cardId = this.getAttribute('card-id')
  if (cardId === cardChosenId[0]) {
    return;
  }
  audio.play();
  cardName = cardArray[cardId].name
  cardChosen.push(cardArray[cardId].name)
  cardChosenId.push(cardId)

  this.classList.toggle("flipCard");
  this.setAttribute('src', cardArray[cardId].img)

  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 500)
    a++;
    chances.textContent = a;
  }
}
