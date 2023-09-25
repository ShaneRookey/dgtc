import { Button } from "@/components/ui/Button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import Image from "next/image";
import Link from "next/link";

export default async function Welcome() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col items-center">
                <Image
                    priority
                    src={"/dgtclogo.png"}
                    height={400}
                    width={500}
                    alt="logo"
                />
            </div>
            <div className="flex flex-row justify-center gap-4 p-5">
                <Card className="w-1/4 h-1/2">
                    <CardHeader>About</CardHeader>
                    <CardContent>
                        <Image
                            className="w-full"
                            src={"/huddle.jpg"}
                            width={500}
                            height={500}
                            alt="huddle"
                        />
                        <Label>
                            Every winter, hundreds of disc golfers across New
                            England participate in a winter long team
                            competition...
                        </Label>
                    </CardContent>
                    <CardFooter className="">
                        <Button variant="link" asChild>
                            <Link
                                href="https://discgolf.ultiworld.com/2019/04/08/new-england-team-challenge-brief-history/"
                                target="_blank"
                            >
                                Read New England Team Challenge
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
                <Card className="w-1/4 h1/2">
                    <CardHeader>Leagues</CardHeader>
                    <CardContent>
                        <Image
                            className="w-full"
                            src={"/team.jpg"}
                            width={500}
                            height={500}
                            alt="huddle"
                        />
                        <Label>View the Leagues for the current season</Label>
                    </CardContent>
                    <CardFooter>
                        <Button variant="link" asChild>
                            <Link href="/leagues">View Leagues here</Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
