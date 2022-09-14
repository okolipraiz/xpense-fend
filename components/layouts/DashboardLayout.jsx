import { createContext, Fragment, useState, useEffect } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGetAccount } from "../../hooks/account";

export const ThemeContext = createContext(null);

const DashboardLayout = ({ children }) => {
    const { route } = useRouter();
    const [navbarState, setNavbarState] = useState(false);
    const { data: account } = useGetAccount();

    const [theme, setTheme] = useState("light");
    useEffect(() => {
           const getTheme = () => {
        if (typeof window !== "undefined") {
             return window.localStorage.getItem("theme");
        }
        getTheme();
    }
});
        
    const handleClick = () => {
        setNavbarState(false);
    };

    const toggleTheme = () => {
        setTheme((currentTheme) =>
            currentTheme === "light" ? "dark" : "light"
        )
         localStorage.setItem("theme", theme);     
  };

    // useEffect(() => {
    //     localStorage.setItem("theme", theme);
    // }, [theme]);
    

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Fragment>
                <div className="dashboard-container" id={theme}>
                    <div className="top">
                        <div className="toggle">
                            {navbarState ? (
                                <VscChromeClose onClick={() => handleClick()} />
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
                                                        route ===
                                                        "/dashboard/earn"
                                                            ? "active"
                                                            : ""
                                                    }
                                                >
                                                    <MdOutlineDashboard size="17" />
                                                    <span className="mx-2">
                                                        Earn
                                                    </span>
                                                </li>
                                            </a>
                                        </Link>
                                        <Link href="#">
                                            <a>
                                                <li
                                                    className={
                                                        route ===
                                                        "/dashboard/budget"
                                                            ? "active"
                                                            : ""
                                                    }
                                                >
                                                    <MdOutlineDashboard size="17" />
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
                                                    <MdOutlineDashboard size="17" />
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
                                        <MdOutlineDashboard size="17" />
                                        <span className="mx-2">Logout</span>
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
                                    <li
                                        className={
                                            route === "/dashboard"
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        <MdOutlineDashboard size="17" />{" "}
                                        <span className="mx-2">Home</span>
                                    </li>
                                </Link>
                                <li
                                    className={
                                        route === "/dashboard/earn"
                                            ? "active"
                                            : ""
                                    }
                                >
                                    <MdOutlineDashboard size="17" />
                                    <span className="mx-2">Earn</span>
                                </li>
                                <li
                                    className={
                                        route === "/dashboard/budget"
                                            ? "active"
                                            : ""
                                    }
                                >
                                    <MdOutlineDashboard size="17" />
                                    <span className="mx-2">Budget</span>
                                </li>
                                <Link href="/dashboard/settings">
                                    <li
                                        className={
                                            route === "/dashboard/settings"
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        <MdOutlineDashboard size="17" />
                                        <span className="mx-2">Settings</span>
                                    </li>
                                </Link>
                            </ul>
                        </div>

                        <ul className="side-bar-list">
                            <li
                                // id="logout"
                                className={
                                    route === "/dasboard/logout" ? "active" : ""
                                }
                            >
                                <MdOutlineDashboard size="17" />
                                <span className="mx-2">Logout</span>
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
};

export default DashboardLayout;
