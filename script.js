'use strict';

// console.log --> prints output in the console
// document.queryselector --> selects the html attributes , obj , class
// console.log(document.querySelector('.guess'));
// console.log(document.querySelector('.label-score').textContent);
// console.log(document.querySelector('.highscore').textContent);
// We can also make the modification in our text
// in case of input type to get value within it we use value tag
// document.querySelector('.message').textContent = 'Gamer over';
// document.querySelector('.score').textContent = '200';
// document.querySelector('.guess').value = 200;
// document.querySelector('.number').textContent = 20;
// console.log(document.querySelector('.guess').value);
// console.log(document.querySelector('.number').textContent);

// Web Game Main code

const secretNum = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secretNum;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector('.message').textContent = 'Please Enter The number';
    } else if (guess === secretNum) {
        document.querySelector('.message').textContent = 'You Won!!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    } else if (guess > secretNum) {
        if (score > 1) {
            score--;
            document.querySelector('.message').textContent = 'Guess Too high!!';
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'Game Over';
        }
    } else if (guess < secretNum) {
        if (score > 1) {
            score--;
            document.querySelector('.message').textContent = 'Guess Too low!!';
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'Game Over';
        }
    }
});