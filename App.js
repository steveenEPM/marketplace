import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

import Index from "./src/routes";
import Mobile from "./src/context/mobile";
import Authen from "./src/routes/authen";
import { mobileContext } from "./src/context/mobile";



export default function App() {

  /**Estado de autenticacion */
  const [isAuthen, setIsAuthe] = useState(false)

  useEffect(() => {
    AsyncStorage.removeItem("elemetCart");
  }, [])



  return (
    <Mobile isAuthen={isAuthen} setIsAuthe={setIsAuthe}>
      <NavigationContainer>
        {
          isAuthen ? <Index /> : <Authen />
        }
      </NavigationContainer>
    </Mobile>

  );
}

