import React, {Component} from 'react';
import Navigation from './navigation';
import Content from './content';
import Footer from './footer';
import SignUp from './signUp';
import Login from './login';
import FinalExplore from './explore';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProductDetail from './productDet';
import Header from './header';
import Update from './update';
import Cart from './cart';

class Container extends Component{

    render(){
        return (<React.Fragment>
                <Router>
                    <Switch>
                        <Route path='/' exact render={ props => {
                                       return (<div>
                                                    <Navigation />
                                                    <Content />
                                              </div>);
                                    }} />
                        <Route path='/signup' exact render={ props => {
                                       return (<div>
                                                    <Navigation {...props}/>
                                                    <SignUp {...props}/>
                                              </div>);
                                    }} />
                        <Route path='/login' exact render={ props => {
                                       return (<div>
                                                    <Navigation {...props}/>
                                                    <Login {...props}/>
                                              </div>);
                                    }} />
                        <Route path='/explore' exact render={ props => {
                                    return (<div>
                                                    <Header {...props}/>
                                                    <FinalExplore {...props}/>
                                              </div>);
                                    }} />
                        <Route path='/prodDetails' component={ProductDetail} />
                        <Route path='/explore/:user' render={ props => {
                                    return (<div>
                                                    <Header {...props}/>
                                                    <FinalExplore {...props}/>
                                              </div>);
                                    }} />
                        <Route path='/update' render={ props => {
                                    return (<div>
                                                    <Navigation {...props}/>
                                                    <Update {...props}/>
                                              </div>);
                                    }} />
                        <Route path='/cart' component={Cart} />
                    </Switch>
                    <Footer />
                </Router>
        </React.Fragment>);
    }
}

export default Container;