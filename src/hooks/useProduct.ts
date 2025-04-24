import { getProducts } from "@/services/api";
import { useProductStore } from "@/store/useProducstStore";
import { useState } from "react";

export const useProduct = () => {
  const { products, setProducts } = useProductStore();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAllProducts = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getProducts();
      setProducts(response);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Erro ao carregar produtos";
      setError(errorMessage);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    fetchAllProducts,
    products,
  };
};
