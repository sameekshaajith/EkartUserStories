import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './cart.css';

class CartBag extends Component{
    constructor(props){
        super(props);
        this.state = {
            basketProducts: [],
            inout : ''
        }
    }
    componentDidMount(){
        let arry = (sessionStorage.getItem('inCart'))? (sessionStorage.getItem('inCart').split(' ')) : [];
        let unique = [...new Set(arry)]; 
        let inOut = sessionStorage.getItem('signedIn')? true : false;
        this.setState({basketProducts:unique, inOut:inOut});
    }
    handleLogout = (event) => {
        sessionStorage.clear();
        this.props.history.replace('/');
    }
    getOfferPrice= (price,category) => {
        if(sessionStorage.getItem('deal') && sessionStorage.getItem('deal')===category){
            return (price-(price*sessionStorage.getItem('dealP')/100))
        }
        return price
    }
    render(){
        return (<React.Fragment>
            <center>
                <div>
                    <Link to='/explore'>
                        <td className='btn btn-warning btn-sm goBackExplore'>go back to explore</td>
                    </Link>
                    <span>Your shopping cart!</span>
                    {this.state.inOut? <button onClick={this.handleLogout} className='btn btn-warning btn-sm logs'>logout</button> : <Link to='/login'><button className='btn btn-warning btn-sm logs'>login to checkout</button></Link>}
                    <br />
                    <br />
                    <table>
                        <thead>
                            <th>Product</th>
                            <th>|Price after offer if any|</th>
                            <th>Quantity</th>
                        </thead>
                        <tbody>
                            {this.state.basketProducts.map((item) => {
                               return this.props.prdArray.map((itemObj) => {
                                    if(itemObj.pId==item) return <tr key={item}>
                                                                    <td>{itemObj.pName}</td>
                                                                    <td>|{this.getOfferPrice(itemObj.pPrice,itemObj.category)}</td>
                                                                    <td ><input type='text' className='cellWidth'/></td>
                                                                    <td className='btn btn-warning btn-sm'>remove</td>
                                                                  </tr>
                                })
                               
                             })}
                        </tbody>
                    </table> 
                    <td className='btn btn-warning btn-sm'>CheckOut</td>
                </div>
            </center>
            </React.Fragment>);
    }
}
const mapStateToProps = (state) => {
	return {
		prdArray: state.prdArray
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

			}
}
const Cart= connect(mapStateToProps,mapDispatchToProps)(CartBag);
export default Cart;