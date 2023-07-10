import { View, Dimensions} from "react-native"
import { FontAwesome } from "react-native-vector-icons"

export default function Icons() {

    return (
        <View style={{alignItems:"center",marginVertical:"15%"}}>
            <FontAwesome name="paypal" size={width * 0.4} color="rgb(253, 61, 109)" />
        </View>

    )

}

const {width} = Dimensions.get('window')