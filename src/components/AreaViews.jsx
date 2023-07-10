import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Screen({children,styles}) {

    return (
        <SafeAreaProvider>
            <SafeAreaView style={[{flex:1,backgroundColor:"rgb(255,255,255)",gap:12},styles]}>
                {children}
            </SafeAreaView>
        </SafeAreaProvider>
    )

}