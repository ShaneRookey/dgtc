import mongoose, { Schema } from "mongoose";

const teamSchema = new Schema(
    {
        name: String,
        homeCourse: String,
        address: String,
        captainOne: String,
        captainTwo: String,
        captainThree: String,
        pool: String,
    },
    {
        timestamps: true,
    }
);

const Team = mongoose.models.Team || mongoose.model("Team", teamSchema);

export default Team;
