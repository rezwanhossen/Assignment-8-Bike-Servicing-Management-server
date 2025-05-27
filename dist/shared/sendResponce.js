"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, jsondata) => {
    res.status(jsondata.statusCode).send({
        seccess: jsondata.success,
        message: jsondata.message,
        data: jsondata.data || null || undefined,
    });
};
exports.default = sendResponse;
