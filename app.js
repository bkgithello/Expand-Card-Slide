let cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click',()=>{
        unselect();
        card.classList.add('active')
    })
});
function unselect (){
    cards.forEach(card => {
        card.classList.remove('active')
    })
}