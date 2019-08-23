import React, {Component} from 'react';
import './productDet.css';
import pic from './brigitte-tohm-EAay7Aj4jbc-unsplash.jpg';
import Rater from './rater';
import {connect} from 'react-redux';

class ProductDet extends Component{
    handleAdd = () =>{
        if(sessionStorage.getItem('inCart')){
            let arry = sessionStorage.getItem('inCart')+' '+this.props.item.pId
            sessionStorage.setItem('inCart', arry);
            alert(`product has been added to the cart`)
        }else{
            sessionStorage.setItem('inCart', this.props.item.pId)
            alert(`product has been added to the cart`)
        }
    }
    getOfferPrice= () => {
        if(sessionStorage.getItem('deal') && sessionStorage.getItem('deal')===this.props.item.category){
            return (this.props.item.pPrice-(this.props.item.pPrice*sessionStorage.getItem('dealP')/100))
        }
        return 'NA'
    }
    render(){
        return (<React.Fragment>
                <div className='forCenter'>
                 <div className='one'>  
                    <div className='two'>
                        <img className='twoImage' src={pic} />
                    </div> 
                    <div className='three'>
                        <h5>{this.props.item.pName}</h5>
                        {sessionStorage.getItem('deal') && sessionStorage.getItem('deal')===this.props.item.category && 
                                                    <div>
                                                        <div className='strike'>rs. {this.props.item.pPrice}</div>
                                                        <div>{sessionStorage.getItem('dealP')}% off</div>
                                                    </div>}
                        {sessionStorage.getItem('deal') && sessionStorage.getItem('deal')!==this.props.item.category && 
                                                    <div>
                                                        <div>rs. {this.props.item.pPrice}</div>
                                                    </div>}
                        <table>
                            <tbody>
                            <tr>
                                <td>Category</td><td>:</td><td>{this.props.item.category}</td>
                            </tr>
                            <tr>
                                <td>Description</td><td>:</td><td>{this.props.item.desc}</td>
                            </tr>
                            <tr>
                                <td>Delivery Charge</td><td>:</td><td>{this.props.item.dCharge}</td>
                            </tr>
                            <tr>
                                <td>OfferPrice</td><td>:</td><td>{this.getOfferPrice()}</td>
                            </tr>
                            </tbody>
                        </table>
                        <br />
                        <button onClick={this.handleAdd} className='btn btn-warning btn-sm'>add to cart</button>
                    </div>
                 </div> 
                 <div className='forRater'>
                        <Rater id={this.props.item.pId}/> 
                </div>
                 </div>          
                </React.Fragment>);
    }
}

const mapStateToProps = (state) => {
    return {
        item: state.productChosen
    }
}

const ProductDetail = connect(mapStateToProps) (ProductDet);
export default ProductDetail;