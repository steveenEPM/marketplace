import { Pressable, Text, StyleSheet, Image } from "react-native";
import { View } from "react-native-animatable";
import { FlatList } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "react-native-vector-icons"

export default function CartList({ data, onPress }) {

    return (
        <FlatList
            data={data}
            decelerationRate={0}
            style={styles.style}
            contentContainerStyle={styles.containerStyle}
            renderItem={({ item, index }) => (
                <View style={styles.element} animation={"fadeInLeft"} delay={index * 500}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                    <View style={{ flex: 2, gap: 5 }}>
                        <Text style={styles.labelTitle}>{item.title}</Text>
                        <Text style={styles.labelPrice}>$ {item.price}</Text>
                    </View>
                    <Pressable style={styles.pressbale} android_ripple={android_ripple}
                        onPress={() =>onPress(item.id)}
                    >
                        <MaterialCommunityIcons name="cart-plus" size={20} color="#F4083D" style={styles.icons} />
                    </Pressable>
                </View>
            )}
        />
    )

}
const android_ripple = { color: 'white', radius: 50 }


const styles = StyleSheet.create({
    style: {
        flex: 1
    },

    containerStyle: {
        gap: 20,
        paddingHorizontal: "3%",
        flex:1
    },

    image: {
        width: 80,
        height: 80
    },

    element: {
        flexDirection: "row",
        gap: 12,
        alignItems: "center",

        paddingHorizontal:12,
        paddingVertical:7,
        borderRadius:12,
        elevation:3,
        backgroundColor:"white"
    },
    labelTitle: {
        fontSize: 13,
        color: "#383838"
    },
    labelPrice: {
        fontSize: 18,
        fontWeight: "bold"
    },
    pressbale: {

        width: 60,
        height: 60,

        alignItems: "center",
        justifyContent: "center",
        elevation: 2,
        backgroundColor: "#F4083D",
        borderRadius: 90,

    },
    icons: {
        fontSize: 25,
        color: "white"
    }
})