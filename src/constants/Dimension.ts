import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const cardWidth = (width - 90) / 2;

export { cardWidth };
