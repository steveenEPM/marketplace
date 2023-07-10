import { createContext, useState, useEffect, useCallback } from "react";


const Mobile = ({ children, isAuthen, setIsAuthe }) => {

    /**Lista de productos favoritos */
    const [likes, setLikes] = useState([5, 1, 15, 7, 20])

    /**Lista de Carritos de productos */
    const [myListCart, setMyListCary] = useState([9, 13, 2, 25, 4])

    /**Datos de tarjeta de credito */
    const [paymentCart, setPaymentCart] = useState({
        number: "",
        dates: "",
        password: ""
    })

    /**Lista de compras */
    const [shopping, setShopping] = useState([])

    /**Estado de notificacion de la aplcacion */
    const [notify, setNotify] = useState(false)

    /**Lista de notificacion */
    const [listNotify, setListNotify] = useState([])



    /**Agregar a la lista de notificacion */
    const addNotify = useCallback((str) => {
        const aux = [...listNotify, str]
        setNotify(true)
        return setListNotify(aux)
    }, [])

    /**Por cada dos minutos enviar un mensaje de notificacion */
    useEffect(() => {
        setTimeout(() => {
            const str = {
                title: "¡Exclusive Black Friday Discount!",
                body: "Hellow, we have great news for you! During the black friday weekend, we are offering a special 30% discount " +
                    "on all products in our store. You can't miss this opportunity to save eb your purchases. Visit us now and take "+
                    "advantage if this promotion!."
            }
            addNotify(str)
        }, 100000);
    }, [])

    return (
        <mobileContext.Provider value={{
            likes, setLikes, myListCart, setMyListCary, paymentCart, setPaymentCart,
            shopping, setShopping, notify, setNotify, listNotify,
            isAuthen, setIsAuthe
        }}>
            {children}
        </mobileContext.Provider>
    )

}

export const mobileContext = createContext()

export default Mobile