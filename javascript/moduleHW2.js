var myApp = myApp || {};

myApp.utils = (function(module){
    "use strict";

    //var somePrivateDataGoesHere;

    module.stringCaseInsensitiveEquals = function (a,b) {
        return a.toUpperCase() === b.toUpperCase();
    };

    return module;
}(myApp.utils || {}));

/*
myApp.utils = myApp.utils || {};
myApp.utils.stringCaseInsensitiveEquals = function(a,b) {
    "use strict";
    return a.toUpperCase() === b.toUpperCase();
};
*/