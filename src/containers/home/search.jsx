import { useEffect, useRef, forwardRef,useContext } from "react"
import { View, Pressable, Keyboard, StyleSheet, TextInput } from "react-native"
import { Ionicons, Octicons, MaterialCommunityIcons } from 'react-native-vector-icons'
import { contexHome } from "../../context/home";
import Animated from "react-native-reanimated";

const Search = forwardRef((props, ref) => {

    const {stAnimatedSearch} = useContext(contexHome)

    return (
        <Animated.View style={[styles.container,stAnimatedSearch]}>
            <View style={styles.element}>
                <Ionicons name="md-search-sharp" color="#a4a4a4" size={23} />
                <TextInput ref={ref} style={styles.textInput} placeholder="Search" cursorColor={"#EB9AC6"}
                    selectionColor={"#EB9AC6"} maxLength={50}
                />
            </View>
            <Pressable style={styles.presable} onPress={props.onPress}>
                <MaterialCommunityIcons name="view-grid" size={27} color="white" />
            </Pressable>
        </Animated.View>
    )

});


const styles = StyleSheet.create({
    container: {
        marginTop:15,
        flexDirection: "row",
        paddingHorizontal: "3.5%",
        gap: 12,
        marginBottom: 10,
        height:45,
        alignItems:"center"
    },
    element: {
        flexDirection: "row",
        gap: 12,
        paddingHorizontal: 12,
        flex: 1,
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 7,
        borderColor: "#a4a4a4",
        elevation: 1,
        backgroundColor: "white",
        height:45
    },
    textInput: {
        flex: 1,
        fontSize: 15
    },
    presable: {
        backgroundColor: "#F4083D",
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
        borderRadius: 13,
        elevation: 1
    }

})

export default Search