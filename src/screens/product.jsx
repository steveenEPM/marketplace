import { Text } from "react-native";
import { useState, useMemo, useContext, useRef, useEffect, useCallback } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import NotFounds from "../components/animation/notFound";
import Imagen from "../containers/product/imagen";
import Screen from "../components/AreaViews";
import Loading from "../components/animation/loading";
import Container1 from "../containers/product/container1";
import Container2 from "../containers/product/container2";
import Container3 from "../containers/product/container3";
import { fakeStore } from "../apis/fakeStore";
import { View } from "react-native-animatable";
import Frames from "../containers/product/frame2";
import { mobileContext } from "../context/mobile";

export default function Producto() {

    const route = useRoute()

    /**Dato de producto */
    const [data, setData] = useState(undefined)
    /** Estado de favorito*/
    const [heart, setHeart] = useState(false)
    /**Carga */
    const [load, setLoad] = useState(true)
    /**Ventanas */
    const [frame, setFrame] = useState(1)
   /**Error de contrasñas */
    const [errPass, setErrPass] = useState(false)
    /**Password */
    const [password, setPassword] = useState('')

    /**Error de carga */
    const [reqFail,setReqFail] = useState(false)

    const navigation = useNavigation()

    const refAddCart = useRef(null)

    const refLike = useRef(null)

    const { likes, setLikes, myListCart, setMyListCary, paymentCart, addNotify } = useContext(mobileContext)

    useMemo(() => respons(route.params, setData,setReqFail), [])

    useEffect(() => {
        if (data) {
            let { id } = data
            if (likes.includes(id))
                setHeart(true)

            setLoad(false)

        }
    }, [data])



    const addCart = useCallback(() => {
        refAddCart?.current?.bounceIn()
        const array = [route.params, ...myListCart]
        setMyListCary(array)
        navigation.navigate("myCart")
    }, [])


    const buy = () => {
        if (paymentCart.number === "") {
            return navigation.navigate("payPal")
        }

        console.log(paymentCart.password);
        return setFrame(2)
    }

    const like = () => {
        refLike?.current?.bounceIn()

        if (heart) {
            let array = likes.filter(e => e !== route.params)
            setLikes(array)
            setHeart(false)
        }
        else {
            let aux = [...likes, route.params]
            setLikes(aux)
            setHeart(true)
        }
    }

    const pressPass = (ref) => {
        ref.current.bounceIn()
        if (paymentCart.password === password) {
            return navigation.navigate('buySucces', {
                id: data.id
            })
        }
        return setErrPass(true)
    }


    if(reqFail){
        return(
            <NotFounds/>
        )
    }

    return (
        <Screen>
            {
                !load ?
                    <>
                        {
                            frame === 1 ?
                                <>
                                    <Imagen uri={data.image} />
                                    <View style={{ paddingHorizontal: "3%", gap: 7 }}>
                                        <Container1
                                            clasificacion={data.category} producto={data.title} onPress={like} ref={refLike}
                                            id={data.id} heart={heart}
                                        />
                                        <Container2 start={data.rating.rate} description={data.description} />
                                        <Container3 price={data.price} onPress={myListCart.includes(route.params) ? buy : addCart}
                                            ref={refAddCart} cart={myListCart.includes(route.params)}
                                        />
                                    </View>
                                </>
                                : <Frames onPress={pressPass} error={errPass} setPassword={setPassword} />
                        }
                    </>
                    :
                    <Loading />
            }
        </Screen>
    )

}


/**Apis  */
/**Informacion de Producto */
const respons = async (id, setData,setReqFail) => {

    try {
        const response = await fakeStore(`/products/${id}`).then(e => {
            return e.data
        })
        setData(response)
    } catch (error) {
        setReqFail(true)
    }

}

const loager = async (data, setLoad) => {

    console.log("adsad");

}