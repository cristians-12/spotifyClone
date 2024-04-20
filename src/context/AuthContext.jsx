import { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [favs, setFavs] = useState([]);

  const auth = getAuth();

  const login = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        // console.log(user);
        Cookies.set("uid", user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        //   toast.error(errorCode);
      });
    await setDoc(doc(db, "usuarios", Cookies.get('uid')), {
      favoritos: [],

    });
    window.location.href = '/';
  };

  const addFavorite = async ()=>{
    
  }

  return (
    <>
      <AuthContext.Provider value={{ user, setUser, login }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
