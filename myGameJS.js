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
  this.listOfSongs = {
    londonBridge: ['G','A','G','F','E','E','F','G','',
    'D','E','F','F','','E','F','G','G','',
    'G','A','G','F','E','E','F','G','',
    'D','D','G','G','E','E',''],
    auClairDeLaLune: ['F','F','G','A','','G','','F','A','G','G','F','','','',
    'F','F','G','A','','G','','F','A','G','G','G','F','','','',
    'G','G','G','G','D','','D','G','F','E','D','C','C','','','',
    'F','F','F','G','A','','G','F','A','G','G','G','F'],
    ohSusanna: ['C','D','E','G','G','','A','G','E','','C','','','D','','E','E','E','D','D','C','D','','','','',
    'C','D','E','G','','G','','A','G','E','','C','','D','E','E','E','E','D','D','D','C','','','',
    'C','D','E','G','','G','','A','G','E','','C','','','D','E','E','E','D','D','C','D','','','','',
    'C','D','E','G','','G','','A','G','E','','C','','','D','E','E','D','D','D','','C','','','',
    '','','F','','','F','','','A','','A','','','A','G','','G','','E','C','D','','','','',
    'C','D','E','G','','G','','A','G','','E','','C','','D','E','E','E','D','D','D','C','','','',]
  };

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
          $(this).removeClass('highlight')
      })
      $('.Db').click(function(){
        fixThis.clickSound(fixThis.dbSound)
        $(this).removeClass('highlight')
      })
      $('.D').click(function(){
        fixThis.clickSound(fixThis.dSound) 
        $(this).removeClass('highlight')
      })
      $('.Eb').click(function(){
        fixThis.clickSound(fixThis.ebSound)
        $(this).removeClass('highlight')
      })
      $('.E').click(function(){
        fixThis.clickSound(fixThis.eSound)
        $(this).removeClass('highlight')
      }) 
      $('.F').click(function(){
        fixThis.clickSound(fixThis.fSound)
        $(this).removeClass('highlight')
      }) 
      $('.G').click(function(){
        fixThis.clickSound(fixThis.gSound)
        $(this).removeClass('highlight')
      }) 
      $('.Gb').click(function(){
        fixThis.clickSound(fixThis.gbSound)
        $(this).removeClass('highlight')
      }) 
      $('.A').click(function(){
        fixThis.clickSound(fixThis.aSound)
        $(this).removeClass('highlight')
      }) 
      $('.Ab').click(function(){
        fixThis.clickSound(fixThis.abSound)
        $(this).removeClass('highlight')
      }) 
      $('.B').click(function(){
        fixThis.clickSound(fixThis.sSound)
        $(this).removeClass('highlight')
      }) 
      $('.Bb').click(function(){
        fixThis.clickSound(fixThis.sbSound)
        $(this).removeClass('highlight')
      }) 
  }

  //Chose a song from the list and click to play
  this.chooseMusic = function(someMusic){
    let fixThis = this
    var thisClass = this;
    someMusic.click(function(){
      const playlist = $(this).data('title'); 
      console.log(window[playlist])
      thisClass.songSources.innerHTML = `<source id="player" src="Songs/${playlist}.mp3" type="audio/mpeg" preload="auto">`
      thisClass.songSources.load(); 
      thisClass.songSources.play();
      processArray(fixThis.listOfSongs[playlist])
    })
  }

//Display the name of the song selected
  this.displayName = function(){
    this.melodies.change(function(){
      this.value; 
      $('#display-name').html(this.value); 
    });
  }

//Play the sound when you press the key
  this.keyLettersDown = function(){
    let fixThis = this
    document.addEventListener('keydown', function(e){
      fixThis.keySounds(e)
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
        this.cSound.play();   
      break;
  
      case 68:
        this.dSound.play();      
      break;
  
      case 69:
        this.eSound.play();            
      break;
  
      case 70:
        this.fSound.play();       
      break;
  
      case 71:
        this.gSound.play();               
      break;
  
      case 65:
        this.aSound.play();              
      break;
  
      case 66:
        this.sSound.play();               
      break;
    }
  }

//Stop the sound when you let go of the key
  this.keyLettersUp = function(){
    let fixThis = this
    document.addEventListener('keyup', function(e){
      switch (e.keyCode) {
        case 67:
          setTimeout(() => { 
            fixThis.cSound.pause();
            fixThis.cSound.currentTime = 0;
          }, 500);
        break;
    
        case 68:
          setTimeout(() => {
            fixThis.dSound.pause();
            fixThis.dSound.currentTime = 0;
          }, 500);
        break;
    
        case 69:
          setTimeout(() => {
            fixThis.eSound.pause();
            fixThis.eSound.currentTime = 0;
          }, 500);
        break;
    
        case 70:
          setTimeout(() => {
            fixThis.fSound.pause();
            fixThis.fSound.currentTime = 0;
          }, 500);
        break;
    
        case 71:
          setTimeout(() => {
            fixThis.gSound.pause();
            fixThis.gSound.currentTime = 0;
          }, 500);
        break;
    
        case 65:
          setTimeout(() => {
            fixThis.aSound.pause();
            fixThis.aSound.currentTime = 0;
          }, 500);
        break;
    
        case 66:
          setTimeout(() => {
            fixThis.sSound.pause();
            fixThis.sSound.currentTime = 0;
          }, 500);
        break;
        }
    });
  }

//Highlight each note in a particular order and on a particular interval depending on the song selected
  async function processArray(array) {
    for(let i = 0; i < array.length; i++){
      switch(array[i]) {
        case '':
          await delay(500)
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
    $(`li.${key}`).fadeIn(500, function(){
      $(this).addClass('highlight'); 
    })

    setTimeout(function() {
      $(`li.${key}`).removeClass('highlight'); 
    }, 1000)
  }
}

let pianoGame = new PianoGame()
pianoGame.clickEvents();
pianoGame.chooseMusic(pianoGame.musicName);
pianoGame.displayName();
pianoGame.keyLettersDown();
pianoGame.keyLettersUp();

