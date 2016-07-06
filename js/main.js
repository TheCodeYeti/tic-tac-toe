$(document).ready(function() {

  var playSquare = function(square, player) {
    square.append(player.toUpperCase()).addClass(player.toLowerCase());
  }

  $('.square').on('click', function() {

    if ( !( $(this).hasClass('x') || $(this).hasClass('o') ) )  {

      playSquare($(this), 'x');

    }

  });

});
