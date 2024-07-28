function handleMouseEnter() {
    this.classList.add('card--hovered');
}

function handleMouseLeave() {
    this.classList.remove('card--hovered');
}


function addEventListenerToCards() {
    const cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {

        const card_atual = cards[i];
        card_atual.addEventListener('mouseenter', handleMouseEnter);
        card_atual.addEventListener('mouseleave', handleMouseLeave);
    
    }
}

document.addEventListener('DOMContentLoaded', addEventListenerToCards, false);

