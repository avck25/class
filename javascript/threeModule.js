(function () {
    "use strict";
    
    var theButton = document.getElementById("theButton"),
        theEnableButton = document.getElementById("enableButton"),
        theDiv = document.getElementById("theDiv"),
        theCount = 0;

        function handleClick() {
            theDiv.innerHTML = "I was clicked " + (++theCount) + " times";
        }

        theEnableButton.addEventListener('click', function() {
            theButton.addEventListener('click', handleClick);
        });
}());
