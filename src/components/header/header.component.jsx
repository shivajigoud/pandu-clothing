import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assests/crown.svg'
import "./header.styles.scss"
import { auth } from '../../firebase/firebase.utils'

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentUser:this.props.currentUser
        }
        this.loggedIn = this.props.currentUser?true:false;
    }
    componentDidUpdate() {
        console.log("componentDidUpdate called!");
        this.loggedIn = this.props.currentUser?true:false;
      }
    shouldComponentUpdate(nextProps, prevState){
        (nextProps.currentUser && !this.loggedIn && !this.props.currentUser) && (this.loggedIn=true);
        return true
    }
     handleSignOut = async ()=>{
        try{
            await auth.signOut();
            this.loggedIn = false;
            console.log("after sign out@@@@@@@@@@@@@",this.props.currentUser);
            this.setState({currentUser:null})
        }
        catch(err){
            console.log("error in signing out",err.message)
        }
    }
    render(){
    return (

        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" style={{ width: '100px', height: '70px' }}></Logo><h2>Pandu Collections</h2>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP
             </Link>
                <Link className="option" to="/shop">
                    CONTACT
            </Link>

                <div className="option optionIsShowHide">
                    <div onClick={this.handleSignOut} className={`${this.loggedIn ? "show" : "hide"} sign-out`}>Sign Out</div>
                    <Link to="/signin" className={`${this.loggedIn ? "hide" : "show"} sign-in`}>Sign In</Link>
                </div>
            </div>
        </div>
    )
    }
}

export default Header