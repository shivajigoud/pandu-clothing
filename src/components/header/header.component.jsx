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
        this.isComponentUpdated = false
    }
    // static getDerivedStateFromProps(nextProps,prevProps){
    //    console.log(nextProps,prevProps);
    //    //if(nextProps !== prevProps){
    //       return {currentUser:nextProps.currentUser}
    //    //}
      
    // }
    componentDidUpdate() {
        console.log("componentDidUpdate called!");
        this.setState({currentUser:this.props.currentUser});
        //this.isComponentUpdated = true
      }
    shouldComponentUpdate(nextProps, nextState){
        console.log(nextProps,nextState);
        if(this.state.currentUser && this.props.currentUser){
            if(this.state.currentUser.id !== this.props.currentUser.id) return true
        }
        if(this.state.currentUser == null && nextProps.currentUser !== null) return true;
        return false
    }
    componentDidMount(){
        this.setState({currentUser:this.props.currentUser})
    }
     handleSignOut = async ()=>{
        try{
            await auth.signOut();
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
                    <div onClick={this.handleSignOut} className={`${this.state.currentUser ? "show" : "hide"} sign-out`}>Sign Out</div>
                    <Link to="/signin" className={`${this.state.currentUser ? "hide" : "show"} sign-in`}>Sign In</Link>
                </div>
            </div>
        </div>
    )
    }
}

export default Header