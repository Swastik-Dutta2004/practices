import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.view}
    >
      <Text>Bhenchod MaakaBhoswra.</Text>
      
    </View>
  );
}


const styles = StyleSheet.create({
  view:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
  },
  navButton:{
      height:30,
      width:100,
      borderRadius:4,
      textAlign:"center",
      backgroundColor:"orange"
  }
})