import { ImageBackground, Image } from "react-native"

import Screen from "../components/AreaViews"
import Container from "../containers/myProfile/container"
import ImaPro from "../components/imagePer"

export default function MyProfile() {



    return (
        <Screen>
            <ImageBackground source={require('../../assets/duotone4.png')} style={{ flex: 1,paddingTop:"50%"}}>
                <ImaPro/>
                <Image style={{ width: "100%", height: 145 }} source={require('../../assets/wave.png')} />
                <Container/>
            </ImageBackground>
        </Screen>
    )

}