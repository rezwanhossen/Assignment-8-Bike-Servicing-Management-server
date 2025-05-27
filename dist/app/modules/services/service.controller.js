"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceRecordControllers = void 0;
const service_service_1 = require("./service.service");
const sendResponce_1 = __importDefault(require("../../../shared/sendResponce"));
const http_status_1 = __importDefault(require("http-status"));
const createBikeService = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service_service_1.serviceRecordServeics.createBikeServicer(req.body);
        (0, sendResponce_1.default)(res, {
            statusCode: http_status_1.default.CREATED,
            success: true,
            message: "Service record created successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const getAllServiceRecord = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service_service_1.serviceRecordServeics.getAllserviceRecord();
        (0, sendResponce_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Service records fetched successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const getServiceRecordById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { serviceId } = req.params;
    try {
        const result = yield service_service_1.serviceRecordServeics.getserviceRecordById(serviceId);
        (0, sendResponce_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Service record fetched by id successfully",
            data: result,
        });
    }
    catch (err) {
        next;
    }
});
const ServiceRecordComplete = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { serviceId } = req.params;
    try {
        const result = yield service_service_1.serviceRecordServeics.serviceComplete(serviceId, req.body);
        (0, sendResponce_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Service marked as completed",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.serviceRecordControllers = {
    createBikeService,
    getAllServiceRecord,
    getServiceRecordById,
    ServiceRecordComplete,
};
