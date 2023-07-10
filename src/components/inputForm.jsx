import { View } from "react-native-animatable"
import { TextInput, StyleSheet, Text } from "react-native"
import { forwardRef } from "react"

const FormInput = forwardRef((props, ref) => (
    <View style={styles.component}>
        <Text style={styles.label}>{props.label}</Text>
        <TextInput
            placeholder={props.placeholder} secureTextEntry={props.secureTextEntry}
            onChangeText={text => props.onChangeText(props.target,text)}
            ref={ref} style={[styles.input, props.focus && {borderColor:"rgb(253, 61, 109)"}]}
            onFocus={()=>props.setFocus(true)}
            onBlur={()=>props.setFocus(false)}
        />
    </View>
))

const styles = StyleSheet.create({
    component:{
        gap:4
    },
    label:{
        fontSize:13,
        textTransform:"capitalize"
    },
    input:{
        fontSize:15,
        paddingHorizontal:12,
        paddingVertical:10,
        borderWidth:1,
        borderColor:"#a4a4a4",
        borderRadius:5,
        backgroundColor:"white",
        elevation:3
    }
})

export default FormInput