import { FlatList } from "react-native-gesture-handler";
import { View } from "react-native-animatable";
import { StyleSheet, Text, Pressable, Image } from "react-native";
import { MaterialIcons } from "react-native-vector-icons"

export default function ContainerList({ data, onPress }) {

    return (
        <FlatList
            data={data}
            decelerationRate={0}
            style={styles.style}
            contentContainerStyle={styles.containerStyle}
            renderItem={({ item, index }) => (
                <View animation={"fadeInLeft"} delay={index * 500} style={{borderRadius:7,elevation:1,backgroundColor:"white"}}>
                    <Pressable style={styles.element} android_ripple={android_ripple}
                        onPress={() => onPress(item.id)}
                    >
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <View style={{ flex: 2, gap: 5 }}>
                            <Text style={styles.labelTitle}>{item.title}</Text>
                            <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
                                <Text style={styles.labelPrice}>$ {item.price}</Text>
                                <MaterialIcons name="favorite" size={20} color="#F4083D" style={styles.icons} />
                            </View>
                        </View>

                    </Pressable>
                </View>

            )}
        />
    )

}



const android_ripple = { color: 'rgba(244, 8, 61,0.1)', radius: 200 }


const styles = StyleSheet.create({
    style: {
        flex: 1
    },

    containerStyle: {
        gap: 25,
        paddingHorizontal: "3%",
        flex: 1
    },

    image: {
        width: 70,
        height: 70,
        borderRadius: 12
    },

    element: {
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 11,
        borderRadius: 10,
    },
    labelTitle: {
        fontSize: 13,
        color: "#515151"
    },
    labelPrice: {
        fontSize: 15,
        fontWeight: "bold"
    },
    pressbale: {

        width: 60,
        height: 60,

        alignItems: "center",
        justifyContent: "center",


    },
    icons: {
        fontSize: 15,
        color: "#F4083D"
    }
})