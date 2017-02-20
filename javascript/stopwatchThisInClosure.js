var pcs = pcs || {};

pcs.stopwatch = (function () {
    "use strict";

    var //ticks = 0,
        interval,
        div = document.createElement('div'),
        span = document.createElement('span'),
        buttonDiv = document.createElement('div'),
        toggleButton = document.createElement('button'),
        resetButton = document.createElement('button');

    toggleButton.innerHTML = 'Start';
    resetButton.innerHTML = 'Reset';

    div.className = 'stopwatch';
    buttonDiv.className = 'buttons';

    div.appendChild(span);
    buttonDiv.appendChild(toggleButton);
    buttonDiv.appendChild(resetButton);
    div.appendChild(buttonDiv);

    document.body.appendChild(div);

    updateDisplay(0);

    function padLeft(paddee, padder, length) {
        var result = paddee.toString();
        while (result.length < length) {
            result = padder + result;
        }
        return result;
    }

    function ensureTwoDigits(num) {
        return padLeft(num, '0', 2);
    }

    function updateDisplay(ticks) {
        var hundredths = ticks % 100,
            seconds = Math.floor(ticks / 100) % 60,
            minutes = Math.floor(ticks / 6000) % 60,
            hours = Math.floor(ticks / 360000);

        span.innerHTML = hours + ':' + ensureTwoDigits(minutes) + ':' +
            ensureTwoDigits(seconds) + ':' + ensureTwoDigits(hundredths);
    }

    return {
        toggle: function () {
            (function (that) {
                console.log('in self invoked function', this, that);
            } (this));
            console.log(this);
            if (interval) {
                clearInterval(interval);
            } else {
                var that = this;
                interval = setInterval(function () {
                    console.log(that);
                    that.ticks++;
                    updateDisplay(that.ticks);
                }, 10);
            }
        },
        ticks: 0/*function () {
            return ticks;
        }*/,
        reset: function () { }
    };
} ());
