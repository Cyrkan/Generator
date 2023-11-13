


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


const btnSend = document.querySelector('.btn_send');
var heading = document.querySelector('.color-text');

var style = document.createElement('style');
style.innerHTML = '#heading { transition: color 0.5s ease; }';
document.head.appendChild(style);

btnSend.addEventListener("click", () => {
    var randomColor = getRandomColor();
    heading.style.color = randomColor;
});