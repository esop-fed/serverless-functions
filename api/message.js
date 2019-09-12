"use strict";
exports.__esModule = true;
var utils_1 = require("./utils");
var data = {};
exports["default"] = (function (req, res) {
    utils_1.setCors(res);
    if (req.method === 'POST') {
        for (var id in req.body) {
            data[id] = req.body[id];
        }
        return res.send(200);
    }
    if (req.method === 'GET') {
        return res.json({
            data: data
        });
    }
    res.sendStatus(400);
});
