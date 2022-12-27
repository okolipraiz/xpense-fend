import DashboardLayout from "../../components/layouts/DashboardLayout";
import Link from "next/link";
import AccountCharts from "../../components/AccountCharts";
import { useGetAccount } from "../../hooks/account";
import { useGetNotes } from "../../hooks/notes";
import { AiFillEdit } from "react-icons/ai";
import { IoIosOpen } from "react-icons/io";
import { VscTrash, VscEdit } from "react-icons/vsc";


const greetingsMessage = () => {
    const hours = new Date().getHours();
    let greetings = "Good Day";

    if (hours < 12) {
        greetings = "👋 Good Morning";
    }

    if (hours >= 12 && hours <= 17) {
        greetings = "⛅ Good Afternoon";
    }

    if (hours >= 17 && hours <= 24) {
        greetings = "🌙 Good Evening";
    }

    return greetings;
};

const Dashboard = () => {
    // const accountId = 1;
    const { data: account } = useGetAccount();
    const { data: notes } = useGetNotes();
    
    return (
        <DashboardLayout>
            <section className="home">
                <div className="d-flex justify-content-between pt-4">
                    <div>
                        <h2>Dashboard</h2>
                        <p>
                            {greetingsMessage()}, Praise!
                        </p>
                    </div>
                    <div className="d-flex justify-content-end">
                        <Link href="/dashboard">
                            <button
                                type="button"
                                className="btn"
                                style={{
                                    height: "32px",
                                    width: "105px",
                                    color: "#fff",
                                    fontSize: "13px",
                                    background: "#245e6b",
                                }}
                            >
                                Add xpense
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="row row-cols-1 g-3 align-items-md-stretch pt-4">
                    <div className="col-md-9">
                        <div className="row row-cols-1 g-3 align-items-md-stretch">
                            <div className="col-md-4">
                                <div className="h-100 p-4 text-white coins rounded-3">
                                    <div className="d-flex pt-2">
                                        <h5 className="currency-name">
                                            Balance
                                        </h5>
                                    </div>
                                    <div className="pt-3">
                                        <div style={{ fontSize: "14px" }}>
                                            Available Balance:
                                            <span className="ms-2">
                                                balance
                                            </span>
                                        </div>
                                        <div
                                            className="text-muted mt-2"
                                            style={{ fontSize: "12px" }}
                                        >
                                            USD Value:
                                            <span className="ms-2">uuw</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="h-100 p-4 text-white coins rounded-3">
                                    <div className="d-flex pt-2">
                                        <h5 className="currency-name">
                                            Savings
                                        </h5>
                                    </div>
                                    <div className="pt-3">
                                        <div style={{ fontSize: "14px" }}>
                                            Available Balance:
                                            <span className="ms-2">
                                                balance
                                            </span>
                                        </div>
                                        <div
                                            className="text-muted mt-2"
                                            style={{ fontSize: "12px" }}
                                        >
                                            USD Value:
                                            <span className="ms-2">uuw</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="h-100 p-4 text-white coins rounded-3">
                                    <div className="d-flex pt-2">
                                        <h5 className="currency-name">
                                            Savings
                                        </h5>
                                    </div>
                                    <div className="pt-3">
                                        <div style={{ fontSize: "14px" }}>
                                            Available Balance:
                                            <span className="ms-2">
                                                balance
                                            </span>
                                        </div>
                                        <div
                                            className="text-muted mt-2"
                                            style={{ fontSize: "12px" }}
                                        >
                                            USD Value:
                                            <span className="ms-2">uuw</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <AccountCharts />
                    </div>

                    <div className="col-md-3">
                        <div className="p-4 text-white coins rounded-3">
                            <div className="d-flex pt-2">
                                <h5 className="currency-name">Budget</h5>
                            </div>
                            <div className="pt-3">
                                <div style={{ fontSize: "14px" }}>
                                    Available Balance:
                                    <span className="ms-2">balance</span>
                                </div>
                                <div
                                    className="text-muted mt-2"
                                    style={{ fontSize: "12px" }}
                                >
                                    USD Value:
                                    <span className="ms-2">uuw</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-1 p-4 text-white coins rounded-3 mb-5">
                            <div className="d-flex justify-content-between pt-2">
                                <h5 className="currency-name">Note</h5>
                                <div>
                                    <button
                                        className="btn btn-secondary btn-sm text-white me-1 mt-1"
                                        data-bs-toggle="modal"
                                    >
                                        <VscEdit className="fs-6" />
                                    </button>

                                    <button className="btn btn-primary btn-sm text-white mt-1">
                                        <IoIosOpen className="fs-6" />
                                    </button>
                                </div>
                            </div>

                            <div
                                className="mt-3"
                                style={{
                                    fontSize: "12px",
                                }}
                            >
                                {notes?.slice(0, 3).map((note, index) => (
                                    <ul
                                        style={{ listStyle: "none",  paddingLeft: "0" }}
                                        key={index}
                                    >
                                        <li>{note.note}</li>
                                    </ul>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </DashboardLayout>
    );
};

export default Dashboard;
