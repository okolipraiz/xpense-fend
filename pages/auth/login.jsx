/* eslint-disable @next/next/no-img-element */
import { useSession, getSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";


const Login = () => {
    const { data: session, status } = useSession({required: true});
    const router = useRouter();

    if (status === "authenticated") { 
        router.push("/dashboard");
    }

    // if (status === "loading") {
    //     return <div>Loading...</div>;
    // }

    if (status === "unauthenticated") {
        router.push("/auth/login");
    }

    if (session) {
        return (
            <>
                <h3>Signed In as {session.user.email}</h3>
                <p>Welcome, {session.user.name.slice(5)}</p>
                <img src={session.user.image} alt="user image" style={{borderRadius: "50%", width:"15%"}} />
                <br />
                <br />
                <button onClick={() => signOut()}>SignOut Baby</button>
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
