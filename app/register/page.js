"use client";
import { createNewUser } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = ({ onToggleView }) => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!firstName || !lastName || !email) {
            let warning = `Missing: ${firstName ? "" : "\nFirst Name"} ${
                lastName ? "" : "\nLast Name"
            } ${email ? undefined : "\nEmail"}`;
            alert(warning);
            return;
        }

        createNewUser(firstName, lastName, email).then((res) => {
            alert(res.message);
            router.refresh();
        });
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold mb-4">Register</h2>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="firstName"
                >
                    First Name
                </label>
                <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-white focus:shadow-outline"
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="lastName"
                >
                    Last Name
                </label>
                <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-white focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                >
                    Email
                </label>
                <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-white focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-white focus:shadow-outline"
                type="button"
                onClick={handleRegister}
            >
                Register
            </button>
            <p className="mt-4 text-center">
                Already have an account?{" "}
                <a href="/api/auth/signin">Log in here.</a>
            </p>
        </div>
    );
};

export default Register;
