import { createContext, Fragment, useState, useEffect } from "react";
import { useSession, getSession, signIn, signOut } from "next-auth/react";
import { MdOutlineDashboard } from "react-icons/md";
import { GiHamburgerMenu, GiReceiveMoney } from "react-icons/gi";
import {IoMdSettings} from "react-icons/io";
import { GoSignOut } from "react-icons/go";
import {IoPieChartSharp} from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGetAccount } from "../../hooks/account";
import Login from '../../pages/auth/login'


export const ThemeContext = createContext(null);

const DashboardLayout = ({ children }) => {
    const { route } = useRouter();
    const { data: account } = useGetAccount();
    const { data: session, status } = useSession();
    // console.log(session)
    
     const [navbarState, setNavbarState] = useState(false);
     const handleClick = () => {
         setNavbarState(false);
     };
   
    const [theme, setTheme] = useState("light");

     useEffect(() => {
         const getTheme = () => {
             return window.localStorage.getItem("theme", theme);
         };
         setTheme(getTheme());
     }, [theme]);

     const toggleTheme = () => {
         let newTheme = localStorage.getItem("theme") === "light" ? "dark" : "light";
         setTheme(newTheme);
         localStorage.setItem("theme", newTheme);
     };

   

    if (status === "unauthenticated") { 
        return (
            <>
                {/* <p>Go to home page</p>
                <Link href="/auth/login">
                    <a>
                        <button>Kindly go back</button>
                    </a>
                </Link> */}
                <Login />
            </>
        );
    }

    if(session){
        return (
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <Fragment>
                    <div className="dashboard-container" id={theme}>
                        <div className="top">
                            <div className="toggle">
                                {navbarState ? (
                                    <VscChromeClose
                                        onClick={() => handleClick()}
                                    />
                                ) : (
                                    <GiHamburgerMenu
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setNavbarState(true);
                                        }}
                                    />
                                )}
                            </div>
                        </div>

                        <aside className="side-bar">
                            <div className="container">
                                <div className="side-bar-wrapper ">
                                    <div className="side-bar-menu">
                                        <h6 className="side-bar-title">
                                            Xpense
                                        </h6>
                                        <span style={{ fontSize: "12px" }}>
                                            {session.user.name}
                                        </span>
                                        <ul className="side-bar-list">
                                            <Link href="/dashboard">
                                                <a>
                                                    <li
                                                        className={
                                                            route ===
                                                            "/dashboard"
                                                                ? "active"
                                                                : ""
                                                        }
                                                    >
                                                        <MdOutlineDashboard size="17" />{" "}
                                                        <span className="mx-2">
                                                            Home
                                                        </span>
                                                    </li>
                                                </a>
                                            </Link>
                                            <Link href="/dashboard/earn">
                                                <a>
                                                    <li
                                                        className={
                                                            route ===
                                                            "/dashboard/earn"
                                                                ? "active"
                                                                : ""
                                                        }
                                                    >
                                                        <GiReceiveMoney size="17" />
                                                        <span className="mx-2">
                                                            Earn
                                                        </span>
                                                    </li>
                                                </a>
                                            </Link>
                                            <Link href="/dashboard/budget">
                                                <a>
                                                    <li
                                                        className={
                                                            route ===
                                                            "/dashboard/budget"
                                                                ? "active"
                                                                : ""
                                                        }
                                                    >
                                                        <IoPieChartSharp size="17" />
                                                        <span className="mx-2">
                                                            Budget
                                                        </span>
                                                    </li>
                                                </a>
                                            </Link>
                                            <Link href="/dashboard/settings">
                                                <a>
                                                    <li
                                                        className={
                                                            route ===
                                                            "/dashboard/settings"
                                                                ? "active"
                                                                : ""
                                                        }
                                                    >
                                                        <IoMdSettings size="17" />
                                                        <span className="mx-2">
                                                            Settings
                                                        </span>
                                                    </li>
                                                </a>
                                            </Link>
                                        </ul>
                                    </div>

                                    <ul className="side-bar-list">
                                        <li
                                            id="logout"
                                            className={
                                                route === "/dashboard/logout"
                                                    ? "active"
                                                    : ""
                                            }
                                        >
                                            <GoSignOut size="17" />
                                            <span
                                                className="mx-2"
                                                onClick={() => signOut()}
                                            >
                                                Logout
                                            </span>
                                        </li>

                                        <li className="switch">
                                            <div className="form-check form-switch">
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="flexSwitchCheckDefault"
                                                >
                                                    {theme === "light"
                                                        ? "⛅"
                                                        : "🌙"}
                                                </label>
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    role="switch"
                                                    id="flexSwitchCheckDefault"
                                                    onChange={toggleTheme}
                                                    checked={theme === "dark"}
                                                />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </aside>

                        <div
                            id="responsive-nav"
                            className={navbarState ? "show" : "hide"}
                        >
                            <div className="side-bar-menu">
                                <h6 className="side-bar-title">Xpense</h6>
                                <span style={{ fontSize: "12px" }}>
                                    {account?.email}
                                </span>
                                <ul className="side-bar-list">
                                    <Link href="/dashboard">
                                        <a>
                                            <li
                                                className={
                                                    route === "/dashboard"
                                                        ? "active"
                                                        : ""
                                                }
                                            >
                                                <MdOutlineDashboard size="17" />{" "}
                                                <span className="mx-2">
                                                    Home
                                                </span>
                                            </li>
                                        </a>
                                    </Link>
                                    <Link href="/dashboard/earn">
                                        <a>
                                            <li
                                                className={
                                                    route === "/dashboard/earn"
                                                        ? "active"
                                                        : ""
                                                }
                                            >
                                                <GiReceiveMoney size="17" />
                                                <span className="mx-2">
                                                    Earn
                                                </span>
                                            </li>
                                        </a>
                                    </Link>

                                    <Link href="/dashboard/budget">
                                        <a>
                                            <li
                                                className={
                                                    route ===
                                                    "/dashboard/budget"
                                                        ? "active"
                                                        : ""
                                                }
                                            >
                                                <IoPieChartSharp size="17" />
                                                <span className="mx-2">
                                                    Budget
                                                </span>
                                            </li>
                                        </a>
                                    </Link>
                                    <Link href="/dashboard/settings">
                                        <a>
                                            <li
                                                className={
                                                    route ===
                                                    "/dashboard/settings"
                                                        ? "active"
                                                        : ""
                                                }
                                            >
                                                <IoMdSettings size="17" />
                                                <span className="mx-2">
                                                    Settings
                                                </span>
                                            </li>
                                        </a>
                                    </Link>
                                </ul>
                            </div>

                            <ul className="side-bar-list">
                                <li
                                    className={
                                        route === "/dasboard/logout"
                                            ? "active"
                                            : ""
                                    }
                                >
                                    <GoSignOut size="17" />
                                    <span
                                        className="mx-2"
                                        onClick={() => signOut()}
                                    >
                                        Logout
                                    </span>
                                </li>

                                <li className="">
                                    <div className="form-check form-switch">
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexSwitchCheckDefault"
                                        >
                                            {theme === "light" ? "⛅" : "🌙"}
                                        </label>
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id="flexSwitchCheckDefault"
                                            onChange={toggleTheme}
                                            checked={theme === "dark"}
                                        />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {children}
                    </div>
                </Fragment>
            </ThemeContext.Provider>
        );
    }
};

export default DashboardLayout;
