import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "@/screens/Home/HomeScreen";
import { Product } from "@/types/ProductsResponse";
import { ProductsDetails } from "@/screens/ProductsDetails/ProductsDetails";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FavoriteProductsScreen } from "@/screens/FavoriteProducts/FavoriteProductsScreen";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
export type RootStackParamList = {
  Home: undefined;
  ProductsDetails: { product: Product };
};

const Stack = createStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Products"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites Products"
        component={FavoriteProductsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductsDetails"
        component={ProductsDetails}
        options={{ headerShown: true, title: "Product Details" }}
      />
    </Stack.Navigator>
  );
}
