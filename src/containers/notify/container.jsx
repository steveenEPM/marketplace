import { FlatList } from "react-native-gesture-handler";
import { View, Text } from "react-native-animatable";
import { StyleSheet } from "react-native";

const Container = ({ data }) => {
    return (
        <FlatList
            data={data}
            style={styles.root}
            contentContainerStyle={styles.container}
            renderItem={({ item, index }) => (
                <View style={styles.component} animation={"fadeInLeft"} delay={index * 500} duration={700}> 
                    <Text style={styles.label}>{item.title}</Text>
                    <Text style={styles.labelB}>{item.body}</Text>
                </View>
            )}
        />
    )
}

const styles = StyleSheet.create({

    root:{
        flex:1,
        marginTop:12
    },
    container:{
        paddingHorizontal:'4%',
        paddingVertical:"2%",
        gap:12
    },
    component:{
        borderColor:"#818181",
        borderWidth:1,
        paddingHorizontal:"2%",
        paddingVertical:"3%",
        gap:12,
        borderRadius:7,
        backgroundColor:"white",
        
    },
    label:{
        fontSize:15,
        color:"#313131",
        fontWeight:"bold"
    },
    labelB:{
        fontSize:13,
        color:"#515151"
    }

})
export default Container