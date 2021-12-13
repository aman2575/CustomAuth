import React, { useEffect, useState } from "react";
import { Auth } from 'aws-amplify'
import '../configureAmplify'
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import ForgotPassword from "../components/ForgotPassword";
import ForgotPasswordSubmit from "../components/ForgotPasswordSubmit";
import ConfirmSignUp from "../components/ConfirmSignUp";


const initialState = { email: '', password:'', authCode:''}
function Profile() {

    const  [uiState, setUiState] = useState(null)
    const [formState, setFormState] = useState(initialState)
    const [user, setUser] = useState(null)
    const { email, password, authCode} = formState
    useEffect(() => { 
        checkUser()
        
    },[])
    async function checkUser(){
        try{
        const user = await Auth.currentAuthenticatedUser()
        setUser(user)
        setUiState('signedIn')
        console.log({user})
    
        } catch(err) {
            setUser(null)
            setUiState('signIn')
        }
    }
    
    async function signUp() {
        try{
            await Auth.signUp({
                username: email, password, attributes:{email}
            })
            setUiState('confirmSignUp')
            console.log(username,password)
        }catch(err){console.log({err})}
    }
    async function confirmSignUp() {
        try{
            await Auth.confirmSignUp(email, authCode)
            signIn()
            setUiState('signedIn')
        }catch(err){console.log({err})}
    }
    async function signIn() {  
        try{
            await Auth.signIn(email, password)
            setUiState('signedIn')
            checkUser()
        }catch(err){console.log({err})}
    }
    async function forgotPassword() {
        try{
            await Auth.forgotPassword(email)
            setUiState('forgotPasswordSubmit')
        }catch(err){console.log({err})}
    }
    async function forgotPasswordSubmit() {
        try{
            await Auth.forgotPasswordSubmit(email, authCode, password)
            setUiState('signIn')

        }catch(err){console.log({err})}
    }

    function onChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
        console.log()
    }



    return(
        <>
            <div className="bg-gray-50 max-w-md  mx-auto">
                    <div className="flext flex-col place-items-center">
                        <div className="max-w-full sm:w-640 mt-14 ">
                            <div className="bg-white py-14 px-16 shadow-form rounded ">
                           
                            {
                            uiState === 'signUp' && ( 
                                <div>
                                    <SignUp
                                    onChange={onChange}
                                    setUiState={setUiState}
                                    signUp={signUp}
                                    />
                                </div>
                                )
                            }
                            {
                            uiState === 'confirmSignUp' && ( 
                                <div>
                                    <ConfirmSignUp
                                    onChange={onChange}
                                    setUiState={setUiState}
                                    confirmSignUp={confirmSignUp}
                                    />
                                </div>
                                )
                            }
                            {
                            uiState === 'signIn' && ( 
                                <div>
                                    <SignIn 
                                    onChange={onChange}
                                    setUiState={setUiState}
                                    signIn={signIn }
                                    />
                                </div>
                                )
                            }
                            {
                                (uiState === 'signedIn' &&  user) && (
                                    <div>
                                        <p className="text-xl"> Welcome, { user.attributes.email}</p>
                                        <button
                                            className="text-white w-full mt-10 bg-pink-600 p-3 rounded"
                                            onClick={() => {
                                                Auth.signOut(); 
                                                setUiState('signIn')
                                                setUser(null)
                                                
                                            
                                            }}
                                        >
                                        SignOut</button>
                                    </div>
                                )
                            }
                             {
                            uiState === 'forgotPassword' && ( 
                                <div>
                                    <ForgotPassword
                                    onChange={onChange}
                                    forgotPassword={forgotPassword}
                                   
                                    />
                                </div>
                                )
                            }
                             {
                            uiState === 'forgotPasswordSubmit' && ( 
                                <div>
                                    <ForgotPasswordSubmit
                                    onChange={onChange}
                                    forgotPasswordSubmit={forgotPasswordSubmit}
                                    
                                    />
                                </div>
                                )
                            }
                            </div>
                       
                        </div>
                    </div>
            </div>
            
                
               
        </>
    )
}
export default Profile