import { cardWidth } from "@/constants/Dimension";
import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    backgroundColor: "white",
    borderRadius: 12,
    margin: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: cardWidth,
  },
  contentContainer: {
    padding: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
    color: "#1a1a1a",
  },
  category: {
    fontSize: 12,
    color: "#666",
    marginBottom: 8,
    textTransform: "capitalize",
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2E8B57",
  },
});
