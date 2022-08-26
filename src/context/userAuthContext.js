import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { db } from "../firebase/firebase-utils";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  getAdditionalUserInfo,
} from "firebase/auth";
import { auth } from "../firebase/firebase-utils";
import { createUserProfileDocument } from "../firebase/firebase-utils";
import {  useNavigate } from "react-router-dom";
const userAuthContext = createContext();
const teacherContext=createContext();






export function UserAuthContextProvider({ children }) {
  const navigate=useNavigate();
  const [user, setUser] = useState("");
  const signUp=async (email, password,additionData)=> {
    const user = await createUserWithEmailAndPassword(auth, email, password);
   const dataRef= await createUserProfileDocument(user.user,additionData) ;
  console.log(dataRef);
     return dataRef;
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function googleSignIn(email, password) {
    const googleAuthProvider =new GoogleAuthProvider();
    return signInWithPopup(auth,googleAuthProvider);
  }
  function signOut() {
    console.log('signOut')
    navigate('/');
   return auth.signOut();
  }

  useEffect(() => {
    
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    
    });
    return () => {
      unSubscribe();
    };
  }, []);


  return (
    <userAuthContext.Provider value={{ user, signUp ,logIn,googleSignIn,signOut}}>
      {children}
    </userAuthContext.Provider>
  );
}




export function useUserAuth() {
  return useContext(userAuthContext);
}
