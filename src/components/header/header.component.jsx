import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assests/crown.svg'
import "./header.styles.scss"

const Header = () => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
        <Link className="logo-container" to="/shop">
        SHOP
    </Link>
    <Link className="logo-container" to="/shop">
    CONTACT
</Link>
</div>
    </div>
)

export default Header