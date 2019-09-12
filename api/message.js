"use strict";
exports.__esModule = true;
exports.data = {};
exports["default"] = (function (req, res) {
    Object.assign(exports.data, req.body);
    res.json({
        data: exports.data
    });
});
