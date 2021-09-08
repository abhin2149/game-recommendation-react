import axios, {AxiosResponse} from "axios";
import {SEARCH_URL} from "../utils/constant";


/**
 * * Search API
 * @param searchQuery Request object
 * payload = RecommendPayload
 */
export const searchApi = async (searchQuery: any) => {
    const data = await axios
        .get(`${SEARCH_URL}&search=${searchQuery}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response: AxiosResponse) => response)
        .catch((error) => {
            throw error;
        });
    return data;
};