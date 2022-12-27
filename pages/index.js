/* eslint-disable @next/next/no-page-custom-font */
import Link from "next/link";

export default function Home() {
    return (
        <div className="pt-5 text-muted">
            <h1>Please route to the next page</h1>
            <Link href="/auth/login">
                <button className="btn btn-primary ms-1">Dashboard</button>
            </Link>
        </div>
    );
}
