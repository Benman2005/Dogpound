import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { showSeller} from '../actions/showSeller';
import { dislikeUser } from '../actions/disLikeFunction';
import { likeUser } from '../actions/likeUser'
import '../App.css';

export  class BuyerPage extends PureComponent {
    componentDidMount(){
        this.props.showSeller()
        
    }

    handleDislike = () => {
        this.props.showSeller()
        this.props.dislikeUser(this.props.user.liked.id)

    }
    handleLike = () => {
        this.props.showSeller()
        this.props.likeUser(this.props.user.liked.id)

    }
    
    render() {
        const displayStyle = {
            display: 'block',
            
          }

        return (
            <div>
            <div>
            <h1>Buy Dog Here!</h1>     
            <img src ={this.props.user.photo}></img>
           </div>
            <button name = "dislike" onClick ={this.handleDislike}>ME NO LIKE!</button> 
            <button name="like" onClick={this.handleLike}>LIKE!</button> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.showSeller,
        liked: state.likeFunction.liked, 
        disliked: state.likeFunction.disliked
    }
}


export default connect(mapStateToProps, {showSeller, dislikeUser, likeUser}) (BuyerPage)


