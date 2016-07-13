$(document).ready(function() {

  var wins = {
    x: 0,
    y: 0
  };

  var player = 'x';

  var updateWins = function() {
    $('#x-win-count').html(wins['x']);
    $('#y-win-count').html(wins['y']);
  }

  var awardWin = function(player) {
    wins[player] += 1;
    updateWins();
    resetBoard();
  }

  var resetBoard = function() {
    $('.square').removeClass('x').removeClass('y').html('');
  }

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
        awardWin(player);
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

  updateWins();

  $('.square').on('click', function() {

    if ( !( $(this).hasClass('x') || $(this).hasClass('o') ) )  {

      playSquare($(this), player);

      checkForWin('row1');
      checkForWin('row2');
      checkForWin('row3');
      checkForWin('col1');
      checkForWin('col2');
      checkForWin('col3');
      checkForWin('diag1');
      checkForWin('diag2');

      if (player == 'x') {
        player = 'o';
      } else {
        player = 'x';
      }

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
