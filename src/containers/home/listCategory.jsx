import { useContext } from "react";
import { Pressable, Text, StyleSheet, Dimensions } from "react-native";
import Animated from "react-native-reanimated";

import { ContexAnimatScroll } from "../../components/animation/scrollView1";

export default function ListCategory({ data, itemCats, onPress }) {


    return (
        <Animated.FlatList
            decelerationRate={0}
            data={data}
            style={[styles.container]}
            contentContainerStyle={styles.flatList}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
                <Pressable
                    style={[styles.pressable, item === "All" && { borderRadius: 160, paddingHorizontal: 20 },
                    item == itemCats && styles.presActive]}
                    onPress={() => onPress(item)}
                >
                    <Text style={[styles.text, item == itemCats && styles.textActive]}>{item}</Text>
                </Pressable>
            )}
        />
    )

}

const { height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        maxHeight: height * 0.06,
        zIndex: 5,
        backgroundColor: "white"
    },

    flatList: {
        gap: 6,
        paddingHorizontal: 4,
        minHeight:80
    },

    pressable: {
        paddingHorizontal: 12,
        paddingVertical: 9,
        borderRadius: 18,
        borderWidth: 1,
        backgroundColor: "white",
        borderColor: "red",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        textTransform: "capitalize",
        color: "#818181",
        fontSize: 13
    },



    presActive: {
        backgroundColor: "#F4083D",
        elevation: 1,
        borderColor: "rgba(235, 154, 198,0.5)",
        borderWidth: 2
    },
    textActive: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15
    }
})