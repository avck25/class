var pcs = pcs || {};

pcs.tools = (function () {
    "use strict";

    function get(id) {
        return document.getElementById(id);
    }

    function css(elem, property, value) {
        elem.style[property] = value;
    }

    function getCss(elem, property) {
        return getComputedStyle(elem).getPropertyValue(property);
    }

    var speeds = {
        fast: 10,
        medium: 50,
        slow: 100
    };

    function wrap(id) {
        var elem = get(id);

        return {
            css: function (property, value) {
                css(elem, property, value);
                return this;
            },
            getCss: function (property) {
                getCss(elem, property);
                return this;
            },
            pulsate: function (speed) {
                if (typeof speed === 'string') {
                    speed = speeds[speed];
                }
                speed = speed || 10;
                var fontSize = parseInt(getCss(elem, 'font-size')),
                    increments = 1,
                    interval = setInterval(function () {
                        if (increments <= 5 || increments > 15) {
                            fontSize += 5;
                        } else {
                            fontSize -= 5;
                        }

                        css(elem, 'fontSize', fontSize + 'px');

                        if (increments++ === 20) {
                            clearInterval(interval);
                        }
                    }, speed);
                return this;
            }
        };
    }

    return {
        wrap: wrap
    };
} ());