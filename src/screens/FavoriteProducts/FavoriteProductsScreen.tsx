import { View, Text } from "react-native";
import { useFavoriteProductStore } from "@/store/useFavoriteStore";
import { ProductsList } from "@/components/ProductsList/ProductsList";
import { useNavigation } from "@react-navigation/native";
import { ProductsDetailsNavigationProp } from "@/navigation/types";
import React from "react";
export const FavoriteProductsScreen = () => {
  const { favoriteProducts } = useFavoriteProductStore();

  const navigation = useNavigation<ProductsDetailsNavigationProp>();

  return (
    <View style={{ flex: 1, padding: 10 }}>
      {favoriteProducts.length > 0 ? (
        <ProductsList products={favoriteProducts} navigation={navigation} />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>No favorite products</Text>
        </View>
      )}
    </View>
  );
};
