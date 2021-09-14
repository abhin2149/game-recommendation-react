import axios, {AxiosResponse} from "axios";
import {IMAGE_SEARCH_URL} from "../utils/constant";


/**
 * * Image Search API
 * @param imageURL Request object
 * payload = RecommendPayload
 */
export const imageSearchApi = async (imageURL: any) => {
  const data = await axios
      .get(`${IMAGE_SEARCH_URL}?image_url=${imageURL}`)
      .then((response: AxiosResponse) => response)
      .catch((error) => {
        throw error;
      });
  return data;
};