(function() {
    "use strict";

    function get(id) {
        return document.getElementById(id);
    }

    var it = get("it");
    /*it.style.backgroundColor = 'blue';
    it.style.color = 'yellow';
    it.style.padding = '6px';
    it.style.display = 'inline-block';
    it.style.border = '1px solid black';*/

    var i = 20;
    /*for (i = 0; i < 200; i++) {
        it.style.top = i + 'px';
    }*/

    function moveIt() {
        it.style.top = (i += 10) + 'px';
        //setTimeout(moveIt, 250);
    }

    var theIntervalId,
        //isRunning = false,
        theButton = get("theButton");

    theButton.addEventListener('click', function () {
        //moveIt();
        if (theButton.innerHTML === 'Start') {//!isRunning) {
            theIntervalId = setInterval(moveIt, 250);
            theButton.innerHTML = 'Stop';
            //isRunning = true;
        } else {
            clearInterval(theIntervalId);
            theButton.innerHTML = 'Start';
            //isRunning = false;
        }
    });

    //setTimeout(moveIt, 250);
    setTimeout(function() { i = 0; }, 5000);
}());