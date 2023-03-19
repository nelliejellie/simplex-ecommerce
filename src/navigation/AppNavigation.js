import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HOME_SCREEN, PRODUCT_DETAILS_SCREEN, Main_Screen } from "../constants/Routes";
import HomeScreen from "../screens/home/HomeScreen";
import ProductDetailsScreen from "../screens/ProductDetails/ProductDetailsScreen";
import MainScreen from "../screens/cowry/MainScreen";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Main_Screen}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen
          name={PRODUCT_DETAILS_SCREEN}
          component={ProductDetailsScreen}
        />
        <Stack.Screen
          name={Main_Screen}
          component={MainScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
