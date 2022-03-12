let count = 0;

const image = document.querySelectorAll('img');
const score = document.querySelector('.score');
const timer = document.querySelector('.timer');
const goal = document.querySelector('.goal');

goal.innerHTML = prompt('Set Goal','60');

const interval = setInterval(() => {
    timer.innerHTML--;

    if(timer.innerHTML == 0 || timer.innerHTML < 0) {
        alert('Time Up');
        if(goal.innerHTML > score.innerHTML) {
            alert('You Lose!!!');
        }
        else if(goal.innerHTML < score.innerHTML) {
            alert('You Won!!!');
        }
        score.innerHTML = 0;
        timer.innerHTML = 60;
    }
}, 1000);

image.forEach(element=>{
    element.addEventListener('click',countIncrease);
});

function countIncrease() {
    count++;
    score.innerHTML = count;
}