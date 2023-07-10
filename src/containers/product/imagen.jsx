import { Image,View } from "react-native-animatable";
import { StyleSheet,Dimensions } from "react-native";

export default function Imagen({uri}){

    return(
        <View style={{flex:1,alignItems:"center",justifyContent:"center",paddingHorizontal:12}} animation={"fadeIn"}>
            <Image source={{uri:uri}} style={{
                width:"80%",
                height:"100%",
                marginHorizontal:12

            }}/>
        </View>
    )

}

const {width,height} = Dimensions.get('window')

const size = width * 0.4