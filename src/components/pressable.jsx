import { Pressable, StyleSheet } from "react-native";

const Buttons = ({ children, onPress }) => (
    <Pressable style={styles.pressable} android_ripple={{ color: 'rgba(253, 61, 109,0.5)', borderless:false }}
        onPress={onPress}
    >
        {children}
    </Pressable>
)




const styles = StyleSheet.create({

    pressable: {
        marginVertical: 5,
        paddingVertical: "4.5%",
        paddingHorizontal: "3%",
        borderRadius: 7,
        elevation: 1,
        backgroundColor: "white"
    }
})

export default Buttons