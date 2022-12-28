import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // ...add more providers here
    ],
    secret: process.env.JWT_SECRET,
    pages: {
        signIn: '/auth/login',
        signOut: '/auth/login',
        error: '/auth/login', // Error code passed in query string as ?error=
    }
};

export default NextAuth(authOptions);
