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
exports.getMyLikedConventions = exports.removeLike = exports.like = exports.getLikeStatus = void 0;
const model_1 = require("./model");
const model_2 = require("../user/model");
const getLikeStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { conventionId } = req.query;
        const userId = req.signedCookies.session_id;
        if (!conventionId) {
            return res.status(401).send({
                status: 401,
                message: 'Missing info'
            });
        }
        ;
        if (!userId) {
            return res.status(200).send({
                status: 200,
                message: 'No user id',
                data: {
                    likeStatus: false
                }
            });
        }
        const likeData = {
            conventionId: conventionId.toString(),
            userId
        };
        console.log(likeData);
        const likeStatus = yield (0, model_1.getLikeStatusOfConvetionWithId)(likeData);
        if (!likeStatus) {
            return res.status(200).send({
                status: 200,
                message: 'Successfull getting likeStatus',
                data: {
                    likeStatus: false
                }
            });
        }
        ;
        return res.status(200).send({
            status: 200,
            message: 'Successfull getting likeStatus',
            data: {
                likeStatus: true
            }
        });
    }
    catch (error) {
        console.error('Error fetching get like status:', error);
        return res.status(500).send({
            status: 500,
            message: error.message
        });
    }
    ;
});
exports.getLikeStatus = getLikeStatus;
const like = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { conventionId } = req.body;
        const userId = req.signedCookies.session_id;
        if (!conventionId) {
            return res.status(401).send({
                status: 401,
                message: 'Missing info'
            });
        }
        ;
        if (!userId) {
            return res.status(401).send({
                status: 401,
                message: 'Login required'
            });
        }
        ;
        const likeData = {
            conventionId,
            userId
        };
        const excistingLike = yield (0, model_1.checkIfLikeExcist)(likeData);
        if (excistingLike) {
            return res.status(400).send({
                status: 400,
                message: "You've already liked this convention"
            });
        }
        const result = yield (0, model_1.likeConventionWithId)(likeData);
        return res.status(201).send({
            status: 201,
            message: 'Successfully liked convention',
            data: {
                result
            }
        });
    }
    catch (error) {
        console.error('Failed to fetch like:', error);
        return res.status(500).send({
            status: 500,
            message: error.message
        });
    }
    ;
});
exports.like = like;
const removeLike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { conventionId } = req.body;
        const userId = req.signedCookies.session_id;
        if (!conventionId || !userId) {
            return res.status(401).send({
                status: 401,
                message: 'Missing info'
            });
        }
        ;
        const likeData = {
            conventionId,
            userId
        };
        const excistingLike = yield (0, model_1.checkIfLikeExcist)(likeData);
        if (!excistingLike) {
            return res.status(400).send({
                status: 400,
                message: "You've not liked this convention yet"
            });
        }
        const result = yield (0, model_1.removeLikeConventionWithId)(likeData);
        return res.status(201).send({
            status: 201,
            message: 'Successfully removed liked convention',
            data: {
                result
            }
        });
    }
    catch (error) {
        console.error('Failed to fetch remove like:', error);
        return res.status(500).send({
            status: 500,
            message: error.message
        });
    }
    ;
});
exports.removeLike = removeLike;
const getMyLikedConventions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.signedCookies.session_id;
        const excistingUser = yield (0, model_2.findUser)(userId);
        if (!excistingUser) {
            return res.status(404).send({
                status: 404,
                message: "No user found"
            });
        }
        const result = yield (0, model_1.getAllLikedConventionsByUserId)(userId);
        return res.status(201).send({
            status: 201,
            message: 'Found my liked conventions successfully',
            data: result
        });
    }
    catch (error) {
        console.error('Failed to fetch get my liked conventions:', error);
        return res.status(500).send({
            status: 500,
            message: error.message
        });
    }
    ;
});
exports.getMyLikedConventions = getMyLikedConventions;
