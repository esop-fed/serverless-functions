"use strict";
exports.__esModule = true;
var message_1 = require("./message");
console.log(123);
exports["default"] = (function (req, res) {
    res.json({
        data: message_1.data
    });
});
