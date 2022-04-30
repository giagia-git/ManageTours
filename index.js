const buyBtns = document.querySelectorAll('.js-buy-tickets')
const modal = document.querySelector('.js-modal')
const modalContainet = document.querySelector('.js-modal-container')
const modalClose = document.querySelector('.modal-close')
    // hàm hiển thị modal mua vé
function showBuyTickets() {
    modal.classList.add('open')
}
// hàm gỡ bỏ modal mua vé
function hideshowBuyTickets() {
    modal.classList.remove('open')
}
// lặp qua từng thẻ button
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}
// nghe hành vi click
modalClose.addEventListener('click', hideshowBuyTickets)

modal.addEventListener('click', hideshowBuyTickets)

modalContainet.addEventListener('click', function(event) {
    event.stopPropagation()
})

/* menuItem.onclick = function(event) {
    var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
    if (isParentMenu) {
        event.preventDefault();
    } else {
        header.style.height = null;
    }
} */