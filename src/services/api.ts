import axios from "axios";
import {
  CreatePostData,
  PostResponse,
  ProductResponse,
} from "../types/product";
//base url for fetching data resides hre
const API_URL = "https://dummyjson.com";
//JSONPlaceholder url
const POST_API_URL = "https://jsonplaceholder.typicode.com";
//fetching data with error handling
export const fetchProducts = async (): Promise<ProductResponse | null> => {
  try {
    const response = await axios.get<ProductResponse>(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
//
export const createPost = async (
  postData: CreatePostData,
): Promise<PostResponse | null> => {
  try {
    //POST request:URL, Data (Body), Headers (optional)
    const response = await axios.post<PostResponse>(
      `${POST_API_URL}/posts`,
      postData,
    );
    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};
