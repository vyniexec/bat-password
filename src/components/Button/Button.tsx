import React, { useState } from "react";
import { View, Pressable, Text, Clipboard } from "react-native";
import { styles } from "./ButtonStyles";
import passwordGenerate from "../../services/main";

export default function Button() {
  const [pass, setPass] = useState('');

  function setPassword() {
    const generateToken = passwordGenerate();
    setPass(generateToken);
  }

  function handleCopyButton() {
    Clipboard.setString(pass);
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Text style={styles.textButton}>
          {pass}
        </Text>
      </Pressable>
      <Pressable onPress={setPassword} style={styles.buttonBlack}>
        <Text style={{ color: "#cf9b00", fontSize: 20 }}>
          GENERATE
        </Text>
      </Pressable>
      <Pressable onPress={handleCopyButton} style={styles.buttonBlack}>
        <Text style={{ color: "#cf9b00", fontSize: 20 }}>
          ⚡COPY
        </Text>
      </Pressable>
    </View>
  );
}