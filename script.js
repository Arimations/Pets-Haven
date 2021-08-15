var buttons = document.querySelectorAll('.btn');
var cards = document.querySelectorAll('.item');
var searchBar = document.querySelector('input');
console.log(searchBar);

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        var btnClick = button.textContent.toLowerCase();
        if (btnClick == 'all') {
            cards.forEach(function (card) {
                card.style.display = 'block';
            })
        } else {
            cards.forEach(function (card) {
                if (card.classList.contains(btnClick)) {
                    card.style.display = 'block';
                }
                else {
                    card.style.display = 'none';
                }

            })
        }
    });
})


searchBar.addEventListener('keyup', function (event) {
    var userInput = event.target.value.toLowerCase().trim();
    cards.forEach(function (card) {
        if (card.textContent.toLowerCase().trim().includes(userInput)) {
            card.style.display = 'block';

        } else {
            card.style.display = 'none';
        }
    });

});

