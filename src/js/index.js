const cards = document.querySelectorAll('.card');

const btnForward = document.getElementById('btn-forward');
const btnBack = document.getElementById('btn-back');

let currentCard = 0;

btnForward.addEventListener('click', () => {
    const isLastCard = currentCard === cards.length - 1;
    
    if (isLastCard) return;
    
    toggleCard();
    
    currentCard += 1; 
    selectCard();
    
});

btnBack.addEventListener('click', () => {
    const isFirstCard = currentCard === 0;
    
    if (isFirstCard) return;

    toggleCard();

    currentCard -= 1; 
    selectCard();
    
});

function selectCard() {
    cards[currentCard].classList.add('selected');
}

function toggleCard() {
    const selectedCard = document.querySelector('.selected');
    selectedCard.classList.remove('selected');
}
