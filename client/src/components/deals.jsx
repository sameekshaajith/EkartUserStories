import React, {Component} from 'react';
import {connect} from 'react-redux';
import './deals.css';

class Deal extends Component {
    constructor(props){
        super(props);
        this.state = {
            category: 'coffee',
            percent: 5
        }
    }
    componentDidMount(){
        sessionStorage.setItem('deal',this.state.category);
        sessionStorage.setItem('dealP',this.state.percent)
    }
    render(){
        return (<React.Fragment>
                    <br />
                    <br/>
                    {this.state.category && <h5>Deals for the Day!</h5>}
                    {this.state.category? this.props.prdArray.map((item) => {
                        if(item.category===this.state.category) 
                        return <div><div class='deal'>
                                        <h6>{item.pName},</h6>
                                        <div>{item.shortDesc}</div>
                                        <div class='discount'>Discount: {this.state.percent}%</div>
                                    </div>
                                    <br />
                                </div>
                    }) : <h5 style={{color:'red'}}>OOps no deals for now!</h5>}
                </React.Fragment>);
    }
}

const mapStateToProps = (state) => {
    return {
        prdArray: state.prdArray,               //all the products
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const Deals = connect(mapStateToProps,mapDispatchToProps)(Deal);
export default Deals;