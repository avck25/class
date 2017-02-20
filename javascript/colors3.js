(function () {
    "use strict";

    function get(id) {
        return window[id];//document.getElementById(id);
    }

    function setCss(elem, prop, value) {
        elem.style[prop] = value;
    }

    var colorInput = get('color'),
        bgColorInput = get('bgcolor');

    get('theForm').addEventListener('submit', function (event) {
        setCss(document.body, 'color', colorInput.value);
        setCss(document.body, 'backgroundColor', bgColorInput.value);

        console.log('your email', get('email').value);

        event.preventDefault();
    });
} ());