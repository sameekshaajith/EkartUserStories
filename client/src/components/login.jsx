import React, {Component} from 'react';
import './login.css';
import {connect} from 'react-redux';
import {logger} from '../actions/action';
import axios from 'axios';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            errMessage: ''
        }
    }
    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value, errMessage:''});
    }
    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/login',{'email':this.state.email, 'password':this.state.password}).then((result) => {
            sessionStorage.setItem('signedIn', true);
            console.log('before setting',result.data);
            sessionStorage.setItem('personSigned', JSON.stringify(result.data));
            this.props.history.push('/explore/'+result.data.name);
        }).catch((error) => {
            console.log(error);
            if(error.response.status===402) this.setState({errMessage:error.response.data});
            if(error.response.status===403) this.setState({errMessage:error.response.data});
        });
    }
    render(){
        return (<React.Fragment>
                    <form className='login-form' onSubmit={this.handleSubmit}>
                        <div className='form-group form-div'>
                            <br />
                            <label htmlfor='em'>Email :</label>
                            <input required type='text' value={this.state.name} name='email' onChange={this.handleChange} className='form-control' id='em' />
                            <br />
                            <label htmlfor='pass'>Password :</label>
                            <input required type='password' value={this.state.password} name='password' onChange={this.handleChange} className='form-control' id='pass' />
                            <br />
                            <button type='submit' className='btn btn-info mb-2'>Login</button>
                            <br />
                            {this.state.errMessage && <div className='alert alert-danger'>
                                    {this.state.errMessage}</div>}
                        </div>
                    </form>
            </React.Fragment>);
    }
}


export default Login;