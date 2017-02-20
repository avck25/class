/* jshint -W098 */
var pcs = (function () {
    /* jshint +W098 */
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

    return function (id) {
        var elem = get(id),
            originalDisplay = 'inline-block';

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
            },
            click: function (callback) {
                elem.addEventListener('click', /*function (event) {
                    callback(event);
                }*/ callback);
                return this;
            },
            hide: function () {
                var od = getCss(elem, 'display');
                if (od === 'none') {
                    return this;
                }

                originalDisplay = od;
                css(elem, 'display', 'none');
                return this;
            },
            show: function () {
                css(elem, 'display', originalDisplay);
                return this;
            }
        };
    };
} ());