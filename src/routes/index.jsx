import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";

import Home from "../screens/home";
import Producto from "../screens/product";
import MyCart from "../screens/myCart";
import BuySucces from "../screens/buyExists";
import PayPal from "../screens/paypal";
import CartSucces from "../screens/succesCart";
import MyFavoritys from "../screens/myFavoritys";
import NofifyScrenn from "../screens/notify"
import Header, { Setting, GoBack } from "../containers/home/header";
import MyProfile from "../screens/myProfile";
import Menu from "../screens/menu";
import Shopping from "../screens/shopping";


export default function Index() {

    const Stack = createNativeStackNavigator()


    return (
        <Stack.Navigator screenOptions={{
            headerShadowVisible: false, // applied here
            animation: "simple_push",
            statusBarColor: "#F4083D",
            headerTitleStyle: {
                color: "#F4083D"
            },
            headerTintColor: "#F4083D",
            headerRight: () => (<Header />)


        }} initialRouteName="home">
            <Stack.Screen component={Home} name="home" options={{
                headerShown: true,
                headerTitle: "Sprife",
                headerTitleStyle: {
                    fontSize: 24,
                    fontWeight: "bold",
                    fontStyle: "italic",
                    color: "#434343"
                },
            }} />
            <Stack.Screen component={Producto} name="producto" options={{
                title: "",
                animation: "slide_from_right"

            }} />
            <Stack.Screen component={MyCart} name="myCart" options={{
                title: "My Cart",
            }} />
            <Stack.Screen component={MyCart} name="myCart2" options={{
                title: "",
            }} />
            <Stack.Screen component={BuySucces} name="buySucces" options={{
                animation: "fade",
                animationDuration: 500,
                headerShown: false
            }} />
            <Stack.Screen component={CartSucces} name="cartSucces" options={{
                animation: "fade",
                animationDuration: 500,
                headerShown: false
            }} />
            <Stack.Screen component={PayPal} name="payPal" options={{
                animation: "fade",
                animationDuration: 500,
                headerShown: true,
                headerTintColor: "#F4083D",

            }} />
            <Stack.Screen component={Menu} name="menu" options={{
                animation: "fade",
                animationDuration: 500,
                headerShown: false,
                headerTintColor: "#F4083D",

            }} />
            <Stack.Screen component={MyFavoritys} name="myFav" options={{
                title: "My favorites",

            }} />
            <Stack.Screen component={Shopping} name="shopping" options={{
                title: "Shopping",

            }} />
            <Stack.Screen component={MyProfile} name="profile" options={{
                title: "",
                headerRight: null,
                headerTransparent: true,
                headerTintColor: "white"
            }} />
            <Stack.Screen component={NofifyScrenn} name="notifys" options={{
                title: "Notifications",
                headerRight: null,
            }} />
        </Stack.Navigator>
    )

}

