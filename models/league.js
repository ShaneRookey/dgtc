import mongoose, { Schema } from "mongoose";

const leagueSchema = new Schema(
    {
        name: String,
        region: String,
        teams: [{ type: Schema.Types.ObjectId, ref: "Team" }],
    },
    {
        timestamps: true,
    }
);

const League = mongoose.models.League || mongoose.model("League", leagueSchema);

export default League;
