import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import { StarshipFeedScreen } from "../screens/StarshipFeedScreen";
import { TermsScreen } from "../screens/TermsScreen";
import { Routes } from "./Route";

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name={Routes.LOGIN_SCREEN} component={LoginScreen} />
        </Stack.Group>
        <Stack.Screen name={Routes.STARSHIP_FEED_SCREEN} component={StarshipFeedScreen} />  
        <Stack.Screen name={Routes.TERMS_SCREEN} component={TermsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;