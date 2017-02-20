var pcs = pcs || {};

pcs.messagebox = (function () {
    "use strict";

    function createElement(type) {
        return document.createElement(type);
    }

    var modalBackground = document.createElement('div');
    modalBackground.style.position = 'absolute';
    modalBackground.style.top = '0';
    modalBackground.style.left = '0';
    modalBackground.style.width = '100%';
    modalBackground.style.height = '100%';
    modalBackground.style.backgroundColor = 'lightgray';
    modalBackground.style.opacity = '.5';
    modalBackground.style.display = 'none';
    modalBackground.style.zIndex = '20000';
    document.body.appendChild(modalBackground);

    var width = 220,
        height = 109,
        xOffset = -110,
        yOffset = -54,
        step = 40,
        zIndex = 19999;

    return {
        show: function (message, modal, buttons, callback) {
            buttons = buttons || ['OK'];

            var div = createElement('div'),
                span = createElement('span'),
                buttonDiv = createElement('div');

            div.style.position = 'absolute';
            div.style.boxSizing = 'border-box';
            div.style.border = '1px solid black';
            div.style.padding = '4px';
            div.style.width = width + 'px';
            div.style.height = height + 'px';
            div.style.backgroundColor = 'lightblue';
            div.style.marginLeft = (modal ? -110 : xOffset) + 'px';
            div.style.marginTop = (modal ? -54 : yOffset) + 'px';
            div.style.top = '50%';
            div.style.left = '50%';
            div.style.zIndex = zIndex++;

            buttonDiv.style.textAlign = 'center';
            buttonDiv.style.position = 'absolute';
            buttonDiv.style.bottom = '6px';
            buttonDiv.style.width = '100%';

            span.innerHTML = message;

            // Function in a loop with var - broken
            var i;
            for (i = 0; i < buttons.length; i++) {
                var button = createElement('button');
                button.innerHTML = buttons[i];
                buttonDiv.appendChild(button);
                console.log(buttons[i]);
                button.addEventListener('click', function () {
                    document.body.removeChild(div);
                    modalBackground.style.display = 'none';
                    if (callback) {
                        console.log('i', i);
                        callback(buttons[i]);
                    }
                });
            }

            /* Let - block scope, different i for each closure
            for (let i = 0; i < buttons.length; i++) {
                var button = createElement('button');
                button.innerHTML = buttons[i];
                buttonDiv.appendChild(button);
                button.addEventListener('click', function () {
                    document.body.removeChild(div);
                    modalBackground.style.display = 'none';
                    if (callback) {
                        console.log('i', i);
                        callback(buttons[i]);
                    }
                });
            }*/

            /* ForEach - each callback gets own scope
            buttons.forEach(function (elem, i) {
                var button = createElement('button');
                button.innerHTML = elem;
                buttonDiv.appendChild(button);
                button.addEventListener('click', function () {
                    document.body.removeChild(div);
                    modalBackground.style.display = 'none';
                    if (callback) {
                        console.log('i', i);
                        callback(elem);
                    }
                });
            });*/

            /* Create buttonHandler factory function - each closure gets its own scope
            function getButtonCallback(i) {
                return function () {
                    document.body.removeChild(div);
                    modalBackground.style.display = 'none';
                    if (callback) {
                        console.log('i', i);
                        callback(buttons[i]);
                    }
                };
            }

            var i;
            for (i = 0; i < buttons.length; i++) {
                var button = createElement('button');
                button.innerHTML = buttons[i];
                buttonDiv.appendChild(button);
                button.addEventListener('click', getButtonCallback(i));
            }*/

            /* Same as above but self invoked function instead of a separate function
            var i;
            for (i = 0; i < buttons.length; i++) {
                var button = createElement('button');
                button.innerHTML = buttons[i];
                buttonDiv.appendChild(button);
                button.addEventListener('click',
                    (function (x) {
                        return function () {
                            document.body.removeChild(div);
                            modalBackground.style.display = 'none';
                            if (callback) {
                                console.log('x', x);
                                callback(buttons[x]);
                            }
                        };
                    } (i))
                );
            }*/

            div.appendChild(span);
            div.appendChild(buttonDiv);
            document.body.appendChild(div);

            if (modal) {
                modalBackground.style.zIndex = zIndex++;
                div.style.zIndex = zIndex++;
                modalBackground.style.display = 'inline-block';
            }

            xOffset += step;
            yOffset += step;

            //could just use window.innerWidth / 2
            var left = parseInt(getComputedStyle(div).getPropertyValue('left'));
            // could just use window.innerHeight / 2
            var top = parseInt(getComputedStyle(div).getPropertyValue('top'));

            if (left + xOffset + width > window.innerWidth) {
                xOffset = -window.innerWidth / 2;
            }
            if (top + yOffset + height > window.innerHeight) {
                yOffset = -window.innerHeight / 2;
            }

            div.addEventListener('click', function () {
                div.style.zIndex = zIndex++;
            });
        }
    };
} ());
