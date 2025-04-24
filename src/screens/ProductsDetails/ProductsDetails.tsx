import { View, Text, Image } from "react-native";
import { useProduct } from "@/hooks/useProduct";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "@/navigation/AppNavigation";
import { Rating } from "react-native-ratings";
import { styles } from "./style";
import { FavoriteButton } from "@/components/FavoriteButton/FavoriteButton";
import { useFavoriteProductStore } from "@/store/useFavoriteStore";

type ProductsDetailsProp = RouteProp<RootStackParamList, "ProductsDetails">;

export const ProductsDetails = ({ route }: { route: ProductsDetailsProp }) => {
  const { product } = route.params;
  const { addToFavorites, isFavorite, removeFromFavorites } =
    useFavoriteProductStore();
  const isFavoriteProduct = isFavorite(product);

  const handleFavorite = () => {
    if (isFavoriteProduct) {
      removeFromFavorites(product);
    } else {
      addToFavorites(product);
    }
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View style={styles.container}>
        <Image
          source={{ uri: product.image }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <FavoriteButton
          isFavorite={isFavoriteProduct}
          onPress={() => {
            handleFavorite();
          }}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.category}>{product.category}</Text>
        <Rating
          type="star"
          ratingCount={5}
          imageSize={12}
          startingValue={product.rating.rate}
          style={{ marginLeft: 10 }}
        />
      </View>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>U$ {product.price.toFixed(2)}</Text>
    </View>
  );
};
