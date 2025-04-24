import { View, Text, FlatList } from "react-native";
import { ProductsCard } from "@/components/ProductsCard/ProductsCard";
import { Product } from "@/types/ProductsResponse";
import { ProductsDetailsNavigationProp } from "@/navigation/types";

export const ProductsList = ({
  products,
  navigation,
}: {
  products: Product[];
  navigation: ProductsDetailsNavigationProp;
}) => {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ProductsCard
          product={item}
          handleProductDetails={() =>
            navigation.navigate("ProductsDetails", { product: item })
          }
        />
      )}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: "center" }}
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16 }}
      style={{ flexGrow: 0 }}
    />
  );
};
