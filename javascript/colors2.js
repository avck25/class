(function () {
    "use strict";

    function get(id) {
        return window[id];//document.getElementById(id);
    }

    function setCss(elem, prop, value) {
        elem.style[prop] = value;
    }

    var colorInput = get('color'),
        bgColorInput = get('bgcolor'),
        someText = get('someText');

    colorInput.addEventListener('input', function () {
        setCss(document.body, 'color', colorInput.value);
    });

    bgColorInput.addEventListener('input', function () {
        setCss(document.body, 'backgroundColor', bgColorInput.value);
    });

    someText.addEventListener('input', function () {
        console.log('input', someText.value);
    });

    someText.addEventListener('change', function () {
        console.log('change', someText.value);
    });
} ());