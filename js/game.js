const grid = document.querySelector('.grid');
const playerSpan = document.querySelector('.player');
const timer = document.querySelector('.timer');

const createElement = (tag, classNome) => {
  const element = document.createElement(tag);
  element.className = classNome;
  return element; 
}

const characters = [

  'beth',
  'jerry',
  'jessica',
  'morty',
  'pessoa-passaro',
  'pickle-rick',
  'rick',
  'summer',
  'meeseeks',
  'scroopy',

];

let firstCard = ''
let secondCard = ''

const checkEndGame = () => {
  const disabledCards = document.querySelectorAll('.disabled-card');

  if(disabledCards.length == 20) {
    clearInterval(this.loop);
    alert(`Parabéns, ${playerSpan.innerHTML} seu tempo foi: ${timer.innerHTML} segundos.`);
    
    
  }
}

const checkCards = () => {
  const firstCharacter = firstCard.getAttribute('data-character');
  const secondCharacter = secondCard.getAttribute('data-character');

  if(firstCharacter == secondCharacter){

    firstCard.firstChild.classList.add('disabled-card');
    secondCard.firstChild.classList.add('disabled-card');

    firstCard = '';
    secondCard = '';

    checkEndGame()

  } else {
    setTimeout(() => {
      firstCard.classList.remove('reveal-card');
      secondCard.classList.remove('reveal-card');

      firstCard = '';
      secondCard = '';

    }, 700);
    
    
  }
}

const revealCard = ({ target }) => {
  if(target.parentNode.className.includes('reveal-card')) {
    return;
  }

  if (firstCard == '') {
    target.parentNode.classList.add('reveal-card');
    firstCard = target.parentNode;
  
  } else if (secondCard == ''){
    target.parentNode.classList.add('reveal-card');
    secondCard = target.parentNode;

    checkCards()

  }
  
  target.parentNode.classList.add('reveal-card');
}

const createCard = (character) => { // cria as cartas
  
  const card = createElement('div', 'card'); // cria uma div nova com a carta
  const front = createElement('div', 'face front'); // cria uma div nova com a frente da carta
  const back = createElement('div', 'face back'); // cria uma div nova com a verso da carta

  front.style.backgroundImage = `url('../images/${character}.png')`;

  card.appendChild(front); // ligando a frente da carta a div de carta
  card.appendChild(back);  // ligando o verso da carta a div de card

  card.addEventListener('click', revealCard)
  card.setAttribute('data-character',character);



  return card;
}

const loadGame = () => {

  const duplicateCharacters = [ ...characters, ...characters ];

  shufledArray = duplicateCharacters.sort( () => Math.random() - 0.5 ); // embaralha as cartas
  
  shufledArray.forEach((character) => {
    const carta = createCard(character);
    grid.appendChild(carta);
  })
}

const startTimer = () => {
  this.loop = setInterval(() => {
    let currentTime = Number(timer.innerHTML); // convertendo pra numero com +, parseInt ou Number()
    timer.innerHTML = currentTime + 1

  },1000)
}

window.onload = () => {
  const playerName = localStorage.getItem('player');
  playerSpan.innerHTML =  playerName;
  startTimer();
  loadGame();
}






// jeito feio mas funciona

// const createCard = () => { // cria as cartas
  
//   const card = document.createElement('div'); // cria uma div nova com a carta
//   const front = document.createElement('div'); // cria uma div nova com a frente da carta
//   const back = document.createElement('div'); // cria uma div nova com a verso da carta

//   card.className = 'card'; // atribuindo a classe desejada a carta
//   front.className = 'face front';
//   back.className = 'face back';

//   card.appendChild(front); // ligando a frente da carta a div de carta
//   card.appendChild(back);  // ligando o verso da carta a div de card

//   grid.appendChild(card); // ligando a div card ao grid
// }
