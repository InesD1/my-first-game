//PIANO GAME
const cSound = $("audio#do")[0];
const dbSound = $("audio#ré-bémole")[0];
const dSound = $("audio#ré")[0];
const ebSound = $("audio#mi-bémole")[0];
const eSound = $("audio#mi")[0];
const fSound = $("audio#fa")[0];
const gbSound = $("audio#sol-bémole")[0];
const gSound = $("audio#sol")[0];
const abSound = $("audio#la-bémole")[0];
const aSound = $("audio#la")[0];
const sbSound = $("audio#si-bémole")[0];
const sSound = $("audio#si")[0];

const musicName = $('.music-names'); 
const songSources = $('#song-sources')[0]; 

const melodies = $('#melodies'); 


//Add a sound to each piano key
function clickSound(someSound){
  someSound.play();
  setTimeout(() => {
    someSound.pause();
    someSound.currentTime = 0;
    }, 500);
}

  $('.C').click(function(){
    clickSound(cSound)
  });

  $('.Db').click(function(){
    clickSound(dbSound)
  });

  $('.D').click(function(){
    clickSound(dSound)
  });

  $('.Eb').click(function(){
    clickSound(ebSound)
  });

  $('.E').click(function(){
    clickSound(eSound)
  });

  $('.F').click(function(){
    clickSound(fSound)
  });

  $('.G').click(function(){
    clickSound(gSound)
  });

  $('.Gb').click(function(){
    clickSound(gbSound)
  });

  $('.A').click(function(){
    clickSound(aSound)
  });

  $('.Ab').click(function(){
    clickSound(abSound)
  });

  $('.B').click(function(){
    clickSound(sSound)
  });

  $('.Bb').click(function(){
    clickSound(sbSound)
  });

//Chose a song from the list and double click to play
function chooseMusic(someName) {
  someName.click(function(){
    const playlist = $(this).data('title'); 
    songSources.innerHTML = `<source id="player" src="Songs/${playlist}.mp3" type="audio/mpeg" preload="auto">`
    songSources.load(); 
    songSources.play();
    processArray(OhSusannaMelody);
  }); 
}
chooseMusic(musicName); 

//Display the name of the song selected
  function displayName(){
    melodies.change(function(){
      this.value; 
      $('#display-name').html(this.value); 
    });
  }
displayName(); 

//Connects keyboard letters to piano keys

// document.addEventListener("keydown", function(e){
//   $(`.${e.key.toUpperCase()}`).addClass('active');
//   setTimeout(() => {
//     $(`.${e.key.toUpperCase()}`).removeClass('active');
//   }, 100);

function keyLettersDown() {
  document.addEventListener('keydown', function(e){
    keySoundPlay(e)
      const keyUpperCase = $(`.${e.key.toUpperCase()}`); 
      keyUpperCase.addClass('active');
      setTimeout(() => {
        keyUpperCase.removeClass('active');
      }, 100);
  });
}
keyLettersDown()

function keySoundPlay(e) {
  switch (e.keyCode) {
    case 67:
      cSound.play();   
    break;

    case 68:
      dSound.play();      
    break;

    case 69:
      eSound.play();            
    break;

    case 70:
      fSound.play();       
    break;

    case 71:
      gSound.play();               
    break;

    case 65:
      aSound.play();              
    break;

    case 66:
      sSound.play();               
    break;
  }
}

//Stop the sound when you let go of the key
//Add black keys 

document.addEventListener("keyup", function(e){
  switch (e.keyCode) {
    case 67:
      setTimeout(() => { //function w/ parameter, call the function in every case w/ the right note as an argument
      cSound.pause();
      cSound.currentTime = 0;
      }, 500);
    break;

    case 68:
      setTimeout(() => {
      dSound.pause();
      dSound.currentTime = 0;
      }, 500);
    break;

    case 69:
      setTimeout(() => {
      eSound.pause();
      eSound.currentTime = 0;
      }, 500);
    break;

    case 70:
      setTimeout(() => {
      fSound.pause();
      fSound.currentTime = 0;
      }, 500);
    break;

    case 71:
      setTimeout(() => {
      gSound.pause();
      gSound.currentTime = 0;
      }, 500);
    break;

    case 65:
      setTimeout(() => {
      aSound.pause();
      aSound.currentTime = 0;
      }, 500);
    break;

    case 66:
      setTimeout(() => {
      sSound.pause();
      sSound.currentTime = 0;
      }, 500);
    break;
    }
});

//Highlight each note in a particular order and on a particular interval depending on the song selected
//Once clicked, the piano key goes back to normal

// let LondonBrigeMelody = ['G','A','G','F','E','F','G','','D','E','F','','E','F','G','','G','A','G','F','E','F','G','','D','','G','','E']; 
let OhSusannaMelody = ['C','D','E','G','G','','A','G','E','C','','D','E','E','D','C','D','','','C','D','E','G','G','','A','G','E','C','','D','E','E','D','D','C','','','','F','','F','','A','A','','A','G','G','E','C','D','','','C','D','E','G','G','','A','G','E','C','D','E','E','D','D','C']
async function processArray(array) {
  for(let i = 0; i < array.length; i++){
    switch(array[i]) {
      // case 'D':
      //   await highlightedKey(array[i], 500);
      //   break;
      case '':
        await delay(1000)
        break;
      default:
        await highlightedKey(array[i], 500);
        break;
    }
  }
}

async function delay(time) {
  return new Promise(function(resolve) {
    return setTimeout(resolve, time)
  })
}

async function highlightedKey(key, time){
  await delay(time)
  $(`li.${key}`).fadeIn(750, function(){
    $(this).addClass('highlight'); 
  })

  setTimeout(function() {
    $(`li.${key}`).removeClass('highlight', 2000); 
  }, 1000)
  
}

// let JingleBellsMelody = ['E','E','E','','E','E','E','','E','G','C','D','E','','','','F','F','F','F','F','E','E','E','E','D','D','E','D','','G','']; 
// let TwinkleMelody = ['C','C','G','G','A','A','G','','F','F','E','E','D','D','C','','G','G','F','F','E','E','D','','G','G','F','F','E','E','D','','C','C','G','G','A','A','G','','F','F','E','E','D','D','C','']

//HOMEPAGE

//Homepage with mode selection and enter button

//Mode 1 : play with along with the melody in the background

//Mode 2 : play on your own without any melody