import React from 'react'
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './components/shop/shoppage.component'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import {auth} from './firebase/firebase.utils'

import './App.css';

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(){
    super();
    this.state = {
      currentUser:null
    }
  }
  unsubscribeFromAuth = null;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>this.setState({currentUser:user},()=>console.log(this.state.currentUser))) 
   }
   componentWillUnmount(){
     this.unsubscribeFromAuth()
   }
  render(){
  return (
    <div >
    <Header currentUser={this.state.currentUser}></Header>
    <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/shop" component={ShopPage} />
    <Route exact path="/signin" component={SignInAndSignUp} />
    </Switch>
      
    </div>
  );
  }
}

export default App;
