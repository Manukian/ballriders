$(document).ready(function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.menu_block').each(function(){
            $(this).addClass('menu_block_mobile');
            $(this).height($(window).height());
            $('span.section_header').css('margin-top', ($(window).height()*0.5));
            $('.menu_block-ballride_style').css('background-image','url(../images/people3.jpg)');
            $('.menu_block-soaring_balls_syndicate').css('background-image','url(../images/ballhead.jpg)');
            $('.menu_block-ballriders_creative_group').css('background-image','url(../images/IMG_1811_min.jpg)');
            $('#vid').height(0);
        });
    } else {
        var trail = $(window).width() / 10;
        $('.menu_block').mouseover(function() {
            var elem = $(this);
            elem.siblings('.menu_block').each(function() {
                if ($(this).hasClass('menu_block-selected')) {
                    $(this).removeClass('menu_block-selected');
                }
            });
            if (elem.hasClass('menu_block-soaring_balls_syndicate')) {
                elem.parent('main').children('.menu_block').each(function() {
                    $(this).css('-webkit-transform', 'translateX(0px)');
                });
            }
            if (elem.hasClass('menu_block-ballride_style')) {
                elem.parent('main').children('.menu_block').each(function() {
                    $(this).css('-webkit-transform', 'translateX(' + trail + 'px)');
                });
            }
            if (elem.hasClass('menu_block-ballriders_creative_group')) {
                elem.parent('main').children('.menu_block').each(function() {
                    $(this).css('-webkit-transform', 'translateX(-' + trail + 'px)');
                });
            }
            elem.addClass('menu_block-selected');
            if (elem.hasClass('menu_block-soaring_balls_syndicate')) {
                elem.children('video').attr('loop', 'true');
                elem.children('video')[0].play();
            }
        });
    }
    $('.menu_block').mouseleave(function() {
        $('video')[0].pause();
    });
});