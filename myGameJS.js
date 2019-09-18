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

//Add a sound to each piano key
$(document).ready(function() {
  $('.C').click(function(){
    cSound.play();
    setTimeout(() => {
      cSound.pause();
      cSound.currentTime = 0;
      }, 500);
  });

  $('.Db').click(function(){
    dbSound.play();
    setTimeout(() => {
      dbSound.pause();
      dbSound.currentTime = 0;
      }, 500);
  });

  $('.D').click(function(){
    dSound.play();
    setTimeout(() => {
      dSound.pause();
      dSound.currentTime = 0;
      }, 500);
  });

  $('.Eb').click(function(){
    ebSound.play();
    setTimeout(() => {
      ebSound.pause();
      ebSound.currentTime = 0;
      }, 500);
  });

  $('.E').click(function(){
    eSound.play();
    setTimeout(() => {
      eSound.pause();
      eSound.currentTime = 0;
      }, 500);
  });

  $('.F').click(function(){
    fSound.play();
    setTimeout(() => {
      fSound.pause();
      fSound.currentTime = 0;
      }, 500);
  });

  $('.G').click(function(){
    gSound.play();
    setTimeout(() => {
      gSound.pause();
      gSound.currentTime = 0;
      }, 500);
  });

  $('.Gb').click(function(){
    gbSound.play();
    setTimeout(() => {
      gbSound.pause();
      gbSound.currentTime = 0;
      }, 500);
  });

  $('.A').click(function(){
    aSound.play();
    setTimeout(() => {
      aSound.pause();
      aSound.currentTime = 0;
      }, 500);
  });

  $('.Ab').click(function(){
    abSound.play();
    setTimeout(() => {
      abSound.pause();
      abSound.currentTime = 0;
      }, 500);
  });

  $('.B').click(function(){
    sSound.play();
    setTimeout(() => {
      sSound.pause();
      sSound.currentTime = 0;
      }, 500);
  });

  $('.Bb').click(function(){
    sbSound.play();
    setTimeout(() => {
      sbSound.pause();
      sbSound.currentTime = 0;
      }, 500);
  });

//Chose a song from the list and double click or press enter to play

  $('.music-names').click(function(){
    let playlist = $(this).data('title')
      document.getElementById("song-sources").innerHTML = `<source id="player" src="Songs/${playlist}.mp3" type="audio/mpeg" preload="auto">`
      $('#song-sources')[0].load()
      $('#song-sources')[0].play() 
      processArray(LondonBrigeMelody);
  });

//Display the name of the song selected
  $('#melodies').change(function(e){
    var displayName = this.value
    $('#display-name').html(displayName);
  });

//Connects keyboard letters to piano keys
document.addEventListener("keydown", function(e){
  switch (e.keyCode) {
    case 67:
      cSound.play();   
      $(`.${e.key.toUpperCase()}`).toggleClass('active');  //Add a timer + do it for the other letters
      debugger
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

  }});

//Stop the sound when you let go of the key
//Add black keys 
document.addEventListener("keyup", function(e){
  switch (e.keyCode) {
    case 67:
      setTimeout(() => {
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

let LondonBrigeMelody = ['G','A','G','F','E','F','G','','D','E','F','','E','F','G','','G','A','G','F','E','F','G','','D','','G','','E','C','','']; 

async function processArray(array) {
  for(let i = 0; i < array.length; i++){
    switch(array[i]) {
      case 'D':
        await highlightedKey(array[i], 5000);
        break;
      case '':
        await delay(2000)
        break;
      default:
        await highlightedKey(array[i], 750);
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
});

// let JingleBellsMelody = ['E','E','E','','E','E','E','','E','G','C','D','E','','','','F','F','F','F','F','E','E','E','E','D','D','E','D','','G','']; 
// let TwinkleMelody = ['C','C','G','G','A','A','G','','F','F','E','E','D','D','C','','G','G','F','F','E','E','D','','G','G','F','F','E','E','D','','C','C','G','G','A','A','G','','F','F','E','E','D','D','C','']

//HOMEPAGE

//Homepage with mode selection and enter button

//Mode 1 : play with along with the melody in the background

//Mode 2 : play on your own without any melody