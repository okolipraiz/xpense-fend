/* eslint-disable @next/next/no-img-element */
import { useSession, getSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { AiOutlineGoogle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === "authenticated") {
        router.push("/dashboard");
    }

    if (status === "loading") {
        return <div>Loading</div>;
    }

    if (!session) {
        return (
            <>
                <div
                    className="container"
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        position: "relative",
                        top: "10vh",
                    }}
                >
                    <h3 className="mt-4">LOGIN</h3>

                    <div className="modal position-static d-block">
                        <div className="modal-dialog">
                            <div className="modal-content rounded-3 shadow">
                                <div className="modal-body p-5">
                                    <form>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Email"
                                        />
                                        <input
                                            type="password"
                                            className="form-control my-2"
                                            placeholder="Password"
                                        />
                                        <button
                                            type="submit"
                                            className="btn btn-primary w-100"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h5 className="my-4">OR</h5>
                    <div
                        style={{
                            display: "block",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                        }}
                    >
                        <button
                            className="btn btn-outline-dark w-100"
                            onClick={() => signIn("google")}
                        >
                            {" "}
                            <span className="me-2 mt-2">
                                <FcGoogle size={25} />
                            </span>
                            sign in with google
                        </button>
                        <button
                            className="btn btn-outline-dark mt-2 w-100"
                            onClick={() => signIn("github")}
                        >
                            <span className="me-2 mt-2">
                                <FaGithub size={25} />
                            </span>
                            sign in with Github
                        </button>
                    </div>
                </div>
            </>
        );
    }  
};


export default Login;

// export async function getServerSideProps(context) {
//     const providers = await getProviders();
//     return {
//         props: { providers },
//     };
// }

// export const getServerSideProps = async (context) => {
//     const session = await getSession(context);
//     if (!session) {
//         return {
//             redirect: {
//                 destination: "/login",
//             },
//         };
//     }
//     return {
//         props: {
//             session,
//         },
//     };
// };
