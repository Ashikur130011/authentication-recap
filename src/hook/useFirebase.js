import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                console.log(result.user);
            })
            .catch(error=> {
                setError(error.message)
            })
    }
    useEffect( () => {
        onAuthStateChanged(auth, user => {
            if(user) {
                console.log("state change", user);
                setUser(user)
            }
        })

    },[])

    const logOut = () =>{
        signOut(auth).then(() =>{
            setUser({})
        }).catch(error => {
            setError(error.message)
        })
    }


    return{
        signInUsingGoogle,
        user,
        logOut
    }
};

export default useFirebase;
