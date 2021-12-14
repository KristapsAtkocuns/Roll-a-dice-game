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
document.querySelector(`.winner--0`).style.opacity = '0';
document.querySelector(`.winner--1`).style.opacity = '0';
//Player secibas mainai
let alpha = 0;
let betha = 1;

//Random Number Generator
const getRndInteger = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
const randomNumer = getRndInteger(1, 7);
console.log(randomNumer);

//roll button functionality
document.querySelector('.btn--roll').addEventListener('click', function () {
  let dice = getRndInteger(1, 7);
  document.querySelector('.dice').src = `dice-${dice}.png`;
  //aktivais playera current punktu summa
  document.getElementById(`current--${alpha}`).textContent =
    Number(document.getElementById(`current--${alpha}`).textContent) + dice;

  //ja uzkrit 1 visi nosacijumi
  if (dice == 1) {
    //mainas aktivais player un nodziest current score
    alpha = alpha === 0 ? 1 : 0;
    betha = betha === 1 ? 0 : 1;
    document.getElementById(`current--${alpha}`).textContent =
      Number(document.getElementById(`current--${alpha}`).textContent) + dice;
    document.querySelector(`.player--${alpha}`).style.backgroundColor = 'green';
    document.querySelector(`.player--${betha}`).style.backgroundColor =
      'yellow';
    document.getElementById(`current--${betha}`).textContent = 0;
  }
});

//button hold funkcionalitate
document.querySelector('.btn--hold').addEventListener('click', function () {
  //Seit pasaku ka score bus = ar esosais score akt. player + current score akt. palyer
  //parnes punktus no current uz aktiva player score
  document.getElementById(`score--${alpha}`).textContent =
    Number(document.getElementById(`score--${alpha}`).textContent) +
    Number(document.getElementById(`current--${alpha}`).textContent);

  //Ja kads no speletajiem vine speli
  if (
    Number(document.getElementById(`score--0`).textContent) >= 30 ||
    Number(document.getElementById(`score--1`).textContent) >= 30
  ) {
    console.log(
      Number(document.getElementById(`score--0`).textContent),
      Number(document.getElementById(`score--1`).textContent)
    );

    //atspogulo uzvaretaju mainot opacity
    document.querySelector(`.winner--${alpha}`).style.opacity = '1';
    //uzspiezot uz jebkuras porgas viss restartejas

    //auto timeris kas restarte speli pec uzvaras
    setTimeout(() => {
      document.getElementById('score--0').textContent = 0;
      document.getElementById('score--1').textContent = 0;
      document.getElementById('current--0').textContent = 0;
      document.getElementById('current--1').textContent = 0;
      document.querySelector('.player--0').style.backgroundColor = 'green';
      document.querySelector('.player--1').style.backgroundColor = 'yellow';
      document.querySelector(`.winner--0`).style.opacity = '0';
      document.querySelector(`.winner--1`).style.opacity = '0';
      alpha = 0;
      betha = 1;
    }, 2000);

    //else statment taisa console.log
  } else {
    console.log('game continues');
    // console.log(Number(document.getElementById(`score--0`).textContent), Number(document.getElementById(`score--1`).textContent))
  }

  //seit es pasaku ka current score janodzes uz 0
  document.getElementById(`current--${alpha}`).textContent = 0;
  //mainas playeris kas ir aktivs
  alpha = alpha === 0 ? 1 : 0;
  betha = betha === 1 ? 0 : 1;

  document.querySelector(`.player--${alpha}`).style.backgroundColor = 'green';
  document.querySelector(`.player--${betha}`).style.backgroundColor = 'yellow';
  document.getElementById(`score--${alpha}`).textContent =
    Number(document.getElementById(`score--${alpha}`).textContent) +
    Number(document.getElementById(`current--${alpha}`).textContent);
});

//Restart poga
document.querySelector('.btn--new').addEventListener('click', function () {
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  document.querySelector('.player--0').style.backgroundColor = 'green';
  document.querySelector('.player--1').style.backgroundColor = 'yellow';
  let alpha = 0;
  let betha = 1;
  document.querySelector(`.winner--0`).style.opacity = '0';
  document.querySelector(`.winner--1`).style.opacity = '0';
});
