import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { GuestScreen } from "./GuestScreen";
import { UserScreen } from "./UserScreen";
import { LoadingModal } from "../../components";

export function AccountScreen() {
    const [hasLogged, setHasLogged] = useState(null)
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            setHasLogged(user ? true : false);
        })
    }, [])

    if(hasLogged === null){
        return <LoadingModal show text="Cargando"/>
    }

    return hasLogged ? <UserScreen/> : <GuestScreen/>
}
