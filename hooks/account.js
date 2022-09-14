import { client } from "../utils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetAccount = () =>
    useQuery(["account"], async () => {
        const response = await client.get("/account/1")
        return response.data;
    });



