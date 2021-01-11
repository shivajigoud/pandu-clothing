import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assests/crown.svg'
import "./header.styles.scss"
import {auth} from '../../firebase/firebase.utils'

const Header = ({currentUser}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" style={{width:'100px',height:'70px'}}></Logo><h2>Pandu Collections</h2>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
             </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            
                <div className="option optionIsShowHide">
                <div onClick={()=>auth.signOut()} className={`${currentUser?"show":"hide"} sign-out`}>Sign Out</div>
                <Link to="/signin"  className={`${currentUser?"hide":"show"} sign-in`}>Sign In</Link>
                </div>
        </div>
    </div>
)

export default Header