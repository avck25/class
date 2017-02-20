/* global $*/
(function () {
    "use strict";

    /*function useThis() {
        console.log(this);
    }

    useThis();
    function useACallback(callback) {
        callback();
    }

    useACallback(function () {
        console.log(this);
    });*/

    var it = $("#it")
        .css('backgroundColor', 'red')
        .css('fontSize', '50px');

    $('#it2')
        .css('backgroundColor', 'blue')
        .css('color', 'yellow')
        .click(function (event) {
            //alert("it3 was clicked");
            //console.log(event, this);
            it3.hide('fast');
            setTimeout(function () {
                it3.show('slow');
            }, 2000);
        });

    var it3 = $('#it3')
        /*.css('backgroundColor', 'green')
        .css('fontFamily', 'cursive');*/
        .css({
            backgroundColor: 'green',
            fontFamily: 'cursive'
        });

    $('.important').css('font-style', 'italic')
        .click(function (event) {
            console.log('Something important was clicked');
        });

    var h1s = $('h1')
        .append('<span></span>')
        .click(function (event) {
            console.log('An h1 was clicked');
            //$('body').append('<h1>I was added later</h1>');
            var theNewH1 = $('<h1>I was added later</h1>')
                .appendTo($('body'))
                .click(function () {
                    console.log('new guy was clicked');
                });
            h1s = h1s.add(theNewH1);
            h1s.css('border', '5px dashed red');

            var it = $(this);
            var currentCount = it.data('clickCount');
            it.data('clickCount', ++currentCount);
            it.find('span').text(' ' + currentCount);
        }).data('clickCount', 0);

    $(':header').click(function (event) {
        console.log('A header was clicked');
    });

    $('input').mouseenter(function () {
        console.log('enter', this, $(this));
        //$(this).css('background-color', 'yellow');
        $(this).addClass('highlight');
    }).mouseleave(function () {
        console.log('leave', this, $(this));
        //$(this).css('background-color', 'white');
        $(this).removeClass('highlight');
    }).change(function () {
        console.log($(this).val());
    });

    console.log('inputs', $('input'));

    $('#last').css('background-color', 'red').slideUp(10000, function () {
        $(this).slideDown('slow');
    });
} ());