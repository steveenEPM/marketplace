import { Pressable, Text, StyleSheet, Image,Dimensions } from "react-native";
import { View } from "react-native-animatable";
import ListProductos from "./listProduct";


export default function ContainerAll({ all ,goTo}) {

    return (
        <View style={styles.continer}>

            <View style={styles.element}>
                <View style ={{gap:12}}>
                    <Text style={styles.label}>{all[0].title}</Text>
                    <View style={{flexDirection:"row",alignItems:"center",gap:12}}>
                        <Pressable style={styles.buyPress} onPress={()=>goTo(all[0].id)}>
                            <Text style={styles.buyLabel}>buy</Text>
                        </Pressable>
                        <Text style={styles.priceLabel}>${all[0].price}</Text>
                    </View>
                </View>
                <Image source={{ uri: all[0].image }} style={styles.image} />
            </View>

            <ListProductos data={all.slice(1,(all.length))}/>
        </View>
    )


}

const {width,height} = Dimensions.get("screen")
const imgSize = 140

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        gap:13,
        paddingHorizontal:"3%"
    },

    element: {
        borderWidth: 1,
        borderColor:"#a4a4a4",
        borderRadius:12,
        backgroundColor:"white",
        elevation:3,
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 20,
        justifyContent: "space-between",
        gap:12,
        alignItems:"center",
        height:200,
        maxHeight:200
    },
    label:{
        maxWidth:width * 0.47,
        fontSize:20,
        fontWeight:"bold",
        color:"#434343"
        
    },
    buyPress:{
        backgroundColor:"#F4083D",
        paddingHorizontal:25,
        paddingVertical:12,
        borderRadius:8,
        elevation:4
    },
    buyLabel:{
        color:"white",
        fontSize:17,
        fontWeight:"bold",
        textTransform:"capitalize"
    },
    priceLabel:{
        fontSize:25,
        color:"#383838",
        fontWeight:"500"
    },
    image:{
        width:imgSize-20,
        height:imgSize,
        borderRadius:12,
        
    }
})