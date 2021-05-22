import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { AntDesign } from '@expo/vector-icons';


//all screens importing
import WelcomeScreen from "./src/screens/WelcomeScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import HomeScreen from "./src/screens/HomeScreen";
import HomeDetailsScreen from "./src/screens/HomeDetailsScreen";
import NFCScreen from "./src/screens/NFCScreen";
import AccountScreen from "./src/screens/AccountScreen";

//importing NavigationActions reference 
import { navigate, setNavigator } from "./src/helpers/navigation";



//Importing fonts hook
import { useFonts } from "@use-expo/font";
import { useEffect } from "react/cjs/react.production.min";
//Importing AppLoading component if something doesn't load correctly
import AppLoading from "expo-app-loading";
//importing API keys which we are going to use to initialize out firebase 



const loginFlow = createStackNavigator({
  Welcome: WelcomeScreen,
  Signin: SigninScreen,
  Signup: SignupScreen
});


const homeFlow = createStackNavigator({
  Home: HomeScreen,
  HomeDetails: HomeDetailsScreen
});

homeFlow.navigationOptions = {
  title: "Home",
  tabBarIcon: <AntDesign name="home" size={30} color="black" />
}


const bottomTabFlow = createBottomTabNavigator({
  NFC: NFCScreen,
  homeFlow: homeFlow,
  Account: AccountScreen
}, {
  initialRouteName: "homeFlow"
});



//navigator component which will have all navigators nested
const navigator = createSwitchNavigator({
  loginFlow: loginFlow,
  bottomTabFlow: bottomTabFlow
});



const App = createAppContainer(navigator);


//object containing all fonts 
const customFonts = {
  TrendaExtraLight: require("./assets/fonts/TrendaFonts/Trenda-ExtraLight.otf"),
  TrendaLightIt: require("./assets/fonts/TrendaFonts/Trenda-LightIt.otf"),
  TrendaLight: require("./assets/fonts/TrendaFonts/Trenda-Light.otf"),
  TrendaRegular: require("./assets/fonts/TrendaFonts/Trenda-Regular.otf"),
  TrendaSemiboldIt: require("./assets/fonts/TrendaFonts/Trenda-SemiboldIt.otf"),
  TrendaSemibold: require("./assets/fonts/TrendaFonts/Trenda-Semibold.otf"),
  MoonBold: require("./assets/fonts/MoonFonts/Moon-Bold.otf"),
  MoonLight: require("./assets/fonts/MoonFonts/Moon-Light.otf")
}





export default () => {

  const [isLoaded] = useFonts(customFonts);

  //if fonts are not loaded it will show loading icon
  if (!isLoaded)
    return <AppLoading />


  return (
    //this sets the navigator variable to the global navigator from where we have access to all screens
    <App ref={(navigator) => { setNavigator(navigator) }} />
  );
}





