/*global $*/

$(function () {
    'use strict';

    var textElement = $('#theText'),
        spinner = $('.spinner'),
        fileName = $('#file');

    $('#load').click(function () {
        spinner.show();
        console.log('start ajax get');
        setTimeout(function () { // artificial wait so we can see our spinner
            $.get(fileName.val(),
                /*'https://www.google.com'*/
                /*'http://localhost/class/javascript/ajaxText.html'*/
                function (loadedText) {
                    console.log('ajax get success');
                    textElement.text(loadedText);
                }).fail(function (jqXhr) {
                    console.log('ajax get fail');
                    textElement.text('OOPS: ' + jqXhr.statusText);
                }).always(function () {
                    console.log('ajax get always');
                    spinner.hide();
                });
            console.log('after ajax get');
        }, 2000);
    });
});