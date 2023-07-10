import { ScrollView } from "react-native-gesture-handler";
import { useRef } from "react";
import Animated ,{ useSharedValue, useAnimatedStyle } from "react-native-reanimated";
import { Dimensions } from "react-native";
import { createContext,useContext} from "react";
import { contexHome } from "../../context/home";


const AnimateScroll = ({ children }) => {

    const {onScroll} = useContext(contexHome)    

    return (
        <ContexAnimatScroll.Provider value={""}>
            <ScrollView
                style={{
                }}
                contentContainerStyle={{ gap: 13, paddingVertical: "3%" }}
                onScroll={onScroll}
            >
                {children}
            </ScrollView>
        </ContexAnimatScroll.Provider>

    )

}

const { width, height } = Dimensions.get('window')

const MAX_TRANSLATE_Y =  height * 0.6;


export const ContexAnimatScroll = createContext()

export default AnimateScroll