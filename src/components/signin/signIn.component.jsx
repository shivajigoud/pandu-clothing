import React from 'react'
import './signIn.styles.scss'

class SignIn extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:''
        }
    }
    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password.</span>
                <form>
                <input type='email' name='email' value={this.state.email} required />
                <label htmlFor='email'>Email</label>
                <input type='password' name='password' value={this.state.password} required />
                <label htmlFor='password'>Password</label>
                <input type='submit' value='Sign In'></input>
                </form>
            </div>
        )
    }
}

export default SignIn