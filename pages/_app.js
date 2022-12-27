import Head from "next/head";
import Script from "next/script";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from "@tanstack/react-query";
import NextNProgress from "nextjs-progressbar";
import {SessionProvider} from "next-auth/react"

import "bootstrap/dist/css/bootstrap.css";
import "../styles/theme.css";
import "../styles/globals.css";


const queryClient = new QueryClient();

function MyApp({ Component, pageProps: {session, ...pageProps}}) {           
    
    return (
        <>
            <Head>
                <title>Xpense</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin
                />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NextNProgress
                color="#017993"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
            />
            <SessionProvider session={session}>
                <QueryClientProvider client={queryClient}>
                    <Component {...pageProps} />
                </QueryClientProvider>
            </SessionProvider>
            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
                crossOrigin="anonymous"
            />
        </>
    );
}

export default MyApp;
