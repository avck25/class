(function () {
    "use strict";
    
    window.onload = function () {
        var allowLink = false;

        var theButton = document.getElementById("theButton");
        theButton.addEventListener('click', function (event) {
            console.log('Button was clicked!', event);
            allowLink = true;
        });

        var theDiv = document.getElementById("theDiv");
        theDiv.addEventListener('click', function(event) {
            console.log('theDiv', event);
        });

        var buttonOne = document.getElementById("one");
        buttonOne.addEventListener('click', function(event) {
            console.log('buttonOne', event);
            event.stopPropagation();
        });

        var theAnchor = document.getElementById("theAnchor");
        theAnchor.addEventListener('click', function(event) {
            console.log('anchor was clicked');
            if (!allowLink) {
                event.preventDefault();
            }
        });
    };
}());