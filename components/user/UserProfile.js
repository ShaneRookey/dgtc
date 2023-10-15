import { getUserByUserId } from "@/lib/utils";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/Card";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";

export default async function UserProfile({ user_id }) {
    const { user } = await getUserByUserId(user_id);
    return (
        <Card className="m-5 w-fit">
            <CardHeader>
                <CardTitle className="p-5">My Account</CardTitle>
            </CardHeader>
            <CardContent>
                <Label>Name:</Label>
                <Input
                    readOnly
                    value={user.firstName + " " + user.lastName}
                ></Input>
                <Label>Email:</Label>
                <Input readOnly value={user.email}></Input>
                <Label>ID:</Label>
                <Input readOnly value={user._id}></Input>
                <Label>Updated at:</Label>
                <Input readOnly value={user.updatedAt}></Input>
                <Label>Team:</Label>
                <Input readOnly value={user.team}></Input>
                <Label>Permissions:</Label>
                <Input readOnly value={user.permissions}></Input>
            </CardContent>
            <CardFooter>
                Contact support@dgtc.app if you need to edit your email
            </CardFooter>
        </Card>
    );
}
