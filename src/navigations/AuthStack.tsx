import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../components/auth/SignInScreen";
import SignUpScreen from "../components/auth/SignUpScreen";
import SplashScreen from "../components/getStarted/SplashScreen";
import ForgotScreen from "../components/auth/ForgotScreen";
const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="ForgotScreen" component={ForgotScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
