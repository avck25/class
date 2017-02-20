var app = app || {};

app.ui = (function(ui) {
    "use strict";

    ui.uiFunction = function() {
        console.log("Im a UI function");
    };

    return ui;
}(app.ui || {}));

app.utils = (function(utils) {
    "use strict";

    utils.utilFunction = function() {
        console.log("Im a util function");
    };

    return utils;
}(app.utils || {}));

app.ui.uiFunction();
app.utils.utilFunction();


