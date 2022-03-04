// JS






// jq

$(document).ready(function(){

// jquery ui



    $( "#button" ).on( "click", function() {
      $( "#effect" ).addClass( "newClass", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeClass( "newClass" );
      }, 1500 );
    }


   
   var state = true;
    $( "#button2" ).on( "click", function() {
      if ( state ) {
        $( "#effect2" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect2" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });




    $( "#button3" ).on( "click", function() {
      $( "#effect3" ).removeClass( "newClass3", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effect3" ).addClass( "newClass3" );
      }, 1500 );
    }



     var progressbar = $( "#progressbar" ),
      progressLabel = $( ".progress-label" );
 
    progressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( progressbar.progressbar( "value" ) + "%" );
      },
      complete: function() {
        progressLabel.text( "Complete!" );
      }
    });
 
    function progress() {
      var val = progressbar.progressbar( "value" ) || 0;
 
      progressbar.progressbar( "value", val + 2 );
 
      if ( val < 99 ) {
        setTimeout( progress, 80 );
      }
    }
 
    setTimeout( progress, 2000 );



   $( "#resizable" ).resizable();
});
