import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Product } from "@/types/ProductsResponse";

interface ProductState {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

export const useProductStore = create(
  persist<ProductState>(
    (set) => ({
      products: [],
      setProducts: (products) => set({ products }),
    }),
    {
      name: "product-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
