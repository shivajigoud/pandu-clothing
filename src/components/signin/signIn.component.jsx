import React from 'react'
import './signIn.styles.scss'
import FormInput from '../forminput/input.component'
import FormButton from '../formbutton/button.component'
import {auth, signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit=async (event)=>{
        event.preventDefault();
        const {email,password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''})
        }catch(err){console.log(err.message)}
        
    }
    handleChange=(event)=>{
        const {value,name} = event.target;
        this.setState({[name]:value})
    }
    handleSignInWithGoogle=()=>{
        signInWithGoogle()
        .then(result=>this.setState({currentUser:result.user}))
        .catch(err=>console.log(err.message))
    }
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password.</span>
                <form onSubmit={this.handleSubmit}>
                <FormInput type='email' name='email' value={this.state.email} required 
                handleChange={this.handleChange} label='Email'/>
                
                <FormInput type='password' name='password' value={this.state.password} required 
                handleChange={this.handleChange} label='Password'/>
                <div>
                <FormButton type='submit'>Sign in</FormButton>
                <FormButton onClick={signInWithGoogle} isGoogleSignIn={true} type='button'>Sign in with Google</FormButton>
                </div>
                </form>
                
            </div>
        )
    }
}

export default SignIn