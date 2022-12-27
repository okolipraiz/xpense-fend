import { Fragment } from "react";
import Link from "next/link";
import { IoIosSend } from "react-icons/io";

import RenderLineChart from './RenderLineChart'

const AccountCharts = () => { 
    return (
        <Fragment>
            <div className="d-flex justify-content-between align-items-center mt-3">
                <h3>Recent Xpenses</h3>

                <Link href="/dashboard/disbursement-lists">
                    <button className="btn btn-secondary btn-sm text-white">
                        Enter Current Earnings
                    </button>
                </Link>
            </div>

            <div className="px-2 mb-4 coins rounded-3 mt-3">
                <div className="container-fluid py-5">
                    <h5 className="fw-bold">No Monthly Earnings yet</h5>
                    <p className="fs-5">
                        You are yet to carry out any disbursement operations on
                        your account.
                    </p>
                    <div>
                        <button
                            className="btn btn-secondary d-flex align-items-center"
                            type="button"
                        >
                            <IoIosSend className="me-1" />
                            Enter Current Earnings
                        </button>
                    </div>
                </div>
            </div>
            <div className="chart mt-3">
                <RenderLineChart />
            </div>
        </Fragment>
    );
};

export default AccountCharts;
