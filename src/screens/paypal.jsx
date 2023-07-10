import { useNavigation } from "@react-navigation/native";
import { useState, useContext } from "react";
import { Dimensions } from "react-native";

import Screen from "../components/AreaViews";
import Forms from "../containers/paypal/formulario";
import Password from "../containers/paypal/password";
import Icons from "../containers/paypal/icons";
import { mobileContext } from "../context/mobile";

export default function PayPal() {

    const [date, setDate] = useState(new Date())
    const [errNum,setErrNum] = useState(false)
    const [errPass,setErrPass] = useState(false)
    const [data, setData] = useState({
        number: "",
        password: ""
    })

    const [open, setOpen] = useState(false)

    const [index, setIndex] = useState(1)

    const navigation = useNavigation()

    const { setPaymentCart } = useContext(mobileContext)

    const onChange = (target, values) => setData({ ...data, [target]: values })

    const onNext = ()=>{
        if(data.number !== ""){
            return setIndex(2)
        }
        setErrNum(true)

    }

    const goTo = () => {
        if (data.password !== "") {
            const {number,password} = data
            setPaymentCart({
                number,password,date
            })
            navigation.navigate('cartSucces')
            return

        }
        setErrPass(true)
    }


    return (
        <Screen>
            <Icons />
            <>
                {
                    index === 1 ?
                        <Forms date={date} setDate={setDate} onPress={onNext} onChange={onChange}
                            open={open} setOpen={setOpen} err={errNum}/>
                        :
                        <Password onChange={onChange} onPress={goTo} err={errPass}/>
                }

            </>
        </Screen>
    )

}


const { width } = Dimensions.get('window')

const size = width * 0.4