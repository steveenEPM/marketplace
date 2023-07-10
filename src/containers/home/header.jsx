import { View, Text, Pressable, StyleSheet } from "react-native";
import { Octicons, Ionicons } from "react-native-vector-icons"
import { useContext } from "react";
import { mobileContext } from "../../context/mobile";
import { NavigationAction, useNavigation } from "@react-navigation/native";

export default function Header() {

    const navigation = useNavigation()
    const {notify} = useContext(mobileContext)

    return (
        <View style={Styles.container}>
            <View style={{ flexDirection: "row", gap: 12 }}>
                <Pressable style={Styles.pressable} android_ripple={android_ripple}
                    onPress={()=>navigation.navigate('notifys')}
                >
                    <Octicons name="bell-fill" size={sizeIcons} color={colorIcon} style={{ zIndex: 1 }} />
                    {
                        notify && <View style={Styles.circle} />
                    }
                </Pressable>
                <Setting />
            </View>
        </View>
    )

}

export const Setting = () => (
    <Pressable style={Styles.pressable} android_ripple={android_ripple}>
        <Ionicons name="ios-options-outline" size={sizeIcons} color={colorIcon} />
    </Pressable>
)


export const GoBack = () => (
    <Pressable style={[Styles.pressable,{}]}>
        <Ionicons name="md-arrow-back-outline" size={25} color={colorIcon} />
    </Pressable>
)

/**
 * Styles 
 */
const android_ripple = { color: '#EB9AC6', borderless: true, radius: 20 }

const sizeIcons = 18

const colorIcon = "#434343"

const Styles = StyleSheet.create({
    container: {

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 7
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        fontStyle: "italic",
        color: "#434343"
    },

    pressable: {
        width: 45,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 30,
        elevation: 5,
        backgroundColor: "white"
    },

    circle: {
        backgroundColor: "#F4083D",
        borderRadius: 100,
        width: 9,
        height: 7,
        zIndex: 2,
        position: "absolute",
        top: 25,
        left: 23
    }
})