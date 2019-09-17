//PIANO GAME

//Add a sound to each piano key

$(document).ready(function() {

  $('.C').click(function(){
    $('audio#do')[0].play()
  });

  $('.D').click(function(){
    $('audio#ré')[0].play()
  });

  $('.Db').click(function(){
    $('audio#ré-bémole')[0].play()
  });

  $('.Eb').click(function(){
    $('audio#mi-bémole')[0].play()
  });

  $('.E').click(function(){
    $('audio#mi')[0].play()
  });

  $('.F').click(function(){
    $('audio#fa')[0].play()
  });

  $('.G').click(function(){
    $('audio#sol')[0].play()
  });

  $('.Gb').click(function(){
    $('audio#sol-bémole')[0].play()
  });

  $('.A').click(function(){
    $('audio#la')[0].play()
  });

  $('.Ab').click(function(){
    $('audio#la-bémole')[0].play()
  });

  $('.B').click(function(){
    $('audio#si')[0].play()
  });

  $('.Bb').click(function(){
    $('audio#si-bémole')[0].play()
  });

//Chose a song from the list and double click or press enter to play

  $('.music-names').click(function(){
    let playlist = $(this).data('songName')
      document.getElementById("song-sources").innerHTML = `<source id="player" src="Songs/${playlist}.mp3" type="audio/mpeg" preload="auto">`
      //$("#song-sources").html(`<source id="player" src="Songs/${playlist}.mp3" type="audio/mpeg" preload="auto">`)
      $('#song-sources')[0].play() 
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
          $('audio#do')[0].play()      
        break;

        case 68:
          $('audio#ré')[0].play()      
        break;

        case 69:
          $('audio#mi')[0].play()      
        break;

        case 70:
          $('audio#fa')[0].play()      
        break;

        case 71:
          $('audio#sol')[0].play()      
        break;

        case 65:
          $('audio#la')[0].play()      
        break;

        case 66:
          $('audio#si')[0].play()      
        break;

    }});

//Highlight each note in a particular order and on a particular interval depending on the song selected
//Once clicked, the piano key goes back to normal

  // let LondonBrigeMelody = ['G', 'A', 'G', 'F', 'E', 'F', 'G', '', 'D', 'E', 'F', '', 'E', 'F', 'G', '', 'G', 'A', 'G', 'F', 'E', 'F', 'G', '', 'D', '', 'G', '', 'E', 'C', '', '']; 
  // let JingleBellsMelody = ['E', 'E', 'E', '', 'E', 'E', 'E', '', 'E', 'G', 'C', 'D', 'E', '', '', '', 'F', 'F', 'F', 'F', 'F', 'E', 'E', 'E', 'E', 'D', 'D', 'E', 'D', '', 'G', '']; 
  
  let noteDo = 'C'
  for(let i = 0 ; i < noteDo.length; i++){
  highlightedKey(noteDo[i]);
  }

  function highlightedKey(key){
      $(`li.${key}`).fadeIn(750, function(){
        $(this).addClass('highlight'); 
      })

      $(`li.${key}`).click(function(){
        $(this).toggleClass('highlight'); 
      })
  }

  let noteRé = 'D'
  for(let i = 0 ; i < noteRé.length; i++){
    highlightedKey1(noteRé[i]);
    }
  
    function highlightedKey1(key){
        $(`li.${key}`).fadeIn(750, function(){
          $(this).addClass('highlight'); 
        })
  
        $(`li.${key}`).click(function(){
          $(this).toggleClass('highlight'); 
        })
    }

  let noteMi = 'E'
  for(let i = 0 ; i < noteMi.length; i++){
    highlightedKey2(noteMi[i]);
    }
  
    function highlightedKey2(key){
        $(`li.${key}`).fadeIn(750, function(){
          $(this).addClass('highlight'); 
        })
  
        $(`li.${key}`).click(function(){
          $(this).toggleClass('highlight'); 
        })
    }

  let noteFa = 'F'
  for(let i = 0 ; i < noteFa.length; i++){
    highlightedKey3(noteFa[i]);
    }
  
    function highlightedKey3(key){
        $(`li.${key}`).fadeIn(750, function(){
          $(this).addClass('highlight'); 
        })
  
        $(`li.${key}`).click(function(){
          $(this).toggleClass('highlight'); 
        })
    }

  let noteSol = 'G'
  for(let i = 0 ; i < noteSol.length; i++){
    highlightedKey4(noteSol[i]);
    }
  
    function highlightedKey4(key){
        $(`li.${key}`).fadeIn(750, function(){
          $(this).addClass('highlight'); 
        })
  
        $(`li.${key}`).click(function(){
          $(this).toggleClass('highlight'); 
        })
    }

  let noteLa = 'A'
  for(let i = 0 ; i < noteLa.length; i++){
    highlightedKey5(noteLa[i]);
    }
  
    function highlightedKey5(key){
        $(`li.${key}`).fadeIn(750, function(){
          $(this).addClass('highlight'); 
        })
  
        $(`li.${key}`).click(function(){
          $(this).toggleClass('highlight'); 
        })
    }

  let noteSi = 'B'
  for(let i = 0 ; i < noteSi.length; i++){
    highlightedKey6(noteSi[i]);
    }
  
    function highlightedKey6(key){
        $(`li.${key}`).fadeIn(750, function(){
          $(this).addClass('highlight'); 
        })
  
        $(`li.${key}`).click(function(){
          $(this).toggleClass('highlight'); 
        })
    }
});

//HOMEPAGE

//Homepage with mode selection and enter button

//Mode 1 : play with along with the melody in the background

//Mode 2 : play on your own without any melody