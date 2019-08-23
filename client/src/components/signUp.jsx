import React, {Component} from 'react';
import './signUp.css';
import axios from 'axios';

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            name: '',
            password: '',
            cpassword: '',
            emailMessage: '',
            nameMessage: '',
            passMessage: '',
            cpassMessage: '',
            success: false
        }
    }
    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value, emailMessage:'', nameMessage:'', passMessage:'', cpassMessage:'', success:false});
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.validateFields((objToPass) => {
                    axios.post('/signup',objToPass).then((result)=>{
                        console.log(result.data);
                        this.setState({success:true});
                    }).catch(error => {
                        if(error.response.status===400) this.setState({emailMessage:error.response.data});
                    });
        })
        
    }
    validateFields(callback){
        //email check
        let emreg = /^[\w]+\.{0,1}[\w]*@[a-zA-z]+\.[a-zA-z]+$/;
        let emres = this.state.email.match(emreg)? true : false;
        if(!emres) {
            this.setState({emailMessage:'Please type in the right email'});
            return;
        }

        //name check
        let namreg = /^[a-zA-Z]+\s{0,}[a-zA-Z]*$/;
        let namres = this.state.name.match(namreg)? true : false;
        if(!namres){
            this.setState({nameMessage:'Name contains invalid character'});
            return;
        }

        //password check
        if((/[A-Z]+/).test(this.state.password) && (/[a-z]+/).test(this.state.password) && (/[0-9]+/).test(this.state.password)
            && (/[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/).test(this.state.password)){

        }else{
            this.setState({passMessage:'Password should contain at least an uppercase and a lowercase character, a number and a special character'});
            return;
        }

        //confirm password check
        let mess = (this.state.password!==this.state.cpassword)? "Password and Confirm Password don't match" : '';
        if(mess) {
            this.setState({cpassMessage:mess});
            return;
        }  
        const { email,name,password,cpassword } = this.state;
        callback({ email,name,password,cpassword });
    }
    render(){
        return (<React.Fragment>
            <form className='signup-form' onSubmit={this.handleSubmit}>
                <div className='form-group form-div'>
                    <label htmlfor='em'>Email :</label>
                    <input required type='text' name='email' value={this.state.email} onChange={this.handleChange} className='form-control' id='em' />
                    {this.state.emailMessage && <div style={{color:'red'}}>{this.state.emailMessage}</div>}
                    <label htmlfor='nam'>Name :</label>
                    <input required type='text' name='name' value={this.state.name} onChange={this.handleChange} className='form-control' id='nam' />
                    {this.state.nameMessage && <div style={{color:'red'}}>{this.state.nameMessage}</div>}
                    <label htmlfor='pass'>Password :</label>
                    <input required type='password' name='password' value={this.state.password} onChange={this.handleChange} className='form-control' id='pass' />
                    {this.state.passMessage && <div style={{color:'red'}}>{this.state.passMessage}</div>}
                    <label htmlfor='cpass'>Confirm Password :</label>
                    <input required type='password' name='cpassword' value={this.state.cpassword} onChange={this.handleChange} className='form-control' id='cpass' />
                    {this.state.cpassMessage && <div style={{color:'red'}}>{this.state.cpassMessage}</div>}
                    <br />
                    <button type='submit' className='btn btn-info mb-2'>Sign Up</button>
                    {this.state.success && <div className="alert alert-success" role="alert">
                        Your account has been created successfully. You can now login and start exploring!
                    </div>}
                </div>
            </form>
        </React.Fragment>);
    }
}

export default SignUp;