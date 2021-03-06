import React from 'react'
import FormButton from '../formbutton/button.component'
import FormInput from '../forminput/input.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import './signup.styles.scss'

class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("password dont match");
            return
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user,{displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }
        catch(err){
            console.log("Following eror occured while creating user with email and password", err.message)
        }
    }
    handleChange = event => {
        const {name,value} = event.target;
        this.setState({
            [name]:value
        })
    }
    render() {
        return (
            <div className="sign-up"><h2 className="title">I dont have an account</h2>
            <span>Sign up with your email and Password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="text" 
                        name="displayName" 
                        value={this.state.displayName} 
                        onChange={this.handleChange} 
                        label="Display Name"
                        required
                    >
                    </FormInput>
                    <FormInput 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        label="Email"
                        required
                    >
                    </FormInput>
                    <FormInput 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        label="Password"
                        required
                    >
                    </FormInput>
                    <FormInput 
                        type="password" 
                        name="confirmPassword" 
                        value={this.state.confirmPassword} 
                        onChange={this.handleChange} 
                        label="Confirm Password"
                        required
                    >
                    </FormInput>
                    <FormButton type='submit' >SIGN UP</FormButton>
                </form>
            </div>
        )
    }
}

export default SignUp
