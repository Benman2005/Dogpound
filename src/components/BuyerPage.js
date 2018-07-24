import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { showBuyer } from '../actions/showBuyer';
import { dislike } from '../actions/disLikeFunction';

export  class BuyerPage extends PureComponent {
    componentDidMount(){
        this.props.showBuyer()
    }

    // dislike = () => {
    //     // adds the user id to the disliked array and show the next user
    // }
    handleClick = () => {
        this.props.showBuyer()
        this.props.dislike(this.props.user)

    }

    render(){

        return (
        <div>
            <h1>Buy Dog Here!</h1>
         
            <img src ={this.props.user.photo}></img>
            <div>
                <button id="dislikers" name = "dislike" onClick ={this.handleClick}>ME NO LIKE!</button> 
                <button id="likers" name="like">LIKE!</button> 
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.showBuyer,
        disliked: state.likeFunction
    }
}

export default connect(mapStateToProps, {showBuyer, dislike}) (BuyerPage)
