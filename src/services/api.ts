import axios from "axios";
import { ProductResponse } from "../types/product";
//base url for fetching data resides hre
const API_URL = "https://dummyjson.com";
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
