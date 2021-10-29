const Platform = require("../models/Platform.model");
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const createPlatform = async (req, res, next) => {
    try {
        const newPlatform = new Platform();
        newPlatform.name = req.body.name;
        newPlatform.price = req.body.price;
        newPlatform.animes = req.body.animes;
        const PlatformDb = await newPlatform.save();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { platform: PlatformDb }
        })
    } catch (error) {
        return next(error);
    }
}

const getAllPlatforms = async (req, res, next) => {
    try {
        const platforms = await Platform.find().populate("animes");
        return res.json({
            status: 200,
            message: HTTPSTATUSCODE[200],
            data: { platforms: platforms }
        })
    } catch (error) {
        return next(error);
    }
}

module.exports = { createPlatform, getAllPlatforms }