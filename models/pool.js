import mongoose, { Schema } from "mongoose";

export const poolSchema = new Schema(
    {
        name: String,
        commissioner: String,
        league: String,
    },
    {
        timestamps: true,
    }
);

const Pool = mongoose.models.Pool || mongoose.model("Pool", poolSchema);

export default Pool;
