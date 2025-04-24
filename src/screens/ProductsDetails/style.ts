import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 4,
    color: "#1a1a1a",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  category: {
    fontSize: 12,
    color: "#666",
    textTransform: "capitalize",
  },
  contentContainer: {
    flexDirection: "row",

    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#1a1a1a",
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2E8B57",
  },
});
