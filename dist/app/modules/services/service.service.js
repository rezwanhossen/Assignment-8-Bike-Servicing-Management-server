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
exports.serviceRecordServeics = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createBikeServicer = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.create({
        data,
    });
    return result;
});
const getAllserviceRecord = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.findMany();
    return result;
});
const getserviceRecordById = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.serviceRecord.findUnique({
        where: {
            serviceId,
        },
    });
    return result;
});
const serviceComplete = (serviceId, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId,
        },
    });
    const result = yield prisma_1.default.serviceRecord.update({
        where: {
            serviceId,
        },
        data: {
            completionDate: data.completionDate
                ? new Date(data.completionDate)
                : new Date(),
            status: "done",
        },
    });
    return result;
});
exports.serviceRecordServeics = {
    createBikeServicer,
    getAllserviceRecord,
    getserviceRecordById,
    serviceComplete,
};
