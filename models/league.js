import mongoose, { Schema } from "mongoose";

export const leagueSchema = new Schema(
    {
        name: { type: String, index: { unique: true } },
        region: String,
    },
    {
        timestamps: true,
    }
);

const League = mongoose.models.League || mongoose.model("League", leagueSchema);

export default League;
