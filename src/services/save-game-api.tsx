import axios, {AxiosResponse} from "axios";
import {LIKED_GAMES_URL} from "../utils/constant";


/**
 * * Save liked games
 * @param formData Request object
 */
export const saveLikedGamesApi = async (formData: any) => {
  const data = await axios
      .post(LIKED_GAMES_URL, formData,{
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