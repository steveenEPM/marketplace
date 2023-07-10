import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Loing from "../screens/loing";

export default function Authen(){

    const Stack = createNativeStackNavigator()

    return(
        <Stack.Navigator
            screenOptions={{
                headerShown:false,
                statusBarColor: "#F4083D",
                animation:"simple_push"
            }}
            initialRouteName="logIn"
        >
            <Stack.Screen component={Loing} name="logIn"/>
        </Stack.Navigator>
    )

}