import React from 'react'
import './signIn.styles.scss'
import FormInput from '../forminput/input.component'
import FormButton from '../formbutton/button.component'
import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.setState({email:'',password:''})
    }
    handleChange=(event)=>{
        const {value,name} = event.target;
        this.setState({[name]:value})
    }
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password.</span>
                <form onSubmit={this.handleSubmit}>
                <FormInput type='email' name='email' value={this.state.email} required 
                handleChange={this.handleChange} label='email'/>
                
                <FormInput type='password' name='password' value={this.state.password} required 
                handleChange={this.handleChange} label='password'/>
                <div>
                <FormButton type='submit'>Sign in</FormButton>
                <FormButton onClick={signInWithGoogle} isGoogleSignIn={true}>Sign in with Google</FormButton>
                </div>
                </form>
                
            </div>
        )
    }
}

export default SignIn