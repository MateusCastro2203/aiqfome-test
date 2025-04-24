import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
interface FavoriteButtonProps {
  isFavorite: boolean;
  onPress: () => void;
}

export const FavoriteButton = ({
  isFavorite,
  onPress,
}: FavoriteButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons
        name={isFavorite ? "heart" : "heart-outline"}
        size={24}
        color={isFavorite ? "red" : "black"}
      />
    </TouchableOpacity>
  );
};
