/*global $*/
(function () {
    'use strict';
    var partCollection = [];

    function placeParts() {
        var x = 0,
            y = 0;

        partCollection.forEach(function (part) {
            part.css({ top: y, left: x });

            x += 110;
            if (x >= 330) {
                x = 0;
                y += 110;
            }
        });
    }

    function savePicture() {
        localStorage.parts = JSON.stringify(partCollection.map(function (part) {
            return {
                src: part.find('img').attr('src'),
                x: part.css('left'),
                y: part.css('top')
            };
        }));
    }

    $.getJSON('potato.php', function (parts) {
        var main = $('#main');
        parts.forEach(function (part) {
            partCollection.push($('<div class="part"><img src="images/parts/' + part + '" /></div>')
                .appendTo(main));
        });

        $('.part')
            .draggable({
                stack: '.part',
                stop: savePicture
            })
            .find('img')
            .resizable({
                autoHide: true
            });

        if (localStorage.parts) {
            var oldParts = JSON.parse(localStorage.parts);
            partCollection.forEach(function (part) {
                var src = part.find('img').attr('src'),
                    oldPart = oldParts.find(function (oldPart) {
                        return oldPart.src === src;
                    });
                if (oldPart) {
                    part.css({ top: oldPart.y, left: oldPart.x });
                }
            });
        } else {
            placeParts();
        }
    });
} ());