import { View, Text, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { useProduct } from "@/hooks/useProduct";
import { ProductsCard } from "@/components/ProductsCard/ProductsCard";
import { useNavigation } from "@react-navigation/native";
import { ProductsDetailsNavigationProp } from "@/navigation/types";
import { ProductsList } from "@/components/ProductsList/ProductsList";
export const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { fetchAllProducts, products } = useProduct();

  const navigation = useNavigation<ProductsDetailsNavigationProp>();

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <View style={{ flex: 1, padding: 10, alignItems: "center" }}>
      <ProductsList products={products} navigation={navigation} />
    </View>
  );
};
