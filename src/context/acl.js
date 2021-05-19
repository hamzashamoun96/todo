import React from 'react'
import {useState , useEffect} from 'react';
import cookie from 'react-cookies'
import jwt from 'jsonwebtoken'
// import dotenv from 'dotenv'
import superagent from 'superagent'
// dotenv.config();



const API = "https://api-js401.herokuapp.com/";
// const SECRET = "supersecret";

export const LogInContext = React.createContext();
function LoginProvider (props){
    const [loggedIn , setLoggedIn] = useState(false)
    const [login , setLogin] = useState();
    const [capabilities  ,setCapabilities] = useState([]);

    const state = {
        loggedIn,
        setLoggedIn,
        
        login:loginFun,
        setLogin,

        capabilities,
        setCapabilities,

        logout:logoutFun,
        user:{}
    }

    async function loginFun (username , password){
        try {
            const response = await superagent.post(`${API}signin`).set('authorization',`Basic ${btoa(`${username}:${password}`)}`);
             validateToken(response.body.token)
            } catch (error) {
           console.error('Sign In Error',error.message); 
        }
    }

     function validateToken(token){
        try {
            const user = jwt.decode(token)
            setCapabilities(user.capabilities)
            if(user === null) throw Error()
            setLoginState(true,token,user);

        } catch (error) {
            setLoginState(false,null,{});
            console.log(`Token Error`,error.message);
        }
    }

    function setLoginState(loggedIn , token , user){
        cookie.save('auth',token);
        setLoggedIn(loggedIn)
        state.token = token;
        state.loggedIn = loggedIn;
        state.user = user;
    }

    function logoutFun(){
        setLoginState(false,null,{});
    }

    useEffect(()=>{
        const token = cookie.load('auth');
        validateToken(token)
    },[])// eslint-disable-line react-hooks/exhaustive-deps

return(
    <LogInContext.Provider value = {state}>
        {props.children}
    </LogInContext.Provider>
)
}
export default LoginProvider;