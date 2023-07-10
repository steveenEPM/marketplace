import { useContext,useEffect } from "react"
import { useNavigation } from "@react-navigation/native"

import Screen from "../components/AreaViews"
import ContainerEmpty from "../components/animation/empty"
import Container from "../containers/notify/container"
import { mobileContext } from "../context/mobile"


export default function NofifyScrenn() {

    const { listNotify, setNotify } = useContext(mobileContext)

    const navigation = useNavigation()


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setNotify(false)
        });

        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [navigation])


    return (
        <Screen>
            {
                listNotify?.length !== 0 ?
                    <>
                        <Container data={listNotify} />
                    </>
                    :
                    <>
                        <ContainerEmpty label={"Empty notification list"} />
                    </>
            }
        </Screen>
    )

}