(function(){
    "use strict";

    function addEventHandler(type, elem, callback) {
        /* browser sniffing
        var ie = navigator.userAgent = 'Internet Explorer'; // something like that
        if(ie) {
            elem.attachEvent(type, callback);
        } else {
            elem.addEventListener(type, callback);
        }*/
        if(elem.addEventListener) {
            elem.addEventListener(type, callback);
        } else if (elem.attachEvent) {
            elem.attachEvent(type, callback);
        } else {
            console.log('cant attach listeners in this weird browser');
        }
    }

    var theButton = document.getElementById("it");

    function clickHandler(event) {
        console.log(event);
    }

    addEventHandler('click', theButton, clickHandler);

}());