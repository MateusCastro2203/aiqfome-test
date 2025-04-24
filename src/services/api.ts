import axios from "axios";
import { Product } from "@/types/ProductsResponse";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const getProducts = async () => {
  const response = await api.get<Product[]>("/products");
  return response.data;
};
