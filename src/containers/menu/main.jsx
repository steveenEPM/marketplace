import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { useContext } from "react";

import { mobileContext } from "../../context/mobile";
import Buttons from "../../components/pressable";



export default function Main() {


    const navigation = useNavigation()

    const {setIsAuthe} = useContext(mobileContext)

    const navigate = (str) => navigation.navigate(str)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>main menu</Text>
            <ScrollView style={{ gap: 10, }} showsVerticalScrollIndicator={false}>
                <Buttons onPress={()=>navigate('profile')}>
                    <Text style={styles.label}>My profile</Text>
                </Buttons>
                <Buttons onPress={() => navigate('myCart')}>
                    <Text style={styles.label} >Shopping cart </Text>
                </Buttons>
                <Buttons onPress={()=> navigate('myFav')}>
                    <Text style={styles.label}>Favorites</Text>
                </Buttons>
                <Buttons onPress={()=> navigate('shopping')}>
                    <Text style={styles.label}>Shopping</Text>
                </Buttons>
                <Buttons onPress={()=>setIsAuthe(false)}>
                    <Text style={styles.label}>Close section</Text>
                </Buttons>
            </ScrollView>
        </View>
    )

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "white",
        paddingVertical: "1%",
        paddingHorizontal: "3%",
        gap: 20
    },
    title: {
        color: "rgb(244, 8, 61)",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 25,
        textTransform: "capitalize"
    },
    label: {
        fontSize: 14,
        color: "#383838"
    }
})