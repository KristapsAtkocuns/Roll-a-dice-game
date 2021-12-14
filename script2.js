'use strict';

let score0 = document.getElementById('score--0').textContent;
let score1 = document.getElementById('score--1').textContent;
let current0 = document.getElementById('current--0').textContent;
let current1 = document.getElementById('current--1').textContent;
let btnRoll = document.querySelector('.btn--roll');
let diceRolled = document.querySelector('.dice');
const playerActive = document.querySelector('.player--0');
const playerNotActive = document.querySelector('.player--1');

//start conditions
document.getElementById('score--0').textContent = 0;
document.getElementById('score--1').textContent = 0;
document.getElementById('current--0').textContent = 0;
document.getElementById('current--1').textContent = 0;
document.querySelector('.player--0').style.backgroundColor = 'green';
document.querySelector('.player--1').style.backgroundColor = 'yellow';
let alpha = 0;
let betha = 1;

//Random Number Generator
const getRndInteger = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};
const randomNumer = getRndInteger(1, 7);
console.log(randomNumer);

document.querySelector('.btn--roll').addEventListener('click', function () {
    let dice = getRndInteger(1, 7);
    document.querySelector('.dice').src = `dice-${dice}.png`;



    //kad kaulins nav nulle
    if (dice !== 1) {
        //aktivais player
        document.getElementById(`current--${alpha}`).textContent =
            Number(document.getElementById(`current--${alpha}`).textContent) + dice;

        //aktivais playeris background-color
        document.querySelector(`.player--${alpha}`).style.backgroundColor = 'green';
        document.querySelector(`.player--${betha}`).style.backgroundColor =
            'yellow';
        //hold poga, kas vienado score ar current score
        document.querySelector('.btn--hold').addEventListener('click', function () {
            document.getElementById(`score--${alpha}`).textContent = Number(document.getElementById(`score--${alpha}`).textContent) + Number(
                document.getElementById(`current--${alpha}`).textContent)
                ;
            document.getElementById(`current--${alpha}`).textContent = 0;
            //mainoties playerim nodziest rezultats


        })
    } else {
        //mainoties playerim nodziest rezultats
        document.getElementById(`current--${alpha}`).textContent = 0;
        //statment kas nosaka ka mainisies aktivais playeris
        alpha = alpha === 0 ? 1 : 0;
        betha = betha === 1 ? 0 : 1;
    };
});