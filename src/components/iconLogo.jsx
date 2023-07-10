import { Image } from "react-native-animatable";
import { Dimensions, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons"

const IconLogo = () => (

    <MaterialCommunityIcons name={"cart-heart"} style={styles.icon}/>
)

const { height } = Dimensions.get('window')

const size = height * 0.2

const styles = StyleSheet.create({

    icon: {
        alignSelf: "center",
        marginTop:"15%",
        marginBottom:7,
        fontSize:size,
        color:"#F4083D"
    }

})

export default IconLogo