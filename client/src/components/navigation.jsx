import React, {Component} from 'react';
import logo from './abstract-2675672_640.png';
import './navigation.css';
import {Link} from 'react-router-dom';

class Navigation extends Component{
    constructor(){
        super();
    }

    render(){
        return (<React.Fragment>
            <div className='forFix'>
              <div className='nav'>
                <div className='group1'>
                    <img src={logo} className='imgControl' /> 
                    <Link to='/'><h3 className='eshop'>EShop</h3></Link>
                </div>
                <div className='group2'>
                    
                        {/* <button className='btn btn-info btn-sm'>add to cart</button> */}
                    
                    <Link to='/update'>
                        <button className='btn btn-info btn-sm'>Update Details</button>
                    </Link>
                    <Link to='/signup'>
                        <button className='btn btn-info btn-sm'>Sign Up</button>
                    </Link>
                    <Link to='/login'>
                        <button type='button' className='btn btn-info btn-sm'>Login</button>
                    </Link>
                </div>
                </div>
              </div>
            </React.Fragment>);
    }
}

export default Navigation;