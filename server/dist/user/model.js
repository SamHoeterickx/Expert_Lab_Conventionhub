"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
exports.deleteUserById = exports.updateUsernameById = exports.updatePasswordById = exports.registerNewUser = exports.getUserData = exports.isUserNameUnique = exports.findUser = exports.verifyPassword = exports.checkExcistingUser = void 0;
const client_1 = require("@prisma/client");
const bcrypt = __importStar(require("bcrypt"));
const prisma = new client_1.PrismaClient();
const checkExcistingUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = prisma.user.findFirst({
        where: {
            email: email
        }
    });
    return result;
});
exports.checkExcistingUser = checkExcistingUser;
const verifyPassword = (password, hashedPassword) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt.compare(password, hashedPassword);
});
exports.verifyPassword = verifyPassword;
const findUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.user.findUnique({
        where: {
            id: userId
        },
        select: {
            id: true,
            email: true,
            username: true
        }
    });
    return result;
});
exports.findUser = findUser;
const isUserNameUnique = (username) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.user.findUnique({
        where: {
            username: username
        }
    });
    return result;
});
exports.isUserNameUnique = isUserNameUnique;
const getUserData = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.user.findUnique({
        where: {
            id: userId
        },
        select: {
            id: true,
            username: true,
            email: true,
        }
    });
    return result;
});
exports.getUserData = getUserData;
const registerNewUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPassword = yield bcrypt.hash(userData.password, 10);
    const result = yield prisma.user.create({
        data: {
            email: userData.email,
            username: userData.username,
            password: hashedPassword
        },
        select: {
            id: true
        }
    });
    return result;
});
exports.registerNewUser = registerNewUser;
const updatePasswordById = (newPassword, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const newHashedPassword = yield bcrypt.hash(newPassword, 10);
    const result = yield prisma.user.update({
        where: {
            id: userId
        },
        data: {
            password: newHashedPassword
        },
    });
    return result;
});
exports.updatePasswordById = updatePasswordById;
const updateUsernameById = (newUsername, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.user.update({
        where: {
            id: userId
        },
        data: {
            username: newUsername
        },
    });
    return result;
});
exports.updateUsernameById = updateUsernameById;
const deleteUserById = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.user.delete({
        where: {
            id: userId
        }
    });
    return result;
});
exports.deleteUserById = deleteUserById;
