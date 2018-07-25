import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { showBuyer } from '../actions/showBuyer';
import { dislike } from '../actions/disLikeFunction';
import { likeUser } from '../actions/likeUser'
import { showUser } from '../actions/showUser';
import '../App.css';

export  class BuyerPage extends PureComponent {
    componentDidMount(){
        this.props.showBuyer()
        this.props.showUser()
    }

    // dislike = () => {
    //     // adds the user id to the disliked array and show the next user
    // }
    handleBuyer = () => {
        this.props.showBuyer()
        this.props.dislike(this.props.user)

    }
    handleClick = () => {
        this.props.showUser()
        this.props.likeUser(this.props.user)

    }
    
    render() {
        const displayStyle = {
            display: 'block',
            
          }
    //    (this.reaction.active ? "Like" : "Dislike")
        return (
            <div>
            <div className="container">
            <div className="buddy" style={displayStyle}>
            <h1>Buy Dog Here!</h1>     
            <img src ={this.props.user.photo}></img>
            </div>
            <button className="dislike" name = "dislike" onClick ={this.handleBuyer}>ME NO LIKE!</button> 
                <button className="like" name="like" onClick={this.handleClick}>LIKE!</button> 
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

export default connect(mapStateToProps, {showBuyer,showUser, dislike, likeUser}) (BuyerPage)
