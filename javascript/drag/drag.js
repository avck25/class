/*global $*/
(function () {
    'use strict';
    var dragging,
        offset,
        body = $('body'),
        highestZindex = 0,
        colorInput = $('#color');

    $(document).on('mousedown', '.draggable', function (event) {
        //$('.draggable').mousedown(function (event) {
        dragging = $(this);
        dragging.addClass('dragging');
        dragging.css('zIndex', ++highestZindex);
        offset = { top: event.offsetY, left: event.offsetX };
    }).on('mouseup', '.draggable', function (event) {
        //}).mouseup(function (event) {
        dragging.removeClass('dragging');
        dragging = null;
    }).on('dblclick', '.draggable', function () {
        $(this).remove();
    });

    $(document).mousemove(function (event) {
        if (dragging) {
            dragging.css({ top: event.clientY - offset.top, left: event.clientX - offset.left })
        }
    });

    $('#addBox').click(function () {
        $('<div class="box draggable"></div>').appendTo(body).css('backgroundColor', colorInput.val());
    });
} ());