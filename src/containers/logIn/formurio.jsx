import { View } from "react-native-animatable";
import { Keyboard, Pressable, Text, StyleSheet } from "react-native";
import FormInput from "../../components/inputForm";
import { useMemo, useRef, useState,useCallback } from "react";

export default function Form({ onChangeText,onPress }) {

    const refPass = useRef(null)

    const refMail = useRef(null)

    const [focus1, setFocus1] = useState(false) //foco de input mail
    const [focus2, setFocus2] = useState(false) //foco de input pass

    useMemo(() => {
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            if (refPass?.current?.isFocused()) {
                refPass?.current?.blur()
            }
            if (refMail?.current?.isFocused()) {
                refMail?.current?.blur()
            }
        });

        return () => {
            hideSubscription.remove();
        };
    }, [])



    return (
        <View style={{ paddingHorizontal: "3%", gap: 25 }}>
            <FormInput label={"email"} placeholder={"user@example.com"} secureTextEntry={false} target={"mail"}
                onChangeText={onChangeText} ref={refMail} setFocus={setFocus1} focus={focus1}
            />
            <FormInput label={"password"} placeholder={""} secureTextEntry={true} target={"password"}
                onChangeText={onChangeText} ref={refPass} setFocus={setFocus2} focus={focus2}
            />
            <View>
                <Pressable style={styles.pressable} onPress={onPress}>
                    <Text style={styles.text}>confirm</Text>
                </Pressable>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    pressable: {
        backgroundColor: "rgb(244, 8, 61)",
        elevation: 3,
        marginTop: "7%",
        alignItems: "center",
        paddingVertical: "7%",
        borderRadius: 7
    },
    text: {
        textTransform: "capitalize",
        fontSize: 17,
        color: "white",
        fontWeight: "bold"
    }
})