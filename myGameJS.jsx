//PIANO GAME

//Add a sound to each piano key

$(document).ready(function() {
    $('.white.C').click(function(){
      $('audio#do')[0].play()
    });

    $('.white.D').click(function(){
      $('audio#ré')[0].play()
    });

    $('.white.E').click(function(){
      $('audio#mi')[0].play()
    });

    $('.white.F').click(function(){
      $('audio#fa')[0].play()
    });

    $('.white.G').click(function(){
      $('audio#sol')[0].play()
    });

    $('.white.A').click(function(){
      $('audio#la')[0].play()
    });

    $('.white.B').click(function(){
      $('audio#si')[0].play()
    });

//Chose a song from the list and double click on it to play of press enter once on it

    // $('.music-names').click(function(){
    //   debugger
    //   let londonBridge = $(this).data('London-Bridge')
    //   $('.song-sources').attr('src', `Songs/${londonBridge}.mp3`)
    // });

    // $('.music-names').dblclick(function(){
    //   let ohSusanna = $(this).data('Oh-Susanna')
    //   $('.song-sources').attr('src', `Songs/${ohSusanna}.mp3`)
    // });

//Display the name of the song selected above the piano

    $('#melodies').change(function(e){
      var displayName = this.value
      $('#display-name').html(displayName);
    });


//Connects keyboard letters to piano key notes

    window.addEventListener("keydown", function(e){
      debugger
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

      //     case("d"):
      //       keyboardLetter. = `${100}`
      //     break;
      //     case("e"):
      //       keyboardLetter. = `${101}`
      //     break;
      //     case("f"):
      //       keyboardLetter. = `${102}`
      //     break;
      //     case("g"):
      //       keyboardLetter. = `${103}`
      //     break;
      //     case("a"):
      //       keyboardLetter. = `${97}`
      //     break;
      //     case("b"):
      //       keyboardLetter. = `${98}`
      //     break;
      // }
// };
});

//Highlight each note in a particular order and on a particular intervcal depending on the song selected
//Once clicked, the piano key goes back to normal

// var illuminatedNote;

// function illuminatedKeyboard() {
//   illuminatedNote = setInterval(illuminatedFunc, 3000);
// }


//HOMEPAGE
//Homepage with mode selection and enter button

//Mode 1 : play with along with the melody in the background

//Mode 2 : play on your own without any melody