import React, {Component} from 'react';
import './content.css';
import {Link} from 'react-router-dom';

class Content extends Component{

    render(){
        return (<React.Fragment>
            <div className='content'>
                <Link to='/explore'>
                    <button type="button" class="btn btn-warning btn-lg">Explore!</button>
                </Link>
                
            </div>
        </React.Fragment>)
    }
}

export default Content;