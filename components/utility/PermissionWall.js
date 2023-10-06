"use client";
import { useSession } from "next-auth/react";

function PermissionWall({ children, ...props }) {
    const { data: session } = useSession();
    if (session) {
        return <div {...props}>{children}</div>;
    }
    return;
}

export default PermissionWall;
