import { Image } from "react-native-animatable";
import { Dimensions } from "react-native";

const ImageWave = ()=>(
    <Image source={require('../../assets/wave5.png')} style={{
        width:"100%",
        height:size
    }}/>
)

const { height } = Dimensions.get('window')

const size = height * 0.3


export default ImageWave