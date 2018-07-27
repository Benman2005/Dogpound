import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { showSeller} from '../actions/showSeller';
import { dislikeUser } from '../actions/disLikeFunction';
import { likeUser } from '../actions/likeUser'
import { setMatches } from '../actions/matched'
import { Link } from 'react-router-dom'

import '../App.css';

export  class BuyerPage extends PureComponent {
    componentDidMount(){
        this.props.showSeller()
        
    }

    checkMatch = (likedUser) => {
        
        if (this.props.user.liked.includes(this.props.id) === true) { return (
            this.props.setMatches(this.props.user),
            window.alert("You have a match!")
            )
        }
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
            
            <div className="container-contact100">
            <div className="goBack"><Link to ="/"> Go Back </Link></div>
            <div className="wrap-contact100">
            <div className="contact100-form-title" >  
            {this.props.user.name}
                </div>
                <div>
                    <img className = "profileImage" src ={this.props.user.photo}></img>
                </div>
                <div>
               <div className="contact100-form-title"></div>
               <p>
                    {this.props.user.description}
                </p>
                <div>
                </div>
                <div>
                    <button className = "dislike" onClick ={this.handleDislike}>ME NO LIKE!</button> 
                    <button className="like" onClick={this.handleLike}>LIKE!</button> 
                </div>
                <div>
                <button><Link to="/matches">See my matches</Link></button>
                </div>
                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.showSeller,
        liked: state.likeFunction.liked, 
        disliked: state.likeFunction.disliked,
        matched: state.likeFunction.matched,
        id: state.likeFunction.id
    }
}


export default connect(mapStateToProps, {showSeller, dislikeUser, likeUser, setMatches}) (BuyerPage)


