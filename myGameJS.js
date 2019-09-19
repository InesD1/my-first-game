//PIANO GAME
function PianoGame(){
  this.cSound = $("audio#do")[0];
  this.dbSound = $("audio#ré-bémole")[0];
  this.dSound = $("audio#ré")[0];
  this.ebSound = $("audio#mi-bémole")[0];
  this.eSound = $("audio#mi")[0];
  this.fSound = $("audio#fa")[0];
  this.gbSound = $("audio#sol-bémole")[0];
  this.gSound = $("audio#sol")[0];
  this.abSound = $("audio#la-bémole")[0];
  this.aSound = $("audio#la")[0];
  this.sbSound = $("audio#si-bémole")[0];
  this.sSound = $("audio#si")[0];
  this.musicName = $('.music-names'); 
  this.songSources = $('#song-sources')[0]; 
  this.melodies = $('#melodies'); 


  //Add a sound to each piano key
  this.clickSound = function(someSound){
    someSound.play()
    setTimeout(() => {
      someSound.pause();
      someSound.currentTime = 0;
      }, 500);
  }

  this.clickEvents = function(){
      let fixThis = this
      $('.C').click(function(){
          fixThis.clickSound(fixThis.cSound)
      })
      $('.Db').click(function(){
        fixThis.clickSound(fixThis.dbSound)
      })
      $('.D').click(function(){
        fixThis.clickSound(fixThis.dSound) 
      })
      $('.Eb').click(function(){
        fixThis.clickSound(fixThis.ebSound)
      })
      $('.E').click(function(){
        fixThis.clickSound(fixThis.eSound)
      }) 
      $('.F').click(function(){
        fixThis.clickSound(fixThis.fSound)
      }) 
      $('.G').click(function(){
        fixThis.clickSound(fixThis.gSound)
      }) 
      $('.Gb').click(function(){
        fixThis.clickSound(fixThis.gbSound)
      }) 
      $('.A').click(function(){
        fixThis.clickSound(fixThis.aSound)
      }) 
      $('.Ab').click(function(){
        fixThis.clickSound(fixThis.abSound)
      }) 
      $('.B').click(function(){
        fixThis.clickSound(fixThis.sSound)
      }) 
      $('.Bb').click(function(){
        fixThis.clickSound(fixThis.sbSound)
      }) 
  }

  //Chose a song from the list and click to play
  this.chooseMusic = function(someMusic){
    var thisClass = this;
    someMusic.click(function(){
      const playlist = $(this).data('title'); 
      thisClass.songSources.innerHTML = `<source id="player" src="Songs/${playlist}.mp3" type="audio/mpeg" preload="auto">`
      thisClass.songSources.load(); 
      thisClass.songSources.play();
      processArray(LondonBrigeMelody);
    })
  }

//Display the name of the song selected
  this.displayName = function(){
    melodies.change(function(){
      this.value; 
      $('#display-name').html(this.value); 
    });
  }

//Play the sound when you press the key
  this.keyLettersDown = function(){
    document.addEventListener('keydown', function(e){
      keySoundPlay(e)
        const keyUpperCase = $(`.${e.key.toUpperCase()}`); 
          keyUpperCase.addClass('active');
          setTimeout(() => {
          keyUpperCase.removeClass('active');
        }, 100);
    });
  }

  this.keySounds = function(e){
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
this.keyLettersUp = function(){
  document.addEventListener('keyup', function(e){
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
}

//Highlight each note in a particular order and on a particular interval depending on the song selected
let LondonBrigeMelody = ['G','A','G','F','E','F','G','D','E','F','E','F','G','G','A','G','F','E','F','G','D','G','E']; 
async function processArray(array) {
  for(let i = 0; i < array.length; i++){
    switch(array[i]) {
      case 'D':
        await highlightedKey(array[i], 500);
        break;
      case '':
        await delay(100)
        break;
      default:
        await highlightedKey(array[i], 100);
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
  $(`li.${key}`).fadeIn(500, function(){
    $(this).addClass('highlight'); 
  })

  setTimeout(function() {
    $(`li.${key}`).removeClass('highlight', 100); 
  }, 500)
}

// let JingleBellsMelody = ['E','E','E','','E','E','E','','E','G','C','D','E','','','','F','F','F','F','F','E','E','E','E','D','D','E','D','','G','']; 
// let TwinkleMelody = ['C','C','G','G','A','A','G','','F','F','E','E','D','D','C','','G','G','F','F','E','E','D','','G','G','F','F','E','E','D','','C','C','G','G','A','A','G','','F','F','E','E','D','D','C','']
// let OhSusannaMelody = ['C','D','E','G','G','','A','G','E','C','','D','E','E','D','C','D','','','C','D','E','G','G','','A','G','E','C','','D','E','E','D','D','C','','','','F','','F','','A','A','','A','G','G','E','C','D','','','C','D','E','G','G','','A','G','E','C','D','E','E','D','D','C']
// let AuClairDeLaLuneMelody = ['C','C','C','D','E','','C','E','D','D','C','C','C','C','D','E','','C','E','D','D','C']
}

let pianoGame = new PianoGame()
pianoGame.clickEvents();
pianoGame.chooseMusic(pianoGame.musicName)