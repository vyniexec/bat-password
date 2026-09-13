import React from "react";
import {Text, View } from "react-native"
import { styleApp } from "./Style";
import Logo from "../components/Logo/Logo";
import Button from "../components/Button/Button";
import TextInput from "../components/TextInput/TextInput";

export default function Home(){
    return (
        <View style={styleApp.container}>
            <Logo/>
            <TextInput/>
            <Button/>
        </View>
    );
}