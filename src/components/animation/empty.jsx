import { Text, View, Dimensions } from "react-native";

import Lottie from 'lottie-react-native';

//
const ContainerEmpty = ({ label }) => (

    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" ,backgroundColor:"white"}}>
        <Lottie
            source={{ uri: "https://assets6.lottiefiles.com/packages/lf20_fzoupjne.json" }}
            style={{
                width: size,
                height: size
            }}
            autoPlay
            loop
        />
        <Text style={{color:"#383838",marginTop:"5%"}}>{label}</Text>
    </View>

)

export default ContainerEmpty


const { width, height } = Dimensions.get('screen')
const size = width * 0.4