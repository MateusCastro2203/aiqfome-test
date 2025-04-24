import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "@/navigation/AppNavigation";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <AppNavigation />
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaView>
  );
}
