import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { BACKGROUND_URL, USER_AVATAR } from '../utils/constants';

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState();
    
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const dispatch = useDispatch();

    const handleBtnClick = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if(message) return;

        if(!isSignIn){
            // SignUp logic
            createUserWithEmailAndPassword(
                auth,
                email.current.value, 
                password.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, 
                        photoURL: USER_AVATAR
                    })
                        .then(() => {
                            const {uid, email, displayName, photoURL} = auth.currentUser;
                            dispatch(
                                addUser({
                                    uid: uid,
                                    email: email,
                                    displayName: displayName,
                                    photoURL: photoURL,
                                })
                            )
                        }).catch((error) => {
                            setErrorMessage(error.message);
                        });
                    
                })
                .catch((error)=> {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+"-"+errorMessage);
                });
        }
        else{
            // SignIn logic
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential)=>{
                    const user = userCredential.user;
                })
                .catch((error)=> {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+"-"+errorMessage);
                })
        }
    }

    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn);
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img 
                    src={BACKGROUND_URL}
                    alt="backgroud"
                />
            </div>
            <form onSubmit={(e)=>{e.preventDefault()}} className='absolute w-4/12 my-36 mx-auto right-0 left-0 p-12 bg-black bg-opacity-70 text-white'>
                <h1 className='font-bold text-3xl py-4'>
                    {isSignIn ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignIn && <input 
                    ref={name}
                    type="text" 
                    placeholder='Name' 
                    className='p-5 my-2 w-full bg-gray bg-transparent border rounded-md' 
                />}
                <input 
                    ref={email}
                    type="text" 
                    placeholder='Email or mobile number' 
                    className='p-5 my-2 w-full bg-gray bg-transparent border rounded-md' 
                />
                <input 
                    ref={password}
                    type="password" 
                    placeholder='Password' 
                    className='p-5 my-2 w-full bg-gray bg-transparent border rounded-md' 
                />
                <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
                <button className='p-3 my-4 font-semibold bg-red-600 w-full rounded-md' onClick={handleBtnClick}>
                    {isSignIn ?'Sign In': 'Sign Up'}
                </button>
                <p className='py-4 font-semibold cursor-pointer' onClick={toggleSignInForm}>
                    {isSignIn ? `New to Netflix? Sign up now` : `Already a user? Sign in now`}
                </p>
            </form>
        </div>
    )
}

export default Login 