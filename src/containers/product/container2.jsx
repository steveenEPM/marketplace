import { View } from "react-native-animatable";
import { Text, StyleSheet,Pressable} from "react-native";
import { Octicons } from "react-native-vector-icons"
import { useState } from "react";

export default function Container2({ start, description }) {

    const [state, setState] = useState(true)

    return (
        <View style={styles.container} animation={"fadeIn"} delay={800}>
            <View style={{ flexDirection: "row", gap: 2, alignItems: "center" }}>
                <Octicons name="star-fill" color="#EB9AC6" size={12} />
                <Text style={styles.labelText}>{start}</Text>
            </View>
            <View style={{ gap: 7 }}>
                <Text style={styles.labelsDes}>Description</Text>
                {
                    description.length < 320 ?
                        <Text style={styles.descripton}>{description}</Text>
                        :
                        <>
                            {
                                state ? <Text style={styles.descripton}>{description.slice(0, 325)}</Text> :
                                    <Text style={styles.descripton}>{description}</Text>


                            }
                            <Pressable onPress={() => setState(!state)}>
                                <Text style={styles.detailed}>{ !state ? "More detailed":"less detailed"}</Text>
                            </Pressable>

                        </>

                }

            </View>
        </View>
    )

}


const styles = StyleSheet.create({

    container: {
    },
    labelText: {
        fontSize: 15,
        color: "#EB9AC6",
        fontWeight: "bold"
    },
    labelsDes: {
        color: "#000000",
        fontSize: 18,
        fontWeight: "bold"
    },
    descripton: {
        color: "#383838",
        fontSize: 14,
        minHeight: 130
    },
    detailed:{
        color:"#a4a4a4",
        fontWeight:"bold"
    }

})