$(document).ready(function () {
    console.log('Hola');
    $('.button__1').on('click', function () {
        if($('.desplegable__1').css('opacity')==0){
            $('.desplegable__1').css('visibility', 'visible')
            $('p').css('display', 'block')
            $('.desplegable__1 , p').animate({opacity:1},'fast')
            $('.logo__ulh').animate({width:800},'fast')
            $('.button__2,.button__3').hide('fast')
            $('.desplegable__1').css('cursor','pointer')
            $('.button__1').css('cursor','default')
        }
        $('.desplegable__1').on('click', function () {
            $('.desplegable__1, p').animate({opacity:0},'fast')
            $('.desplegable__1').css('visibility', 'hidder')
            $('p').css('display', 'none')
            $('.desplegable__1').css('cursor','default')
            $('.button__1').css('cursor','pointer')
            $('.logo__ulh').animate({width:1000},'fast')
            $('.button__2,.button__3').show('fast')
        });
    });

    $('.button__2').on('click', function () {
        if($('.desplegable__2').css('opacity')==0){
            $('.desplegable__2').css('visibility', 'visible')
            $('.info__videos').css('display', 'block')
            $('.desplegable__2 , .info__videos').animate({opacity:1},'fast')
            $('.logo__ulh').animate({width:800},'fast')
            $('.button__1,.button__3').hide('fast')
            $('.desplegable__2, .button__video').css('cursor','pointer')
            $('.button__2').css('cursor','default')
        }
        $('.button__video').on('click', function () {
            var vid=$(this)[0].id
            console.log(vid)
            if(vid=='Historia'){
                $('.video_historia').css({display:'block',opacity:1})
                
            }else{
                $('.video_ep').css({display:'block',opacity:1})
            }
            $('.logo__ulh').animate({width:500},'fast')
            $('.texto__videos').html(vid)
            $('nav,.info__videos').animate({opacity:0},'fast')
            $('nav,.info__videos').css({display:'none'},'fast')
            $('.videos').css({display:'block'},'fast')
            $('.videos').animate({opacity:1},'fast')
            
            
            $('.desplegable__video').on('click', function () {
                $('.videos').animate({opacity:0},'fast')
                $('.videos').css({display:'none'},'fast')
                $('.logo__ulh').animate({width:800},'fast')
                $('nav,.info__videos').animate({opacity:1},'fast')
                $('nav,.info__videos').css({display:'block'},'fast')
                $('.video_historia').css({display:'none',opacity:1})
                $('.video_ep').css({display:'none',opacity:1})
            });
        });
        $('.desplegable__2').on('click', function () {
            $('.desplegable__2, .info__videos').animate({opacity:0},'fast')
            $('.desplegable__2').css('visibility', 'hidder')
            $('.info__videos').css('display', 'none')
            $('.desplegable__2').css('cursor','default')
            $('.button__2').css('cursor','pointer')
            $('.logo__ulh').animate({width:1000},'fast')
            $('.button__1,.button__3').show('fast')
        });
    });

    $('.button__3').on('click', function () {
        if($('.desplegable__3').css('opacity')==0){
            $('.desplegable__3').css('visibility', 'visible')
            $('.info__contactos').css('display', 'block')
            $('.desplegable__3 , .info__contactos').animate({opacity:1},'fast')
            $('.logo__ulh').animate({width:800},'fast')
            $('.button__1,.button__2').hide('fast')
            $('.desplegable__3').css('cursor','pointer')
            $('.button__3').css('cursor','default')
        }
        $('.desplegable__3').on('click', function () {
            $('.desplegable__3, .info__contactos').animate({opacity:0},'fast')
            $('.desplegable__3').css('visibility', 'hidder')
            $('.info__contactos').css('display', 'none')
            $('.desplegable__3').css('cursor','default')
            $('.button__3').css('cursor','pointer')
            $('.logo__ulh').animate({width:1000},'fast')
            $('.button__1,.button__2').show('fast')
        });
    });
});
