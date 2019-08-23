import React, {Component} from 'react';
import pic from './brigitte-tohm-EAay7Aj4jbc-unsplash.jpg';
import './product.css';

class Product extends Component{
    constructor(props){
        super(props);
    }
    handleAdd = () =>{
        if(sessionStorage.getItem('inCart')){
            let arry = sessionStorage.getItem('inCart')+' '+this.props.prod.pId
            sessionStorage.setItem('inCart', arry);
            alert(`product has been added to the cart`)
        }else{
            sessionStorage.setItem('inCart', this.props.prod.pId)
            alert(`product has been added to the cart`)
        }
    }
    render(){
        return (<React.Fragment>
                  <div className='holder'>
                      <div className='imgHolder'>
                          <img className='imgClass' src={pic} />
                      </div>
                      <div>
                          <h6>{this.props.prod.pName}</h6>
                          <div>{this.props.prod.category}</div>
                          {sessionStorage.getItem('deal') && sessionStorage.getItem('deal')===this.props.prod.category && 
                                                    <div>
                                                        <div className='strike'>rs. {this.props.prod.pPrice}</div>
                                                        <div>{sessionStorage.getItem('dealP')}% off</div>
                                                    </div>}
                        {sessionStorage.getItem('deal') && sessionStorage.getItem('deal')!==this.props.prod.category && 
                                                    <div>
                                                        <div>rs. {this.props.prod.pPrice}</div>
                                                    </div>}
                          <div>{this.props.prod.shortDesc}</div>
                          <button onClick={()=>{this.props.handleMore(this.props.prod)}} className='btn btn-warning btn-sm' style={{margin:5}}>More Info</button>
                          <button onClick={this.handleAdd} className='btn btn-warning btn-sm'>Add to Cart</button>
                          <br></br>
                      </div>
                  </div>
                  <br />
            </React.Fragment>);
    }
}

export default Product;