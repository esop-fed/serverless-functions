"use strict";
exports.__esModule = true;
var message_1 = require("./message");
exports["default"] = (function (req, res) {
    res.json({
        data: message_1.data
    });
});
