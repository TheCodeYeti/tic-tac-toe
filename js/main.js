$(document).ready(function() {

  var playSquare = function(square, player) {
    square.append(player.toUpperCase()).addClass(player.toLowerCase());
  }

  var checkForWin = function(line) {

    if ( $('.' + player).length >= 3 ) {
      var count = 0;
      $('.' + line).each(function() {
        if ( $(this).hasClass(player) ) {
          count++;
        }
      });
      if ( count == 3 ) {
        console.log(player + ' WINS!!!');
      }
    }
  }
  // $(document).on('click').toggle(function() {
  //   console.log();
  //   $('.square').on('click')
  // }, function (event) {
  //   console.log(event);
  // });
  var player;

  $('.square').on('click', function() {

    if ( !( $(this).hasClass('x') || $(this).hasClass('o') ) )  {

      if (player == 'x') {
        player = 'o';
      } else {
        player = 'x';
      }

      playSquare($(this), player);

      checkForWin('row1');
      checkForWin('row2');
      checkForWin('row3');
      checkForWin('col1');
      checkForWin('col2');
      checkForWin('col3');
      checkForWin('diag1');
      checkForWin('diag2');

    }

  });

  // $('#game-board').on('click', function() {
  //
  //   if ( $('.' + player).length >= 3 ) {
  //     var count = 0;
  //     $('.row1').each(function() {
  //       if ( $(this).hasClass('x') ) {
  //         count++;
  //       }
  //     });
  //     if ( count == 3 ) { console.log('X WINS!!!'); }
  // });

});
