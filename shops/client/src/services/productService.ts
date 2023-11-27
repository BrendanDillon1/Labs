import axios from "axios";
import { Product } from "../Product";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getProducts = async (
  maxPrice: number | null,
  includes: string | null,
  limit: number | null
): Promise<Product[]> => {
  const params = {
    ...(maxPrice ? { "max-price": maxPrice } : {}),
    ...(includes ? { includes } : {}),
    ...(limit ? { limit } : {}),
  };
  return (await axios.get(`${API_BASE_URL}/products`, { params })).data;
};

export const getProductById = async (id: string): Promise<Product> => {
  const response = await axios.get<Product>(`${API_BASE_URL}/products/${id}`);
  return response.data;
};
