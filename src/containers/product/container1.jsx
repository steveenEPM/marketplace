import { Pressable, StyleSheet, Text, Dimensions } from "react-native";
import { View } from "react-native-animatable";
import { MaterialIcons } from "react-native-vector-icons"
import { forwardRef } from "react";

const Container1 = forwardRef((props, ref) => (
    <View style={styles.container} animation={"fadeIn"} delay={500}>
        <View style={{ flex: 6, gap: 7 }} >
            <Text style={styles.labelClas}>{props.clasificacion}</Text>
            <Text style={styles.labelText}>{props.producto}</Text>
        </View>
        <View ref={ref} duration={500}>
            <Pressable style={[styles.pressable, props.heart && {backgroundColor:"rgb(235, 154, 198)"}]} onPress={props.onPress}>
                <MaterialIcons name="favorite" size={30} color={props.heart ? "rgb(244, 8, 61)":"white"} />
            </Pressable>
        </View>

    </View>
))

/*
export default function Container1({clasificacion,producto}){

    return(
     
    )

}
*/

const { width, height } = Dimensions.get('screen')

const size = width * 0.15

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    pressable: {
        width: size,
        height: size,
        backgroundColor: "#F4083D",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    labelClas: {
        color: "#EB9AC6",
        fontSize: 12,
        fontWeight: "300",
        textTransform: "capitalize"
    },
    labelText: {
        fontSize: 16.5,
        fontWeight: "bold",
        width: "80%"
    }
})

export default Container1