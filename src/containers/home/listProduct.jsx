import { useContext } from "react";
import { Text, Image, Pressable, StyleSheet, Dimensions } from "react-native";
import { View } from "react-native-animatable";
import { Octicons } from "react-native-vector-icons"
import { FlatList } from "react-native-gesture-handler";

import { contexHome } from "../../context/home";
import { mobileContext } from "../../context/mobile";

export default function ListProductos({ data }) {

    const { goTo } = useContext(contexHome)

    const { likes } = useContext(mobileContext)

    return (
        <View style={[styles.container,{
            height:(data.length) * 145
        }]}>
            {
                data && data.map((key, index) => {

                    if (index < data.length) {
                        return (
                            <View key={index} style={{ marginVertical: 10, backgroundColor: "white", elevation: 3 }} animation={"fadeIn"} delay={index * 90}>
                                <Pressable style={styles.pressable} onPress={() => goTo(key.id)}>
                                    <Image source={{ uri: key.image }} style={styles.image} />
                                    <Text style={styles.labelTitle}>{key.title}</Text>
                                    <Text style={styles.labelPrice}>${key.price}</Text>
                                    {likes.includes(key.id) && <Octicons name="heart-fill" color="#EB9AC6" size={15} style={styles.likes} />}
                                </Pressable>
                            </View>
                        )
                    }
                })
            }
        </View>
    )
}

const { width, height } = Dimensions.get('screen')

const size = width * 0.25

const styles = StyleSheet.create({
    container: {
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 1,
  

    },

    pressable: {
        width: width * 0.45,
        height: width * 0.9,
        maxHeight: 250,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 3,
        gap: 8,
        borderRadius: 12,
        backgroundColor: "white",

        borderColor: "#a4a4a4",
        borderWidth: 1

    },
    image: {
        width: "75%",
        height: size + 40,
        maxHeight: 120
    },
    labelTitle: {
        width: "80%",
        height: "20%",
        fontSize: 13,
        color: "#434343"
    },

    labelPrice: {
        fontWeight: "bold",
        fontSize: 15.5,
        letterSpacing: 1.5
    },
    likes: {
        position: "absolute",
        zIndex: 3,
        top: 10,
        left: "90%"
    }
})