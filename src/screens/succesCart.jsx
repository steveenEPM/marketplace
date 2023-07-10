import { Text, StyleSheet, Pressable, Dimensions } from "react-native"
import Lottie from 'lottie-react-native';
import { MaterialIcons } from "react-native-vector-icons"
import { useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { storeData } from "../utils/storage";
import Screen from "../components/AreaViews"


export default function CartSucces() {


    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            const value = await AsyncStorage.getItem('elemetCart');
            if (value !== null) {
                navigation.navigate('home')
                return
            }
            return console.log("nulo");
        });

        return unsubscribe
    }, [navigation])



    return (
        <Screen styles={styles.container}>
            {
                <>
                    <Lottie
                        source={{ uri: "https://assets2.lottiefiles.com/packages/lf20_BzUyid.json" }}
                        style={{
                            width: size,
                            height: size,
                            alignSelf: "center",
                        }}
                        autoPlay
                        loop
                    />
                    <Text style={styles.label1}>Account number has been registered</Text>
                    <Text style={styles.label2}>Buy and enjoy our sales catalog</Text>
                    <Pressable style={styles.pressable}
                        onPress={() => {
                            AsyncStorage.setItem('elemetCart', "success");
                            setTimeout(() => {
                                navigation.navigate('myCart')
                            },70)
                        }
                        }>
                        <MaterialIcons name="check" size={sizePress - 25} color="white" />
                    </Pressable>
                </>
            }
        </Screen>
    )

}


/** */
const { width, height } = Dimensions.get('screen')
const size = height * 0.5
const sizePress = width * 0.2


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        gap: 15
    },
    pressable: {
        width: sizePress,
        height: sizePress,
        borderRadius: 80,
        maxWidth: 120,
        maxHeight: 120,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(244, 8, 61)",
        elevation: 4,
        marginTop: 30
    },
    label1: {
        fontSize: 17,
        fontWeight: "bold"
    },
    label2: {
        fontSize: 14,
        color: "#818181"
    }
})