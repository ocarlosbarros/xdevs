const cards = document.querySelectorAll('.card');

const INITIAL_POSITION = 0;
const LAST_POSITION = cards.length - 1;

const btnForward = document.getElementById('btn-forward');
const btnBack = document.getElementById('btn-back');

let currentCard = INITIAL_POSITION;

btnForward.addEventListener('click', () => {
    
    if (currentCard === LAST_POSITION) return;
    
    const selectedCard = document.querySelector('.selected');
    selectedCard.classList.remove('selected');
    
    currentCard += 1; 
    cards[currentCard].classList.add('selected');
    
});
