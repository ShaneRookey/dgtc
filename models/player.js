import mongoose, { Schema } from 'mongoose';

export const playerSchema = new Schema(
	{
		firstName: String,
		lastName: String,
		team: String,
	},
	{
		timestamps: true,
	}
);

const Player = mongoose.models.Player || mongoose.model('Player', playerSchema);

export default Player;
