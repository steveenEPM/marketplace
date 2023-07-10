import { View, Image, Text } from "react-native-animatable";
import { StyleSheet } from "react-native";

export default function Container() {

    return (
        <View style={styles.container}>
            <View animation={"fadeInLeft"} delay={500}>
                <Text style={styles.label}>Steveen</Text>
                <View style={{ marginVertical: 12, gap: 12 }}>
                    <Text style={styles.p}>
                        I am a fullstack developer, with experience in developing web and mobile applications, with knowledge in both frontend and backend.
                    </Text>
                    <Text style={styles.p}>
                        I am passionate about staying up to date on the latest trends and tools in the development world.
                    </Text>
                </View>
            </View>


        </View>
    )

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: "4%"
    },
    label: {
        textAlign: "center",
        fontSize: 25,
        fontWeight: "bold",
        color: "#515151"
    },
    p: {
        color: "#666666"
    }
})