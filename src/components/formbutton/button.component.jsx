import React from 'react' 
import './button.styles.scss'

const FormButton = ({children,isGoogleSignIn, ...restProps})=>(
    
        <button className={`${isGoogleSignIn && "google-sign-in"} custom-button`} {...restProps} >{children}</button>
   
)

export default FormButton