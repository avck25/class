(function () {
    "use strict";

    var colors = ['red', 'white', 'blue'];
    var i = 0;

    setInterval(function () {
        document.body.style.color = colors[i];
        if (++i === colors.length) {
            i = 0;
        }
        document.body.style.backgroundColor = colors[i];
    }, 2000);
} ());