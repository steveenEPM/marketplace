import { useContext, useState, useMemo, useEffect, useCallback } from "react"
import { mobileContext } from "../context/mobile"
import { useNavigation } from "@react-navigation/native"

import Loading from "../components/animation/loading"
import Screen from "../components/AreaViews"
import ContainerList from "../containers/myFavoriti/flatList"
import ContainerEmpty from "../components/animation/empty"
import { fakeStore } from "../apis/fakeStore"

export default function MyFavoritys() {

    const [data, setData] = useState(undefined)
    const [load, setLoad] = useState(true)
    const navigation = useNavigation()

    const { likes } = useContext(mobileContext)



    useMemo(() => getRespos(setData, likes), [])

    useEffect(() => redLoad(data, setLoad), [load, data])

 
    const goTo = useCallback((id) => navigation.navigate('producto', id), [])

    return (
        <Screen>
            {
                !load ?
                    <>
                        <ContainerList data={data} onPress={goTo} />
                    </>
                    :
                    <Loading />
            }
        </Screen>
    )

}

const redLoad = (data, setLoad) => {
    if (data != undefined) {
        setLoad(false)
    }
}

const getRespos = async (setData, likes) => {
    try {
        const respons = await fakeStore('/products').then(e => {
            return e.data
        })

        const aux = respons.filter(e => {
            if (likes.includes(e.id)) {
                return e
            }
        })
        setData(aux)
    } catch (error) {

    }

}