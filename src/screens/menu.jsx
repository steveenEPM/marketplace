import { Text, ImageBackground, Image } from "react-native";

import Screen from "../components/AreaViews";
import Main from "../containers/menu/main";

export default function Menu() {

    return (
        <Screen>
            <ImageBackground style={{ flex: 1, paddingTop: "40%" }} source={require('../../assets/duotone.png')}>
                <Image style={{ width: "100%", height: 145 }} source={require('../../assets/wave.png')} />
                <Main/>
            </ImageBackground>
        </Screen>
    )


}