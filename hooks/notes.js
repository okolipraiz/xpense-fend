import { client } from "../utils";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";


export const useGetNotes = () =>
    useQuery(["notes"], async () => {
        const response = await client.get("/notes?_sort=id&_order=desc");
        return response.data;
    });