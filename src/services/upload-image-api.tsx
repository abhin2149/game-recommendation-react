import axios, {AxiosResponse} from "axios";
import {UPLOAD_URL} from "../utils/constant";


/**
 * * Upload Image API
 * @param image Request object
 */
export const uploadImageApi = async (image: any) => {
  let formData = new FormData();
  formData.append('image', image);
  formData.append('key', '913e88e2cac74b80072b81fd2a67bf92')
  const data = await axios
      .post(UPLOAD_URL, formData,{
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