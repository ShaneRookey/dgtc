import clientPromise from "@/lib/mongodb";
import connectMongoDB from "@/lib/mongoose";
import User from "@/models/user";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";

const THIRTY_DAYS = 30 * 24 * 60 * 60;
const THIRTY_MINUTES = 30 * 60;

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: THIRTY_DAYS,
        updateAge: THIRTY_MINUTES,
    },
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD,
                },
            },
            from: process.env.EMAIL_FROM,
        }),
    ],
    callbacks: {
        async signIn({ user, account, email }) {
            await connectMongoDB();
            const userExists = await User.findOne({
                email: user.email, //the user object has an email property, which contains the email the user entered.
            });
            if (userExists) {
                return true; //if the email exists in the User collection, email them a magic login link
            } else {
                return "/register";
            }
        },
        session: ({ session, token }) => ({
            ...session,
            user: {
                ...session.user,
                id: token.sub,
            },
        }),
    },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
