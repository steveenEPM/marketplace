import { useState, useMemo, useEffect, useRef, useCallback, useContext } from "react";
import { View } from "react-native-animatable";
import { Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Animated,{useAnimatedStyle,useSharedValue,interpolate,Extrapolate,withTiming} from "react-native-reanimated";{}

import Screen from "../components/AreaViews";
import Loading from "../components/animation/loading";
import Search from "../containers/home/search";
import ListCategory from "../containers/home/listCategory";
import { fakeStore } from "../apis/fakeStore";
import ContainerAll from "../containers/home/listAll";
import ListProductos from "../containers/home/listProduct";
import AnimateScroll from "../components/animation/scrollView1";
import { contexHome } from "../context/home";
import { mobileContext } from "../context/mobile";

export default function Home() {

    const [categorias, setCategorias] = useState(undefined)
    const [load, setLoad] = useState(true)
    const [all, setAll] = useState(undefined)
    const [electronics, setElectronics] = useState(undefined)
    const [jewelery, setJewelery] = useState(undefined)
    const [menClot, setMenClot] = useState(undefined)
    const [womenClot, setWomenClot] = useState(undefined)
    const [itemCats, setItemCat] = useState('All')

    const ref = useRef(null)

    const navigation = useNavigation()



    useMemo(() => resCategory(setCategorias), [])

    useMemo(() => responses(setAll, setElectronics, setJewelery, setMenClot, setWomenClot), [])

    useEffect(() => cargas(categorias, setLoad, all, electronics, jewelery, menClot, womenClot),
        [categorias, all, electronics, jewelery, menClot, womenClot])


    useEffect(() => {
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            if (ref?.current?.isFocused()) ref?.current?.blur()
        });

        return () => {
            hideSubscription.remove();
        };
    }, [])


    /**Precionar un item de categoria */
    const pressCat = useCallback((item) => setItemCat(item), [itemCats])

    /**Ir a un producto en especifico */
    const goTo = useCallback((id) => navigation.navigate('producto', id), [])

    const pressMenu = useCallback(()=> navigation.navigate('menu'))

    /**
     * Animacion 
     */
    const positionY = useSharedValue(0)

    const onScroll = e  =>{
        const {y} = e.nativeEvent.contentOffset;
        positionY.value = y
    } 

    const stAnimatedSearch = useAnimatedStyle(()=>{

        return{
            transform:[{
                scale:withTiming(positionY.value > 100 ? 0 : 1)
            }],
            height:withTiming(positionY.value > 100 ? 0 : 45)
        }
    },[])


    return (
        <contexHome.Provider value={{ goTo ,onScroll,stAnimatedSearch}}>
            <Screen>
                {
                    !load ?
                        <>
                            <Search ref={ref} onPress={pressMenu}/>
                            {
                                categorias && <ListCategory data={categorias} itemCats={itemCats} onPress={pressCat} />
                            }
                            <AnimateScroll>
                                <>

                                    <View style={{ marginTop: 5 }}>
                                        {
                                            itemCats === "All" && <ContainerAll all={all} goTo={goTo} />
                                        }
                                        <View style={{ paddingHorizontal: "3%" }}>
                                            {
                                                itemCats === "electronics" && <ListProductos data={electronics} />
                                            }
                                            {
                                                itemCats === "jewelery" && <ListProductos data={jewelery} />
                                            }
                                            {
                                                itemCats === "men's clothing" && <ListProductos data={menClot} />
                                            }
                                            {
                                                itemCats === "women's clothing" && <ListProductos data={womenClot} />
                                            }
                                        </View>

                                    </View>
                                </>
                            </AnimateScroll>
                        </>
                        :
                        <Loading />
                }
            </Screen>
        </contexHome.Provider>

    )

}



/***********************Apis*******************************  */
/**Lista de todas las categorias */
const resCategory = async (setCategorias) => {
    try {
        const response = await fakeStore('/products/categories').then((e) => e.data)
        response.unshift("All")
        setCategorias(response)
    } catch (error) {
        console.log(error);
    }
}

/**Lista de todos los productos */
const responses = async (setAll, setElectronics, setJewelery, setMenClot, setWomenClot) => {

    try {
        const all = await fakeStore('/products?limit=20').then((e) => e.data)
        setAll(all)

        const electronics = await fakeStore('/products/category/electronics?limit=20').then(e => e.data)
        setElectronics(electronics)

        const jewelery = await fakeStore('/products/category/jewelery?limit=20').then(e => e.data)
        setJewelery(jewelery)

        const menClot = await fakeStore("/products/category/men's clothing").then(e => e.data)
        setMenClot(menClot)
        const womenClot = await fakeStore("/products/category/women's clothing").then(e => e.data)
        setWomenClot(womenClot)


    } catch (error) {
        console.log(error)
    }

}

//["electronics","jewelery","men's clothing","women's clothing"]

/**Estado de carga */
const cargas = (categorias, setLoad, all, electronics, jewelery, menClot, womenClot) => {
    if (categorias && all && electronics && jewelery && menClot && womenClot) {
        return setLoad(false)
    }
    return
}