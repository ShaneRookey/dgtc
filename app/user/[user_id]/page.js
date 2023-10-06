import UserProfile from "@/components/user/UserProfile";

function UserView({ params }) {
    const { user_id } = params;
    return <UserProfile user_id={user_id} />;
}

export default UserView;
