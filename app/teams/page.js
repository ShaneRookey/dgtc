function TeamsViewer() {
    return (
        <div className="flex flex-col h-screen p-5">
            <Button asChild>
                <Link href={"/teams/addteam"}>Add League</Link>
            </Button>
            <TeamsViewer />
        </div>
    );
}

export default TeamsViewer;
