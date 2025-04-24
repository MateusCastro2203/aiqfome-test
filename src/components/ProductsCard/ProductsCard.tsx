import React, { memo, useCallback } from "react";
import { Product } from "@/types/ProductsResponse";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface ProductsCardProps {
  product: Product;
  handleProductDetails: () => void;
}
export const ProductsCard = memo(
  ({ product, handleProductDetails }: ProductsCardProps) => {
    const onPressHandler = useCallback(() => {
      handleProductDetails();
    }, [handleProductDetails]);

    const formattedPrice = useCallback(() => {
      return `U$ ${product.price.toFixed(2)}`;
    }, [product.price]);

    return (
      <TouchableOpacity onPress={onPressHandler}>
        <View style={styles.card}>
          <Image
            source={{ uri: product.image }}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.contentContainer}>
            <Text numberOfLines={2} style={styles.title} ellipsizeMode="tail">
              {product.title}
            </Text>
            <Text style={styles.category} numberOfLines={1}>
              {product.category}
            </Text>
            <Text style={styles.price}>{formattedPrice()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
);
