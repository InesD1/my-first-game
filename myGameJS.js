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

//Chose a song from the list and double click or press enter to play

    // $('.music-names').click(function(){
    //   debugger
    //   let londonBridge = $(this).data('London-Bridge')
    //   $('.song-sources').attr('src', `Songs/${londonBridge}.mp3`)
    // });

    // $('.music-names').dblclick(function(){
    //   let ohSusanna = $(this).data('Oh-Susanna')
    //   $('.song-sources').attr('src', `Songs/${ohSusanna}.mp3`)
    // });

//Display the name of the song selected

  $('#melodies').change(function(e){
    var displayName = this.value
    $('#display-name').html(displayName);
  });

//Connects keyboard letters to piano keys

  window.addEventListener("keydown", function(e){
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


  // var light;   

  // function highlightedKey(key){
  //   $(`li.${key}`).fadeIn(750, function(){
  //     $(this).addClass('highlight'); 
  //   })
  //   setTimeout(function() {
  //     $(`li.${key}`).removeClass('highlight', 2000); 
  //   }, 1000)
    
  //   light = setTimeout(function() {
  //     highlightedKey('A')
  //   }, 2000);
  // }


  let song = ['A', 'C', 'A', 'A', 'D']; 

  for(let i = 0 ; i < song.length; i++){
  highlightedKey2(song[i]);
}

  function highlightedKey2(key){
    setTimeout(function() {
      $(`li.${key}`).fadeIn(750, function(){
        $(this).addClass('highlight'); 
      })
      
      // $(`li.${key}`).removeClass('highlight'); 

      setTimeout(function() {
        $(`li.${key}`).removeClass('highlight', 2000); 
      }, 1000)

    }, 1000)
  }

  // $(document).ready(function(){
  //   highlightedKey2('A');
  // });

});

//HOMEPAGE

//Homepage with mode selection and enter button

//Mode 1 : play with along with the melody in the background

//Mode 2 : play on your own without any melody