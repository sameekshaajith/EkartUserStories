import React from 'react';
import './rater.css';
import Review from './review';
import axios from 'axios';

class Rater extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            rating : 0,
            stars: [1,2,3,4,5],
            reviews: []
        }
    }
    componentDidMount(){
        axios.post('/feedback',{id:this.props.id}).then((result) => {
            console.log(result.data.review);
            this.setState({rating:result.data.rating, reviews:result.data.review});
        }).catch((error) => {
            console.log(error);
        })
    }
    render(){
        return(<React.Fragment>
            <div className='border'>
                <h5>Rated</h5>
                <ul className="rating">
                    { this.state.rating>0 ? this.state.stars.map((val) => {
                        return (val<=this.state.rating)? <li key={val} className="filled">{'\u2605'}</li> :
                                                        <li key={val}>{'\u2605'}</li> 
                    }) : <h6>not rated yet!</h6>}
                </ul>
                <br />
                <h5>Reviews</h5>
                {this.state.reviews && <Review reviewList={this.state.reviews}/>}
            </div>
            </React.Fragment>);
    }
}
export default Rater;


