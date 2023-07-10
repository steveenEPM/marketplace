import { useContext, useMemo, useEffect, useState } from "react";

import Screen from "../components/AreaViews";
import Loading from "../components/animation/loading";
import ContainerList from "../containers/shopping/flatList";
import ContainerEmpty from "../components/animation/empty";
import { mobileContext } from "../context/mobile";
import { fakeStore } from "../apis/fakeStore";


export default function Shopping() {

    const [data, setData] = useState(undefined)
    const [load, setLoad] = useState(true)

    const { shopping } = useContext(mobileContext)

    useMemo(() => getRespons(setData, shopping), [])

    useEffect(()=>redLoad(setLoad,data),[data])

    if(shopping.length === 0){
        return(
            <ContainerEmpty label={"Your shopping list is empty"}/>
        )
    }

    return (
        <Screen>
            {
                !load ?
                    <>
                        <ContainerList data={data}/>
                    </>
                    :
                    <Loading />
            }
        </Screen>
    )

}

const redLoad = (setLoad,data)=>{
    if(data){
        setLoad(false)
    }

}

const getRespons = async (setData, array) => {
    try {
        const respons = await fakeStore('/products').then(e => {
            return e.data
        })

        
        const aux = respons.filter(e => {
            if (array.includes(e.id)) {
                console.log(e.id);
                return e
            }
        })
        setData(aux)
    } catch (error) {
        console.log(error);
    }

}
