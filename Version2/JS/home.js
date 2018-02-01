// Auteur : Guillaume Malzac
// Adapte la taille des images à la page (full-screen)
var $item = $('.carousel .item'); 
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight); 
$item.addClass('full-screen');

// Mise à jour du code HTML (en vrai c'est du copié-collé et c'est moche... :/)
$('.carousel img').each(function() {
    var $src = $(this).attr('src');
    var $color = $(this).attr('data-color');
    $(this).parent().css({
	'background-image' : 'url(' + $src + ')',
	'background-color' : $color
    });
    $(this).remove();
});

// Mais à jour la taille des images en fonction des modifications de la taille de la fenêtre
$(window).on('resize', function (){
    $wHeight = $(window).height();
    $item.height($wHeight);
});

// Timer pour les transitions automatiques
$('.carousel').carousel({
    interval: 6000,
    pause: "false"
});
