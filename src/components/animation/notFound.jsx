import { View, Text } from "react-native-animatable"
import { StyleSheet,Dimensions } from "react-native";
import Lottie from 'lottie-react-native';


export default function NotFounds() {

    return (
        <View style={styles.container}>
            <Lottie
                source={{ uri: "https://assets2.lottiefiles.com/packages/lf20_rlbtcmao.json" }}
                style={styles.lottie}
                autoPlay
                loop
            />
            <Text style={styles.text}>It seems there was a loading error, check your internet connection, or try again later</Text>
        </View>
    )

}


const { width, height } = Dimensions.get('screen')
const size = height * 0.3

const styles = StyleSheet.create({

    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"white"
    },

    lottie:{
        width: size,
        height: size
    },

    text:{
        color:"#383838",
        textAlign:"center",
        fontWeight:"bold",
        fontSize:15,
        marginVertical:22,
        marginHorizontal:15
    }
})