import React, {Component} from 'react';
import './review.css';

class Review extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<React.Fragment>
                <table className='reviewTable'>
                    <tbody>
                    {this.props.reviewList.map((review) => {
                        return (<tr key={review.name}>
                                <td className='bold'>{review.name}</td><td>--</td>
                                <td>{review.review}</td>
                            </tr> )
                    })}
                    </tbody>
                </table>
                </React.Fragment>);
    }
}

export default Review;