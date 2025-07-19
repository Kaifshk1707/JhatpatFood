import {  Platform} from "react-native";
 const shadowStyle = Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    android: {
      elevation: 4,
    },
  });

  export default shadowStyle;