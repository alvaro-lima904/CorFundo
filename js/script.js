let body = document.querySelector('body');
let button = document.querySelector('button');
let color = ["red", "blue", "green", "yellow", "orange", "cyan", "pink", "purple"];

body.style.backgroundColor = "violet";

button.addEventListener('click', changeB);

function changeB() {
    let colorIndex = parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[colorIndex];
}