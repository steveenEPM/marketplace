import { StyleSheet, Pressable, Dimensions, Text } from "react-native"
import Lottie from 'lottie-react-native';
import { MaterialIcons } from "react-native-vector-icons"
import { View } from "react-native-animatable";
import { useRef,useContext, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import Screen from "../components/AreaViews"
import { mobileContext } from "../context/mobile";
import { PushNotification } from "../hooks/notificacion";

export default function BuySucces() {

    const navigation = useNavigation()
    const ref = useRef(null)
    const routes = useRoute()

    const {shopping,setShopping, setNotify} = useContext(mobileContext)


    const onPress = () => {
        try {
            ref.current.bounceIn()
            const {id} = routes.params
            const aux = [...shopping,id]
            setShopping(aux)
            PushNotification("Sprife","The purchase has been made successfully")
            navigation.navigate('home')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Screen styles={styles.container}>
            <Lottie
                source={{ uri: "https://assets5.lottiefiles.com/packages/lf20_lmpTluwhpf.json" }}
                style={{
                    width: size,
                    height: size,

                }}
                autoPlay
                loop
            />
            <Text style={styles.label}>Your purchase has been successful</Text>
            <View ref={ref}>
                <Pressable style={styles.pressable} onPress={onPress}>
                    <MaterialIcons name="check" size={50} color="white" />
                </Pressable>
            </View>
        </Screen>
    )

}

const dates = new Date()

const { width, height } = Dimensions.get('screen')
const size = width * 0.5
const sizePress = width * 0.2


const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        gap: 15,
        alignItems: "center"
    },
    pressable: {
        width: sizePress,
        height: sizePress,
        maxWidth: 100,
        maxHeight: 100,
        alignItems: "center",
        borderRadius: 150,
        justifyContent: "center",
        backgroundColor: "rgb(244, 8, 61)"
    },
    label: {
        marginTop: 25,
        color: "#434343",
        fontSize: 15,
        textAlign: "center",
    }
})