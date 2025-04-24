import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Product } from "@/types/ProductsResponse";

interface FavoriteProductState {
  favoriteProducts: Product[];
  isFavorite: (product: Product) => boolean;
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (product: Product) => void;
}

export const useFavoriteProductStore = create(
  persist<FavoriteProductState>(
    (set, get) => ({
      favoriteProducts: [],
      isFavorite: (product: Product) =>
        get().favoriteProducts.some((p) => p.id === product.id),
      addToFavorites: (product: Product) =>
        set((state) => ({
          favoriteProducts: [...state.favoriteProducts, product],
        })),
      removeFromFavorites: (product: Product) =>
        set((state) => ({
          favoriteProducts: state.favoriteProducts.filter(
            (p) => p.id !== product.id
          ),
        })),
    }),
    {
      name: "favorite-product-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
