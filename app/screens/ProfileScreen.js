import { TouchableOpacity, Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors, sizes, spacing } from "../constants/theme";

const logo = require("../../assets/lapangbola.png");
const lapang = require("../../assets/lapang.png");
const google = require("../../assets/Google.png");

const ProfileScreen = () => {
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLogin = () => {
    // Proses autentikasi atau tindakan lainnya saat tombol Login ditekan
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.header, { marginTop: insets.top + 10 }]}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={{ alignItems: "center", marginVertical: spacing.l }}>
        <Image
          source={lapang}
          style={{ width: 350, height: 200, resizeMode: "contain" }}
        />
        <Text
          style={{ fontSize: sizes.h2, fontWeight: "bold", marginVertical: 10 }}
        >
          Realtime Statistics
        </Text>
        <Text style={{ color: colors.gray }}>
          Real-time football live scores and match statistics
        </Text>
      </View>
      <View style={{ margin: spacing.l }}>
        <Text style={{ fontSize: sizes.h2, fontWeight: "bold", marginBottom: 20 }}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={handleEmailChange}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={handlePasswordChange}
          value={password}
          secureTextEntry
        />
        <Text style={{ color: colors.gray, fontSize: 12, textAlign: 'right', marginBottom: 16 }}>Forgot password</Text>
        <TouchableOpacity style={styles.btnLogin} onPress={handleLogin}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>

        <Text style={{ marginVertical: 16, textAlign: 'center', color: colors.gray, fontSize: 12 }}>Or Login with</Text>

        <TouchableOpacity style={styles.btnLoginGoogle} onPress={handleLogin}>
          <Image source={google} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
          <Text style={styles.btnTextGoogle}>Google</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: spacing.l }}>
          <Text style={{ textAlign: 'center', marginRight: 5 }}>
            Don’t have account?
          </Text>
          <Text style={{ color: '#15AF15' }}>Sign UP</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  header: {
    justifyContent: "center",
    marginBottom: spacing.l,
  },
  logo: {
    width: 155,
    height: 60,
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.15,
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  btnLogin: {
    backgroundColor: "#15AF15",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  btnLoginGoogle: {
    borderColor: "#15AF15",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'center'
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  btnTextGoogle: {
    fontWeight: "600",
    fontSize: 16,
    marginLeft: 10,
  },
});
