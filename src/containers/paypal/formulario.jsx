import { StyleSheet, View, Text, Pressable, TextInput, Keyboard, Platform } from "react-native";
import { useState, useEffect, useRef } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';



const Forms = ({ open, setOpen,date, setDate, onPress, onChange ,err}) => {

    const [focus, setFocus] = useState(false)

    const refCardNumber = useRef(null)

    useEffect(() => {
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            if (refCardNumber?.current?.isFocused()) refCardNumber?.current?.blur()
        });

        return () => {
            hideSubscription.remove();
        };
    }, [])

    return (
        <View style={styles.container}  animation={"fadeIn"} duration={500}>
            <View style={{marginBottom:"15%", gap: 20 }}>
                <View style={styles.row}>
                    <Text style={[styles.label, focus && { color: colorFocus }]}>card number</Text>
                    <TextInput placeholder="xxx xxx xxx xx" ref={refCardNumber} onChangeText={e => onChange("number", e)}
                        maxLength={15} keyboardType="numeric" onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
                        style={[styles.textInput, focus && { borderColor: colorFocus }, err &&{borderColor:"red"}]}
                    />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>due date</Text>
                    <Pressable style={[styles.textInput, styles.pressable1]} onPress={() => setOpen(true)}>
                        <Text style={styles.pressLable1}>{timeDate(date)}</Text>
                    </Pressable>
                    {open && <DateTimePicker
                        mode={'date'}
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        is24Hour={true}
                        value={date}
                        onChange={(event, value) => {
                            setDate(value)
                            setOpen(false)
                        }}
                        
                    />
                    }
                </View>
            </View>

            <Pressable style={styles.pressable} onPress={onPress}>
                <Text style={styles.pressLabel}> continue</Text>
            </Pressable>
        </View>
    )
}

const timeDate = (date) => {


    return `${date.getDate().toString()}/ ${date.getMonth()}/ ${date.getFullYear()}`
}

/**Styles */
const colorFocus = "rgb(184, 87, 135)"

const styles = StyleSheet.create({

    container: {
        flex: 2,
        gap: 12,
        paddingHorizontal: "3%",
    },
    row: {
        gap: 8
    },
    label: {
        fontSize: 14,
        color: "#383838",
        fontWeight: "bold",
        textTransform: "capitalize"
    },
    pressable: {
        backgroundColor: "#F4083D",
        paddingVertical: "5%",
        alignItems: "center",
        marginBottom: "5%",
        borderRadius: 7
    },
    textInput: {
        elevation:3,
        backgroundColor:"white",
        paddingHorizontal: "3%",
        paddingVertical: "2%",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#818181",
        fontSize: 14

    },
    pressLabel: {

        color: "white",
        fontWeight: "bold",
        textTransform: "capitalize"
    },

    pressable1: {
        paddingVertical: "4%"
    },

    pressLable1: {

    }

})

export default Forms

