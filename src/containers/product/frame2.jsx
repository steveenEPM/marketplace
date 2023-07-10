import { View } from "react-native-animatable";
import { Text, Image, Pressable, TextInput, StyleSheet, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons"
import { useRef } from "react";

export default function Frames({ onPress,error,setPassword }) {

    const ref = useRef(null)

    return (
        <View style={styles.continer} animation={"fadeIn"}>
            <MaterialCommunityIcons name="shield-key" style={styles.icon} />
            <View style={{ gap: 15 }}>
                <Text style={styles.labelPass}>password</Text>
                <TextInput placeholder="passwort" secureTextEntry={true} keyboardType="numeric"
                    style={[styles.textInput,error && {borderColor:"rgb(255,0,0)"}]}
                     onChangeText={str => setPassword(str)}
                />
                <View ref={ref}>
                    <Pressable style={styles.pressable} onPress={() => onPress(ref)}>
                        <Text style={styles.pressLabe}>confirm</Text>
                    </Pressable>
                </View>


            </View>
        </View>
    )

}

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({

    continer: {
        flex: 1,
        paddingTop: "35%",
        paddingHorizontal: "3%",
        gap: 30
    },

    icon: {
        alignSelf: "center",
        fontSize: width * 0.4,
        color: "rgb(235, 154, 198)",
    },
    labelPass: {
        textAlign: "center",
        fontSize: 25,
        textTransform: "capitalize",
        color: "#383838"
    },
    textInput: {
        elevation: 2,
        borderWidth: 1,
        borderColor: "#a4a4a4",
        paddingHorizontal: "4%",
        paddingVertical: "3%",
        borderRadius: 7,
        backgroundColor: "white",
        marginBottom:"4%"
    },
    pressable: {
        backgroundColor: "rgb(244, 8, 61)",
        elevation: 3,
        paddingVertical: "6.2%",
        alignItems: "center",
        borderRadius: 15
    },
    pressLabe: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        textTransform: "capitalize"
    }

})