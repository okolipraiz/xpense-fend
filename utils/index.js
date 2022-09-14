import axios from "axios";

export const client = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_URL}`,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    withCredentials: true,
});