import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { alertService } from "@/lib/alertService";
import { Button } from "./ui/Button";

export { Alert };

function Alert() {
    const router = useRouter();
    const [alert, setAlert] = useState(null);

    useEffect(() => {
        // subscribe to new alert notifications
        const subscription = alertService.alert.subscribe((alert) =>
            setAlert(alert)
        );

        // unsubscribe when the component unmounts
        return () => subscription.unsubscribe();
    }, []);

    useEffect(() => {
        // clear alert on location change
        alertService.clear();
    }, [router]);

    if (!alert) return null;

    return (
        <div className="container">
            <div>
                <div className={`alert alert-dismissible ${alert.type}`}>
                    {alert.message}
                    <Button
                        type="button"
                        className="btn-close"
                        onClick={() => alertService.clear()}
                    ></Button>
                </div>
            </div>
        </div>
    );
}
