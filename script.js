    $(window).on("load", function(){
    $("#loader").slideUp(2000);
});
$(document).ready(function(){

    var img = ['gym/1.jpg', 'gym/2.jpg', 'gym/3.jpg'];
    var i = 0; 
    $('.slider').attr('src', img[0]);

    $('.next').click(function(){
        if(i < img.length - 1){
            i++;
            $('.slider').fadeOut(400, function(){
                $('.slider').attr('src', img[i]).fadeIn(400);
            });
        }
    });

    $('.prev').click(function(){
        if(i > 0){
            i--;
            $('.slider').fadeOut(400, function(){
                $('.slider').attr('src', img[i]).fadeIn(400);
            });
        }
    });


    $('.slidernext').click(function(){
        $('.main').animate({
            scrollLeft: '+=280'
        },0);
    });

    $('.sliderprev').click(function(){
        $('.main').animate({
            scrollLeft: '-=280'
        },0);
    });

    $('.ul li').hover(function(){
        $(this).find('.nav2').slideDown("fast")
    })
$('.ul li').mouseleave(function(){
    $(this).find('.nav2').slideUp("fast")
})

$('.list').click(function(){
    $('.list2').fadeToggle("low")
})

if ($(window).width() < 600) {
        $('.list2 li').has('.nav2').off('click').on('click', function (e) {
            e.stopPropagation();
            $(this).find('.nav2').stop().slideToggle(200);
        });
    }



});
