import { View } from "react-native-animatable"
import { Text, Pressable, StyleSheet } from "react-native"
import { forwardRef } from "react"

const Container3 = forwardRef((props, ref) => (
    <View style={styles.container} animation={"fadeIn"} delay={900}>
        <Text style={styles.labelPrice}>${props.price}</Text>
        <View style={{ flex: 1, height: 60 }} ref={ref} duration={700}>
            <Pressable style={styles.pressable} onPress={props.onPress}>
                {
                    !props.cart ?
                        <Text style={styles.labelPres}>add to cart</Text>
                        :
                        <Text style={styles.labelPres}>buy</Text>
                }
            </Pressable>
        </View>

    </View>
))

const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "3%",
        alignItems: "center",
        gap: 30
    },
    labelPrice: {
        fontSize: 25,
        letterSpacing: 2,
        color: "#515151",
        fontWeight: "bold"
    },
    pressable: {
        backgroundColor: "#F4083D",
        paddingHorizontal: "3%",
        paddingVertical: "5%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12
    },
    labelPres: {
        color: "white",
        textTransform: "capitalize",
        fontSize: 17,
        fontWeight: "bold"
    }
})

export default Container3