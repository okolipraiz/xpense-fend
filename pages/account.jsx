import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Account = () => {
const router = useRouter();
  const {data: session} = useSession();

if(session){
    return (
        <>
        <h1>Welcome {session.user.name}</h1>
        <p>You are signed in as {session.user.email}</p>
        <button onClick={() => signOut()}>Sign Out</button>
        </>
    );
}
  
if(!session){
    return (
        <>
        <p>You are not signed in</p>
        <button onClick={() => router.push("/auth/login")}>Sign In</button>
        </>
    );
}
}
 
export default Account;