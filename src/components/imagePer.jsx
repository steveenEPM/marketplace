import { View, Dimensions } from "react-native";
import { Image } from "react-native-animatable";

const ImaPro = () => (
    <Image source={require('../../assets/hombre.jpg')} style={{
        width: size,
        height: size,
        borderRadius: 150,
        alignSelf: "center",
        position: "absolute",
        top: "20%",
        zIndex: 3
    }}
        animation={"fadeIn"}
    />
)

const { height } = Dimensions.get('window')

const size = height * 0.25

export default ImaPro