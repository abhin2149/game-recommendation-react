import axios, {AxiosResponse} from "axios";
import {RECOMMEND_URL} from "../utils/constant";


/**
 * * Game Recommendation
 * @param formData Request object
 */
export const gameRecommendApi = async (formData: any) => {
  const data = await axios
    .post(RECOMMEND_URL, formData,{
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
    .then((response: AxiosResponse) => response)
    .catch((error) => {
        throw error;
    });
  return data;
};