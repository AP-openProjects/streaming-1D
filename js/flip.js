//Variables
const cards = document.querySelector('.cards');

//Event listeners
loadEventListeners()
function loadEventListeners() {
    cards.addEventListener('click', selectFrontCard);
    cards.addEventListener('click', selectBackCard);
}


//Functions

//FLip cards
function selectFrontCard(e) {
    if( e.target.classList.contains('card__front__btn-p')) {
        const selectedCard = e.target.parentElement.parentElement.parentElement
        flipCard(selectedCard);
    }        
}

function flipCard(card) {
    card.classList.add("flip")
}

//Back flip cards
function selectBackCard(e) {
    if( e.target.classList.contains('card__back__btn-p')) {
        const selectedCard = e.target.parentElement.parentElement.parentElement
        backFlipCard(selectedCard);
    }        
}

function backFlipCard(card) {
    card.classList.remove("flip")
}