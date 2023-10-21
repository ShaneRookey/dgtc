import mongoose, { Schema } from "mongoose";

export const userSchema = new Schema(
    {
        email: { type: String, index: { unique: true } },
        firstName: String,
        lastName: String
    },
    {
        timestamps: true,
    }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
