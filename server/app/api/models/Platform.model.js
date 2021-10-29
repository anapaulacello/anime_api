const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlatformSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    animes: [{ type: Schema.Types.ObjectId, ref: "anime", required: true }]
});

const Platform = mongoose.model("platform", PlatformSchema);
module.exports = Platform;