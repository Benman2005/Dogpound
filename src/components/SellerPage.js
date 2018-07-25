import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { showBuyer } from '../actions/showBuyer';
import { likeUser } from '../actions/likeUser'
import { dislikeUser } from '../actions/disLikeFunction';
import { setMatches } from '../actions/matched'
import Matches from './Matches'


class SellerPage extends PureComponent {
    componentDidMount() {
        this.props.showBuyer()

    }
    
    checkMatch = (likedUser) => {
        // const foundId = buyers.id.filter(buyer => buyer === this.props.user.id)
        
        if (this.props.user.liked.includes(11) === true) {return this.props.setMatches(this.props.user)}
    }


    handleDislike = () => {
        this.props.showBuyer()
        this.props.dislikeUser(this.props.user.id)
    }

    handleLike = () => {
        this.props.showBuyer()
        this.props.likeUser(this.props.user.id)
        this.checkMatch(this.props.user.id)
    }
   
    
    render(){
        return (
        <div>
            <h1>Sell your dog! 
            Have a look at our trusted buyers:</h1>
        
            <div> 
                <img className = "profileImage" src={this.props.user.photo}></img>
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
            <button  className = "dislike" onClick ={this.handleDislike}>ME NO LIKE!</button> 
            <button  className="like" onClick={this.handleLike}>LIKE!</button> 
    
            </div>

            <Matches matched={this.props.matched} />
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.showBuyer,
        liked: state.likeFunction.liked,
        disliked: state.likeFunction.disliked,
        matched: state.likeFunction.matched
    }
}




export default connect (mapStateToProps, {showBuyer, likeUser, dislikeUser, setMatches})(SellerPage)

