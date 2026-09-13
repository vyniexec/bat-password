import React from "react";
import { View, Text, Image } from "react-native";
import {styles} from "./LogoStyles";
const batlogo = require("../../../assets/bat-logo.png");

export default function Logo() {
  return (
    <View style={styles.container}>
        <View>
          <Text style={styles.text}>BAT PASS GENERATOR</Text>
        </View>
        <View>
          <Image source={batlogo} style={styles.images}/>
        </View>
    </View>
  );
}