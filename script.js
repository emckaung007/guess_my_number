'use strict';

const unknownNum = document.querySelector('.number');

//Math.trunc is delete the (.) number 
let luckNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
    const guessNumber = Number(document.querySelector('.guess').value);
    if(!guessNumber){
        document.querySelector('.message').textContent = 'No Number...';
    }else if(guessNumber === luckNumber){
        document.querySelector('.message').textContent = 'Correct Number...';
        unknownNum.textContent = luckNumber;
        unknownNum.style.background = 'rgb(139, 255, 72)';
        unknownNum.style.width = '15rem';
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }else if(guessNumber !== luckNumber){
        if(score > 0){
            document.querySelector('.message').textContent = 
            guessNumber > luckNumber 
            ? 'Too Hight Number...'
            : 'Too Low Number...';
            score--;
            document.querySelector('.score').textContent = score;
          }else {
            document.querySelector('.message').textContent = 'You Lose The Game...';
            document.querySelector('.score').textContent = score;
            unknownNum.textContent = '!';
            unknownNum.style.background = 'rgb(182, 24, 24)';
          }
    }
});

document.querySelector('.again').addEventListener('click', () => {
    document.querySelector('.message').textContent = 'Start Guessing...';
    unknownNum.textContent = '?';
    unknownNum.style.background = '#fff';
    unknownNum.style.width = '8rem';
    luckNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
});
