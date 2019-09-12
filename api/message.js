"use strict";
exports.__esModule = true;
exports.data = {};
exports["default"] = (function (req, res) {
    Object.assign(exports.data, req.body);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.json({
        data: exports.data
    });
});
