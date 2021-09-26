import axios, {AxiosResponse} from "axios";
import {LIKED_GAMES_URL} from "../utils/constant";


/**
 * * Fetch Liked Games API
 */
export const fetchLikedGamesApi = async () => {
  const data = await axios
      .get(LIKED_GAMES_URL, {
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