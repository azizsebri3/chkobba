/// this function make you to move in another file if you pute youre name to play if you doesnt put youre name it will show you a message to put youre name
/// i used the locale storage to keep the name save

$('#btnhome').on('click', function () {
  var inputeName = $('#nameplay').val();
  if (inputeName === '') {
    alert('you should enter your name');
  } else {
    window.location.href = 'play.html';
    stored();
  }
});

function stored() {
  var playername = document.getElementById('nameplay').value;
  localStorage.setItem('textvalue', playername);
  var total=document.getElementById("total")

total.innerHTML = parseInt(count);
  return false;
}
document.getElementById('result').innerHTML = localStorage.getItem('textvalue');
///////////// this function make the card showing or turn the card /////////
function MakePlaye(name,score){
  return {name,score}
}

function handleExit() {
  var elem = document.getElementById('dismiss-popup-btn');
  elem.addEventListener('click', function() {
    // Additional actions or checks before navigating to 'home.html'
    console.log("Button clicked!");
    localStorage.clear();
    window.location.href = 'home.html';
  });
}

handleExit()

function handlePlayAgain() {
  var elem = document.getElementById('pg-popup-btn');
  elem.addEventListener('click', function() {
    // Additional actions or checks before navigating to 'home.html'
    console.log("Button pg clicked!");
    window.location.href = 'play.html';
    document.getElementsByClassName("popup")[0].classList.remove("active");


  });
}
handlePlayAgain()


var allCards = [
  '/images/1love.png',
  '/images/1love.png',
  '/images/4trefl.png',
  '/images/4trefl.png',
  '/images/7love.png',
  '/images/7love.png',
  '/images/kawel1.png',
  '/images/kawel1.png',
  '/images/moujira1.png',
  '/images/moujira1.png',
  '/images/roi1.png',
  '/images/roi1.png',
];

///// we shuffle the cards randomly
allCards.sort(function (a, b) {
  return Math.random() - 0.5;
});

var ijalena = $('.ijalena');

function showAllCard() {
  $.each(allCards, function(index, elem) {
    var card = $('<div>').addClass('card');

    var frontImage = $('<img>').addClass('front').attr('src', elem);

    var backImage = $('<img>').addClass('back').attr('src', '/images/back.png');

    card.append(frontImage);
    card.append(backImage);
    ijalena.append(card);
  });
}
showAllCard();

var cards = document.querySelectorAll('.card');

each(cards, function (elem) {
  elem.addEventListener('click', handleClicked);
});

//// we declare this two variable to compare with them and give him null because they didnt get anything first
var firstCard = null;
var secondCard = null;

////// invocation of each function
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else if (typeof coll === 'object') {
    for (var key in coll) {
      if (coll.hasOwnProperty(key)) {
        f(coll[key], key);
      }
    }
  }
}

var onClick = true;
var score = 0;

function handleClicked() {
  if (!onClick) return;
  ///// this it refer to al the card give him a class name 
  if (this.classList.contains('stylee')) return;

  this.classList.add('stylee');
////if not null return true return the keyword this because it refer to the same card
  if (!firstCard) {
    firstCard = this;
   /// also the same with the seconde card if its empty he get the value of keyword this that refer to the card that i clicked
  } else if (!secondCard) {
    secondCard = this;
  }
  // console.log(firstCard,secondCard);

  /// we do if condition to check if the value of first card and second card are true it will pute link of first elementchild to iamge1 and 2 else it will give null to the both
  if (firstCard) {
    var img1 = firstCard.firstElementChild.src;
  } else {
    img1 = null;
  }

  if (secondCard) {
    var img2 = secondCard.firstElementChild.src;
  } else {
    img2 = null;
  }

  /// we check if are the same or not
  if (img1 === img2) {
    console.log('kifkif');
    firstCard = null;
    secondCard = null;
    score++;
    if (score === 1) gamewin();
    //// if if he doesnt matching it will remove it the clase stylee because i already give it in css to rotate mean turn then i will make it the two variable  empty also to can fill them with other card 
    /// i mean when the card he dosent match the other card when i clicked it will turn back or it hide again
  } else if (img1 && img2) {
    onClick = false;
////// this setimeout just when the card clicket turn i git it one 1000s to not be faster when turn thats is it
    setTimeout(function () {
      firstCard.classList.remove('stylee');
      secondCard.classList.remove('stylee');
      firstCard = null;
      secondCard = null;
      onClick = true;
    }, 1000);
  }
}


///////// this function to increment the score every time you play
var count = localStorage.getItem('count') || 0;

var total=document.getElementById("total")

total.innerHTML = parseInt(count);

function gamewin() {
  setTimeout(() => {
    count = parseInt(count) + 1;
    localStorage.setItem('count', count);
    total.innerHTML = parseInt(count); // Update the total in the HTML
    youWin(); // Call youWin() directly when the game is won
  }, 1000);
}

console.log(allCards);

function youWin() {
  // Display the popup when youWin() is called
  document.getElementsByClassName("popup")[0].classList.add("active");

  // Add event listener to dismiss the popup
  document.getElementById("dismiss-popup-btn").addEventListener("click", function () {
    document.getElementsByClassName("popup")[0].classList.remove("active");
  });
}



