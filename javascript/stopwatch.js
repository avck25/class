var pcs = pcs || {};

pcs.tools = (function () {
    "use strict";

    // private stuff here
    var privateSharedData = 0;


    return {
        // other pcs.tools functions
        stopwatch: function (parent) {
            privateSharedData++;

            parent = parent || document.body;

            var ticks = 0,
                interval,
                div = document.createElement('div'),
                span = document.createElement('span'),
                buttonDiv = document.createElement('div'),
                toggleButton = document.createElement('button'),
                resetButton = document.createElement('button');

            function setToggleButtonText() {
                toggleButton.innerHTML = interval ? 'Stop' : 'Start';
            }

            function toggle() {
                if (interval) {
                    clearInterval(interval);
                    interval = null;
                } else {
                    interval = setInterval(function () {
                        ticks++;
                        updateDisplay();
                    }, 10);
                }
                setToggleButtonText();
            }

            function reset() {
                ticks = 0;
                updateDisplay();
            }

            resetButton.innerHTML = 'Reset';

            toggleButton.addEventListener('click', function () {
                toggle();
            });

            resetButton.addEventListener('click', function () {
                reset();
            });

            div.className = 'stopwatch';
            buttonDiv.className = 'buttons';

            div.appendChild(span);
            buttonDiv.appendChild(toggleButton);
            buttonDiv.appendChild(resetButton);
            div.appendChild(buttonDiv);

            parent.appendChild(div);

            updateDisplay();
            setToggleButtonText();

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

            function updateDisplay() {
                var hundredths = ticks % 100,
                    seconds = Math.floor(ticks / 100) % 60,
                    minutes = Math.floor(ticks / 6000) % 60,
                    hours = Math.floor(ticks / 360000);

                span.innerHTML = hours + ':' + ensureTwoDigits(minutes) + ':' +
                    ensureTwoDigits(seconds) + ':' + ensureTwoDigits(hundredths);
            }

            return {
                toggle: function () {
                    console.log('privateSharedData', privateSharedData);
                    toggle();
                },
                ticks: function () {
                    return ticks;
                },
                reset: reset
            };
        }
    };
} ());
//(document.getElementById('stopwatchDiv'))); // would really be passed in by caller when we make it so that you can create multiple stopwatches
