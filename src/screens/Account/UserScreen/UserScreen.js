import React, { useState } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";
import { InfoUser, AccountOptions } from "../../../components/Account";
import { LoadingModal } from "../../../components/";
import { styles } from "./UserScreen.styles"

export function UserScreen() {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const [_, setReload] = useState(false);

  const onReload = () => setReload(prevState => !prevState)

  const logout = async () => {
    const auth = getAuth();
    await signOut(auth);
  }

  return (
    <View>
      <InfoUser setLoading={setLoading} setLoadingText={setLoadingText}/>
      <AccountOptions onReload={onReload}/>
      <Button
        title="Cerrar sesión"
        buttonStyle={styles.btnStyle}
        titleStyle={styles.btnTextStyle}
        onPress={logout}
      />
      <LoadingModal show={loading} text={loadingText}/>
    </View>
  )
}