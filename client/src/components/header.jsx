import React, {Component} from 'react';
import logo from './abstract-2675672_640.png';
import './header.css';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Head extends Component{
    constructor(props){
        super(props);
    }
    handleLogout = (event) => {
        sessionStorage.clear();
        this.props.history.replace('/');
    }
    render(){
        return (<React.Fragment>
            <div className='toFix'>
                <div className='hContainer'>
                    <div className='hgroup1'>
                        <img src={logo} className='himgControl' /> 
                        <Link to='/'><h3 className='eshop'>EShop</h3></Link>
                    </div>
                    <div className='hgroup2'>
                        {sessionStorage.getItem('signedIn') && <h4>Welcome, {JSON.parse(sessionStorage.getItem('personSigned')).name}</h4>}
                        {/* {this.props.personSigned.name} can give async */} 
                    </div>
                    {/* <div className='hgroup4'>
                        <button type='submit' className='btn btn-info mb-2'>cart</button>
                    </div> */}
                    <div className='hgroup5'>
                        <Link to='/update'><button type='submit' className='btn btn-warning btn-sm'>update my details</button></Link>
                    </div>
                    <div className='hgroup5'>
                        {sessionStorage.getItem('signedIn')? <button onClick={this.handleLogout} type='submit' className='btn btn-warning mb-2'>logout</button> : 
                                                <Link to='/login'><button className='btn btn-warning btn-sm'>login</button></Link>}
                    </div>
                    <div className='hgroup5'>
                        {!sessionStorage.getItem('signedIn')? <Link to='/signup'><button className='btn btn-warning btn-sm'>signup</button></Link> : ''}
                    </div>
                </div>
            </div>
            </React.Fragment>);
    }
}

const mapStateToProps = (state) => {
    return {
        signedIn: state.signedIn,
        personSigned: state.personSigned
    }
}
const mapDipatchToProps = (dispatch) => {
    return {

    }
}
const Header = connect(mapStateToProps,mapDipatchToProps)(Head);
export default Header;