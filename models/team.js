import mongoose, { Schema } from 'mongoose';

export const teamSchema = new Schema(
	{
		league: String,
		pool: String,
		name: { type: String, index: { unique: true } },
		homeCourse: String,
		address: String,
		captainOne: String,
		captainTwo: String,
		captainThree: String,
		roster: [{ type: Object }],
	},
	{
		timestamps: true,
	}
);

const Team = mongoose.models.Team || mongoose.model('Team', teamSchema);

export default Team;
