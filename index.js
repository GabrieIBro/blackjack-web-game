let cards = ["Cards/Clubs/2_of_clubs.png", "Cards/Clubs/3_of_clubs.png", "Cards/Clubs/4_of_clubs.png",
            "Cards/Clubs/5_of_clubs.png", "Cards/Clubs/6_of_clubs.png", "Cards/Clubs/7_of_clubs.png",
            "Cards/Clubs/8_of_clubs.png", "Cards/Clubs/9_of_clubs.png","Cards/Clubs/10_of_clubs.png",
            "Cards/Clubs/ace_of_clubs.png", "Cards/Clubs/jack_of_clubs.png", "Cards/Clubs/king_of_clubs.png",
            "Cards/Clubs/queen_of_clubs.png","Cards/Diamonds/2_of_diamonds.png", "Cards/Diamonds/3_of_diamonds.png",
            "Cards/Diamonds/4_of_diamonds.png", "Cards/Diamonds/5_of_diamonds.png", "Cards/Diamonds/6_of_diamonds.png",
            "Cards/Diamonds/7_of_diamonds.png", "Cards/Diamonds/8_of_diamonds.png", "Cards/Diamonds/9_of_diamonds.png",
            "Cards/Diamonds/10_of_diamonds.png", "Cards/Diamonds/ace_of_diamonds.png", "Cards/Diamonds/jack_of_diamonds.png",
            "Cards/Diamonds/king_of_diamonds.png", "Cards/Diamonds/queen_of_diamonds.png","Cards/Hearts/2_of_hearts.png",
            "Cards/Hearts/3_of_hearts.png", "Cards/Hearts/4_of_hearts.png", "Cards/Hearts/5_of_hearts.png",
            "Cards/Hearts/6_of_hearts.png", "Cards/Hearts/7_of_hearts.png", "Cards/Hearts/8_of_hearts.png",
            "Cards/Hearts/9_of_hearts.png", "Cards/Hearts/10_of_hearts.png", "Cards/Hearts/ace_of_hearts.png",
            "Cards/Hearts/jack_of_hearts.png", "Cards/Hearts/king_of_hearts.png", "Cards/Hearts/queen_of_hearts.png",
            "Cards/Spades/2_of_spades.png", "Cards/Spades/3_of_spades.png", "Cards/Spades/4_of_spades.png",
            "Cards/Spades/5_of_spades.png", "Cards/Spades/6_of_spades.png", "Cards/Spades/7_of_spades.png",
            "Cards/Spades/8_of_spades.png", "Cards/Spades/9_of_spades.png", "Cards/Spades/10_of_spades.png",
            "Cards/Spades/ace_of_spades.png", "Cards/Spades/jack_of_spades.png", "Cards/Spades/king_of_spades.png",
            "Cards/Spades/queen_of_spades.png"];

function closeModal() {
    document.querySelector(".greeting-modal-container").style.opacity="0"
    setInterval(function () {document.querySelector(".greeting-modal-container").style.display="none"}, 500); 
}

function pickCard() {
    let randomCard = Math.floor(Math.random()*cards.length);
    let cardValue = 0;
    
    document.querySelector("#card-1").src = cards[randomCard];
    
    for (let i = 2; i <= 10; ++i) {

        if (cards[randomCard].includes(String(i))) {
            cardValue =  i;
        } else if (cards[randomCard].includes("queen") || 
                   cards[randomCard].includes("king") || 
                   cards[randomCard].includes("jack")) {
              cardValue =  10;
        } else if (cards[randomCard].includes("ace")) {
              cardValue =  11;
        }
    }
}
