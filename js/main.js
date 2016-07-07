$(document).ready(function() {

  var playSquare = function(square, player) {
    square.append(player.toUpperCase()).addClass(player.toLowerCase());
  }

  // $(document).on('click').toggle(function() {
  //   console.log();
  //   $('.square').on('click')
  // }, function (event) {
  //   console.log(event);
  // });
  // var player;

  $('.square').on('click', function() {

    if ( !( $(this).hasClass('x') || $(this).hasClass('o') ) )  {

      if (player == 'x') {
        player = 'o';
      } else {
        player = 'x';
      }

      playSquare($(this), player);

    }

  });

});
