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
exports.getAllConventionsByUserId = exports.removeConvention = exports.getRandomConvetionsWithLimit = exports.saveConvention = exports.findConventionBySlug = exports.getAllConventions = void 0;
const client_1 = require("@prisma/client");
const slugify_1 = __importDefault(require("slugify"));
const crypto_1 = __importDefault(require("crypto"));
const prisma = new client_1.PrismaClient();
const getAllConventions = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.convention.findMany({});
    return result;
});
exports.getAllConventions = getAllConventions;
const findConventionBySlug = (slug) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.convention.findUnique({
        where: {
            slug
        },
        include: {
            likes: true,
            author: {
                select: {
                    id: true,
                    username: true
                }
            }
        }
    });
    return result;
});
exports.findConventionBySlug = findConventionBySlug;
const saveConvention = (conventionData) => __awaiter(void 0, void 0, void 0, function* () {
    const slug = generateSlug(conventionData.title);
    const result = yield prisma.convention.create({
        data: {
            title: conventionData.title,
            category: conventionData.category,
            description: conventionData.description,
            slug: slug,
            contentMd: conventionData.contentMd,
            authorId: conventionData.authorId
        }
    });
    return result;
});
exports.saveConvention = saveConvention;
const getRandomConvetionsWithLimit = (limit, random) => __awaiter(void 0, void 0, void 0, function* () {
    const orderByClause = random ? client_1.Prisma.sql `ORDER BY RANDOM()` : client_1.Prisma.empty;
    const conventions = yield prisma.$queryRaw(client_1.Prisma.sql `SELECT * FROM "Convention" ${orderByClause} LIMIT ${limit}`);
    return conventions;
});
exports.getRandomConvetionsWithLimit = getRandomConvetionsWithLimit;
const removeConvention = (conventionId, authorId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.convention.delete({
        where: {
            id: conventionId,
            authorId: authorId
        }
    });
    return result;
});
exports.removeConvention = removeConvention;
const getAllConventionsByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.convention.findMany({
        where: {
            authorId: userId
        },
    });
    return result;
});
exports.getAllConventionsByUserId = getAllConventionsByUserId;
const generateSlug = (title) => {
    const baseSlug = (0, slugify_1.default)(title);
    const randomSuffix = crypto_1.default.randomBytes(6).toString('hex');
    const slug = `${baseSlug}-${randomSuffix}`;
    return slug;
};
