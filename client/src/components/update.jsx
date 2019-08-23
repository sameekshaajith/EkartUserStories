import React, {Component} from 'react';
import axios from 'axios';

class Update extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            upassword: '',
            ucpassword: '',
            errorMessage: '',
            nameMessage: '',
            passMessage: '',
            cpassMessage: '',
            successMessage: '',
            display1: '',
            display2: 'none'
        }
    }
    changeHandler = (event) => {
        this.setState({[event.target.name]:event.target.value,errorMessage:'',nameMessage:'',passMessage:'',cpassMessage:''});
    }
    submitHandler = (event) => {
        event.preventDefault();
        axios.post('/login',{'email':this.state.email, 'password':this.state.password}).then((result) => {
            console.log(result.data);
            this.setState({display1:'none',display2:''});
        }).catch((error) => {
            console.log(error);
            if(error.response.status===402) this.setState({errorMessage:error.response.data});
            if(error.response.status===403) this.setState({errorMessage:error.response.data});
        });
    }
    updateHandler = (event) => {
        event.preventDefault();
        this.validateFields((objToPass) => {
            axios.post('/update',objToPass).then((result) => {
                console.log(result.data);
                this.setState({display1:'none',display2:'none',successMessage:result.data});
            }).catch((error) => {
                console.log(error);
                // console.log(`${error.response.data} and ${error.response.status}`);
            })
        });
    }
    validateFields(callback){
        //name check
        let namreg = /^[a-zA-Z]+\s{0,}[a-zA-Z]*$/;
        let namres = this.state.name.match(namreg)? true : false;
        if(!namres){
            this.setState({nameMessage:'Name contains invalid character'});
            return;
        }

        //password check
        if((/[A-Z]+/).test(this.state.upassword) && (/[a-z]+/).test(this.state.upassword) && (/[0-9]+/).test(this.state.upassword)
            && (/[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/).test(this.state.upassword)){

        }else{
            this.setState({passMessage:'Password should contain at least an uppercase and a lowercase character, a number and a special character'});
            return;
        }

        //confirm password check
        let mess = (this.state.upassword!==this.state.ucpassword)? "Password and Confirm Password don't match" : '';
        if(mess) {
            this.setState({cpassMessage:mess});
            return;
        }  
        callback({email:this.state.email, name:this.state.name, password:this.state.upassword});
    }
    render(){
        return (<React.Fragment>
            <center style={{'margin-top':50}}>
                <div style={{display:this.state.display1}}>
                    <h5>Please login to update your details!</h5>
                    <form className='login-form' onSubmit={this.submitHandler}>
                        <div className='form-group form-div'>
                            <label htmlfor='em'>Email :</label>
                            <input required type='text' value={this.state.email} name='email' onChange={this.changeHandler} className='form-control' id='em' />
                            <br />
                            <label htmlfor='pass'>Password :</label>
                            <input required type='password' value={this.state.password} name='password' onChange={this.changeHandler} className='form-control' id='pass' />
                            <br />
                            <button type='submit' className='btn btn-info mb-2'>Login</button>
                            <br />
                        </div>
                    </form>
                    {this.state.errorMessage && <div className='alert alert-danger' style={{width:750}}>{this.state.errorMessage}</div>}
                </div>
                <div style={{display:this.state.display2}}>
                    <h5>Please provide the updated details!</h5>
                    <form className='login-form' onSubmit={this.updateHandler}>
                        <div className='form-group form-div'>
                            <br />
                            <label htmlfor='nam'>Name :</label>
                            <input required type='text' name='name' value={this.state.name} onChange={this.changeHandler} className='form-control' id='nam' />
                            {this.state.nameMessage && <div style={{color:'red'}}>{this.state.nameMessage}</div>}
                            <label htmlfor='upass'>Password :</label>
                            <input required type='password' name='upassword' value={this.state.upassword} onChange={this.changeHandler} className='form-control' id='upass ' />
                            {this.state.passMessage && <div style={{color:'red'}}>{this.state.passMessage}</div>}
                            <label htmlfor='ucpass'>Confirm Password :</label>
                            <input required type='password' name='ucpassword' value={this.state.ucpassword} onChange={this.changeHandler} className='form-control' id='ucpass ' />
                            {this.state.cpassMessage && <div style={{color:'red'}}>{this.state.cpassMessage}</div>}
                            <br />
                            <button type='submit' className='btn btn-info mb-2'>Update</button>
                        </div>
                    </form>
                </div>
                <br />
                <br />
                {this.state.successMessage && <div className='alert alert-warning'>{this.state.successMessage}</div>}
            </center>
    </React.Fragment>);
    }
}

export default Update;