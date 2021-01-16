import React from 'react'
import './sign-in-and-sign-up.styles.scss'
import SignIn from '../../components/signin/signIn.component'
import SignUp from '../../components/signup/signup.component'

const SignInAndSignUp =()=>(
    <div className="sign-in-and-sign-up">
        <SignIn></SignIn>
        <SignUp></SignUp>
    </div>
)

export default SignInAndSignUp
   
