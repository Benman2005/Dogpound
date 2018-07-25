import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { showSeller} from '../actions/showSeller';
import { dislikeUser } from '../actions/disLikeFunction';
import { likeUser } from '../actions/likeUser'
import { setMatches } from '../actions/matched'
import '../App.css';

export  class BuyerPage extends PureComponent {
    componentDidMount(){
        this.props.showSeller()
        
    }

    checkMatch = (likedUser) => {
        if (this.props.user.liked.includes(11) === true) {return this.props.setMatches(this.props.user)}
    }

    handleDislike = () => {
        this.props.showSeller()
        this.props.dislikeUser(this.props.user.id)

    }
    handleLike = () => {
        this.props.showSeller()
        this.props.likeUser(this.props.user.id)
        this.checkMatch(this.props.user)
    }
    
    render() {
        const displayStyle = {
            display: 'block',
            
          }

        return (
            <div>
            <div>
            <h1>Buy Dog Here!</h1>     
            <img className = "profileImage" src ={this.props.user.photo}></img>
           </div>
            <button className = "dislike" onClick ={this.handleDislike}>ME NO LIKE!</button> 
            <button className="like" onClick={this.handleLike}>LIKE!</button> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.showSeller,
        liked: state.likeFunction.liked, 
        disliked: state.likeFunction.disliked,
        matched: state.likeFunction.matched
    }
}


export default connect(mapStateToProps, {showSeller, dislikeUser, likeUser, setMatches}) (BuyerPage)


