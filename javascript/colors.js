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

    get('button').addEventListener('click', function () {
        //document.body.style.color = colorInput.value;
        //document.body.style.backgroundColor = bgColorInput.value;
        setCss(document.body, 'color', colorInput.value);
        setCss(document.body, 'backgroundColor', bgColorInput.value);
    });
} ());