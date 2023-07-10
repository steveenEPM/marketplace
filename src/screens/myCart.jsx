import { useEffect, useContext, useMemo, useState, useCallback } from "react";
import { Text } from "react-native";
import { useRoute, useNavigation, CommonActions } from "@react-navigation/native";

import Screen from "../components/AreaViews";
import Loading from "../components/animation/loading";
import CartList from "../containers/myCart/cartList";
import { mobileContext } from "../context/mobile";
import { fakeStore } from "../apis/fakeStore";



export default function MyCart() {


    const route = useRoute()

    const [data, setData] = useState(undefined)

    const navigation = useNavigation()

    const { myListCart, setSaveCart,paymentCart } = useContext(mobileContext)

    useMemo(() => response(setData, myListCart))

    const onPress = useCallback((id) => {
        if (paymentCart.number === "") {
            return navigation.navigate("payPal")
        }

        return navigation.navigate('buySucces', {
            id: id
        })
    }, [])

    return (
        <Screen>
            {
                data ?
                    <>
                        <CartList data={data} onPress={onPress} />
                    </>
                    :
                    <Loading />
            }
        </Screen>
    )
}

const response = async (setData, list) => {
    const respons = await fakeStore('/products?limit=20').then((e) => e.data)
        .then(e => {
            let array = e.filter(element => list.includes(element.id))
            return array
        })

    setData(respons)

}

