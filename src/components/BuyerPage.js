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
        
        if (this.props.user.liked.includes(11) === true) {return (
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
            <div>
                <div>
                    <h1>Buy a doggy! 
                        Look at these cute little doggies
                    </h1>     
                </div>
                <div>
                    <img className = "profileImage" src ={this.props.user.photo}></img>
                </div>
                <div>
                    {this.props.user.name}
                </div>
                <div>
                    {this.props.user.age}
                </div>
                <div>
                    {this.props.user.description}
                </div>
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


