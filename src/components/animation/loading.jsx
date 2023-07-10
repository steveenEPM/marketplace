import { Text, View,Dimensions } from "react-native";
import Lottie from 'lottie-react-native';



export default function Loading() {

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Lottie
                source={{uri:"https://assets9.lottiefiles.com/packages/lf20_UnfRpxwc6d.json"}}
                style={{
                    width:size,
                    height:size
                }}
                autoPlay
                loop
            />
        </View>
    )

}


const {width,height} = Dimensions.get('screen')
const size = width * 0.4