import { Text, TextInput, StyleSheet, Pressable, Keyboard } from "react-native";
import { View } from "react-native-animatable";
import { useRef, useEffect } from "react";


export default function Password({ onChange, onPress,err}) {

    const refPass = useRef(null)

    useEffect(() => {
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            if (refPass?.current?.isFocused()) refPass?.current?.blur()
        });

        return () => {
            hideSubscription.remove();
        };
    }, [])


    return (
        <View style={styles.container} animation={"fadeIn"} duration={500}>
            <Text style={styles.title}>password</Text>
            <TextInput placeholder="****" keyboardType="numeric" secureTextEntry={true}
                style={[styles.textInput, refPass?.current?.isFocused() && {borderColor:"rgb(209, 120, 166)"},err && {borderColor:"red"}]} 
                ref={refPass} maxLength={5} onChangeText={text => onChange('password',text)}
            />
            <Pressable style={styles.pressable} onPress={onPress}>
                <Text style={styles.labelPress}>confirm</Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 2,
        gap: 12,
        paddingHorizontal:"3%"
    },

    title: {
        color: "#383838",
        textTransform:"capitalize"
    },
    textInput: {
        paddingHorizontal: "3%",
        paddingVertical: "2%",
        borderWidth: 1,
        borderColor: "#818181",
        elevation:3,
        backgroundColor:"white",
        borderRadius:7
    },
    pressable: {
        backgroundColor: "#F4083D",
        paddingVertical: "5%",
        marginTop:"15%",
        borderRadius:10,
        alignItems: "center"
    },
    labelPress: {
        color: "white",
        fontWeight: "bold",
        textTransform: "capitalize"
    }
})