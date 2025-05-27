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
exports.customerComtrollers = void 0;
const customer_service_1 = require("./customer.service");
const sendResponce_1 = __importDefault(require("../../../shared/sendResponce"));
const http_status_1 = __importDefault(require("http-status"));
const createCustomer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield customer_service_1.customersServices.creatCustomer(req.body);
        (0, sendResponce_1.default)(res, {
            statusCode: http_status_1.default.CREATED,
            success: true,
            message: "Customer created successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const getAllCustomer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield customer_service_1.customersServices.getAllCustomer();
        (0, sendResponce_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Customer fetched successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const getCustomerById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { customerId } = req.params;
    try {
        const result = yield customer_service_1.customersServices.getCustomerByID(customerId);
        (0, sendResponce_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Customer fetched successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const customerUpadteById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { customerId } = req.params;
    try {
        const result = yield customer_service_1.customersServices.customerUpdateById(customerId, req.body);
        (0, sendResponce_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Customer updated successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const customerDeletedById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { customerId } = req.params;
    try {
        const result = yield customer_service_1.customersServices.customerDeletedByID(customerId);
        (0, sendResponce_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Customers deleted successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.customerComtrollers = {
    createCustomer,
    getAllCustomer,
    getCustomerById,
    customerUpadteById,
    customerDeletedById,
};
