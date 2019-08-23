import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {putData, selectedProduct} from '../actions/action';
import Product from './product';
import './explore.css';
import {Link} from 'react-router-dom';
import Deals from './deals';

class Explore extends Component{
    constructor(props){
        super(props);
        this.state = {
            search: '',
            filteredPrdArray: [],
            recommend: []
        }
    }
    componentDidMount(){
        let email = sessionStorage.getItem('signedIn')?JSON.parse(sessionStorage.getItem('personSigned')).email : '';
        axios.get('/products').then((result) => {
            console.log(result.data);
            this.props.putProducts(result.data);
            this.setState({filteredPrdArray:result.data});
            console.log(`seeking recomendations for ${email}`)
            axios.post('/orders',{'email': email}).then((result) => {
                console.log(result.data);
                this.setState({recommend:result.data})
                
            })
        }).catch((error) => {
            console.log(error);
        })
    }
    handleMoreInfo = (item) => {
        this.props.selectedProduct(item);
        this.props.history.push('/prodDetails');
        console.log(`here to handle! and you chose ${item}`);
    }
    searchChange = (event) => {
        this.setState({search: event.target.value},() =>{
            let filteredPrdArray = this.props.prdArray.filter((item) => {
                return item.pName.toLowerCase().indexOf(this.state.search.toLowerCase(),0)>=0;
            })
            this.setState({filteredPrdArray:filteredPrdArray});
        })

    }
    get = () => {
        // console.log(this.props.match.params.user);
        // return this.props.match.params.user;
        return sessionStorage.getItem('signedIn')
    }
    priorHandleMore = (id) => {
        console.log(`you chose from recommend ${id}`);
        let obj = this.props.prdArray.map((item) => {
            if(id===item.pId) this.handleMoreInfo(item);
            return
        })
    }
    render(){
        return (<React.Fragment>
            <div>
            <div className='search'>
                <input type='text' placeholder='search' id='search' value={this.state.search} onChange={this.searchChange}/>
                <Link to='/cart'>
                    <button className='btn btn-warning btn-sm'>go to cart</button>
                </Link>
            </div>
            </div>
            <div className='divMain'>
                <div className='divOne'>
                    {this.get() && 
                    <div>
                        <h5>Recommendations for you!</h5>
                        <div>
                        {this.state.recommend.map((item) => {
                            return <div>
                                    <span>{item.pName}</span>
                                    <span>, {item.category}</span>  
                                    <br />
                                    <button className='btn btn-warning btn-sm' onClick={() => {this.priorHandleMore(item.pId)}}>more info</button>
                                    <br />
                                    <br />
                                    </div>
                                    
                        })}
                        </div>
                    </div> }
                </div>
                <div className='divTwo'>
                    {this.state.filteredPrdArray.length>0 ? 
                        this.state.filteredPrdArray.map((item) => {
                            return <Product key={item.pId} prod={item} handleMore={this.handleMoreInfo}/>
                        }) : <h3 style={{backgroundColor:'rgb(211,211,211)'}}>no data available!</h3> }
                </div> 
                <div className='divThree'>
                    <Deals />
                </div>
            </div> 
            </React.Fragment> );
    }
}

const mapStateToProps = (state) => {
    return {
        prdArray: state.prdArray,               //all the products
        signedIn: state.signedIn,
        personSigned: state.personSigned
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        putProducts: (data) => dispatch((putData(data))),
        selectedProduct: (item) => dispatch((selectedProduct(item)))
    }
}

const FinalExplore = connect(mapStateToProps, mapDispatchToProps) (Explore);
export default FinalExplore;