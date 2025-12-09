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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllLikedConventionsByUserId = exports.removeLikeConventionWithId = exports.likeConventionWithId = exports.checkIfLikeExcist = exports.getLikeStatusOfConvetionWithId = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({ log: ['query'] });
const getLikeStatusOfConvetionWithId = (likeData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.like.findFirst({
        where: {
            conventionId: likeData.conventionId,
            userId: likeData.userId
        },
    });
    return result;
});
exports.getLikeStatusOfConvetionWithId = getLikeStatusOfConvetionWithId;
const checkIfLikeExcist = (likeData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.like.findFirst({
        where: {
            userId: likeData.userId,
            conventionId: likeData.conventionId
        }
    });
    return result;
});
exports.checkIfLikeExcist = checkIfLikeExcist;
const likeConventionWithId = (likeData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.like.create({
        data: {
            userId: likeData.userId,
            conventionId: likeData.conventionId
        }
    });
    return result;
});
exports.likeConventionWithId = likeConventionWithId;
const removeLikeConventionWithId = (likeData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.like.delete({
        where: {
            userId_conventionId: {
                conventionId: likeData.conventionId,
                userId: likeData.userId
            }
        }
    });
    return result;
});
exports.removeLikeConventionWithId = removeLikeConventionWithId;
const getAllLikedConventionsByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.like.findMany({
        where: {
            userId: userId
        },
        select: {
            convention: true
        }
    });
    return result;
});
exports.getAllLikedConventionsByUserId = getAllLikedConventionsByUserId;
