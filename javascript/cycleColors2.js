(function () {
    "use strict";

    var r = 0,
        g = 0,
        b = 0,
        increment = 24,
        animationInterval,
        controlButton = document.getElementById("control");

    controlButton.addEventListener('click', function () {
        if (animationInterval) {
            clearInterval(animationInterval);
            controlButton.innerHTML = "Start";
            animationInterval = null;
        } else {
            startAnimation();
            controlButton.innerHTML = "Stop";
        }
    });

    function startAnimation() {
        animationInterval = setInterval(function () {
            r += increment;
            if (r > 255) {
                r = 0;
                g += increment / 2;
            }
            if (g > 255) {
                g = 0;
                b += increment / 3;
            }
            if (b > 255) {
                b = 0;
            }
            document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

            console.log(document.body.style.backgroundColor);
        }, 2000);
    }
} ());