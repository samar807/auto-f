$(document).ready(function() {
    $('.btn-search').click(function() {
        $('nav').addClass('fadein');
        $('.btn-search').addClass('fadeout');
        $('.input-search').addClass('input-open');
        $('button').addClass('btn-open');
        $('form').addClass('open')
    });

    $('.toggle').click(function() {
        $('.toggle').toggleClass('active');
        $('.slide-bar').addClass('open')
    });
    $(' .close-tab ').click(function() {
        $('.slide-bar').removeClass('open')
    });

    $('button').click(function() {
        $('nav').removeClass('fadein');
        $('.btn-search').removeClass('fadeout');
        $('.input-search').removeClass('input-open');
        $('form').removeClass('open');
        $('button').removeClass('btn-open');
        $('form').removeClass('search-tab');

    });
    $('.search').click(function() {
        $('form').addClass('search-tab');
    });
    $('button').click(function() {
        $('form').removeClass('search-tab');
    });
    $('.fa.fa-times').click(function() {
        $('form').removeClass('open');
    });
})