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
exports.getMyConventions = exports.deleteConvention = exports.getSingleConvention = exports.getRandomConventions = exports.getConventions = exports.createNewConvention = void 0;
const model_1 = require("./model");
const model_2 = require("../user/model");
const createNewConvention = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, category, contentMd } = req.body;
        const authorId = req.signedCookies.session_id;
        const conventionData = { title, description, category, contentMd, authorId };
        if (!title || !description || !contentMd || !authorId || !category) {
            return res.status(401).send({
                status: 401,
                message: 'Missing info'
            });
        }
        ;
        const newConvention = yield (0, model_1.saveConvention)(conventionData);
        if (!newConvention) {
            return res.status(409).send({
                status: 409,
                message: 'Failed to create convention'
            });
        }
        return res.status(201).send({
            status: 201,
            message: 'Convention created successfull',
            data: newConvention
        });
    }
    catch (error) {
        console.error('Error fetching conventions:', error);
        return res.status(500).send({
            status: 500,
            message: error.message
        });
    }
});
exports.createNewConvention = createNewConvention;
const getConventions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allConventions = yield (0, model_1.getAllConventions)();
        if (!allConventions) {
            return res.status(404).send({
                status: 404,
                message: 'No conventions found'
            });
        }
        ;
        return res.status(200).send({
            status: 200,
            message: 'Found conventions successfull',
            data: allConventions
        });
    }
    catch (error) {
        console.error('Error fetching conventions:', error);
        return res.status(500).send({
            status: 500,
            message: error.message
        });
    }
    ;
});
exports.getConventions = getConventions;
const getRandomConventions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { limit: limitQuery, random: randomQuery } = req.query;
        let limitString;
        let randomString;
        if (Array.isArray(limitQuery)) {
            limitString = limitQuery[0];
        }
        else if (typeof limitQuery === 'string') {
            limitString = limitQuery;
        }
        if (Array.isArray(randomQuery)) {
            randomString = randomQuery[0];
        }
        else if (typeof randomQuery === 'string') {
            randomString = randomQuery;
        }
        if (!limitString || !randomString) {
            return res.status(400).send({
                status: 400,
                message: 'Missing required query parameter'
            });
        }
        const limit = parseInt(limitString, 10);
        const random = randomString === 'true';
        if (isNaN(limit)) {
            return res.status(400).send({
                status: 400,
                message: 'Invalid query parameter: limit must be a number'
            });
        }
        const randomConventionsWithLimit = yield (0, model_1.getRandomConvetionsWithLimit)(limit, random);
        return res.status(200).send({
            status: 200,
            message: 'Get random conventions with limit successfull',
            data: randomConventionsWithLimit
        });
    }
    catch (error) {
        console.error('Error fetching random conventions:', error);
        return res.status(500).send({
            status: 500,
            message: error.message
        });
    }
});
exports.getRandomConventions = getRandomConventions;
const getSingleConvention = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const querySlug = req.query.slug;
        if (!querySlug)
            return;
        const slug = querySlug.toString();
        const convention = yield (0, model_1.findConventionBySlug)(slug);
        if (!convention) {
            return res.status(404).send({
                status: 404,
                message: 'Convention not found'
            });
        }
        ;
        return res.status(200).send({
            status: 200,
            message: 'Fetched convention successfull',
            data: convention
        });
    }
    catch (error) {
        console.error('Error fetching convention:', error);
        return res.status(500).send({
            status: 500,
            message: error.message
        });
    }
});
exports.getSingleConvention = getSingleConvention;
const deleteConvention = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { conventionId } = req.body;
        const authorId = req.signedCookies.session_id;
        if (!conventionId || !authorId) {
            return res.status(401).send({
                status: 401,
                message: 'Missing info'
            });
        }
        ;
        const deletedConvention = yield (0, model_1.removeConvention)(conventionId, authorId);
        console.log(deletedConvention);
        return res.status(202).send({
            status: 202,
            message: 'Delete convention successfully'
        });
    }
    catch (error) {
        console.error('Error fetching conventions:', error);
        return res.status(500).send({
            status: 500,
            message: error.message
        });
    }
    ;
});
exports.deleteConvention = deleteConvention;
const getMyConventions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.signedCookies.session_id;
        const excistingUser = yield (0, model_2.findUser)(userId);
        if (!excistingUser) {
            return res.status(404).send({
                status: 404,
                message: "No user found"
            });
        }
        const result = yield (0, model_1.getAllConventionsByUserId)(userId);
        return res.status(201).send({
            status: 201,
            message: 'Found my conventions successfully',
            data: result
        });
    }
    catch (error) {
        console.error('Failed to fetch get my conventions:', error);
        return res.status(500).send({
            status: 500,
            message: error.message
        });
    }
    ;
});
exports.getMyConventions = getMyConventions;
