import Screen from "../components/AreaViews";
import { View } from "react-native-animatable";
import { useState, useEffect, useCallback, useContext } from "react";
import { Alert } from "react-native";

import IconLogo from "../components/iconLogo";
import ImageWave from "../components/wave5";
import Form from "../containers/logIn/formurio";
import { mobileContext } from "../context/mobile";

export default function Loing() {

    const [user, setUser] = useState({
        mail: "",
        password: ""
    })

    const { setIsAuthe } = useContext(mobileContext)

    const onChangeText = (target, value) => setUser({ ...user, [target]: value });

    const onPress = () => {

        if ((user.mail === "root@mail.com") && (user.password === "1234")) {
            return setIsAuthe(true)
        }

        console.log(user);
        Alert.alert('¡ Error !', 'wrong email and/or password', [
            { text: 'OK' },
        ]);


    }



    return (
        <Screen>
            <View style={{ flex: 4 }}>
                <IconLogo />
                <Form onChangeText={onChangeText} onPress={onPress} />
            </View>
            <ImageWave />
        </Screen>
    )

}