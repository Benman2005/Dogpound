import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { showBuyer } from '../actions/showBuyer';
import { likeUser } from '../actions/likeUser'
import { dislike } from '../actions/disLikeFunction';
import { showBuyer } from '../actions/showBuyer';


class SellerPage extends PureComponent {
    componentDidMount() {
        this.props.showUser()
        this.props.showBuyer()
    }
    
    handleLike = () => {
        this.props.showBuyer()
        this.props.likeUser(this.props.user)

    }
    handleDislike = () => {
        this.props.showBuyer()
        this.props.dislike(this.props.user)

    }
    
    render(){
        const displayStyle = {
            display: 'block',
            
          }
        return (
        <div>
            <div className="container">
            <div className="buddy" style={displayStyle}>
            <h1>Sell your dog! 
            Have a look at our trusted buyers:</h1>
            {console.log(this.props.user)}
            <div> 
                <img src={this.props.user.photo}></img>
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
            </div>
            
            <div>
            <button className="dislike" name = "dislike" onClick ={this.handleDislike}>ME NO LIKE!</button> 
            <button className="like" name="like" onClick={this.handleLike}>LIKE!</button> 
    
            </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.currentUser,
        liked: state.likeFunction,
        disliked: state.likeFunction
    }
}




export default connect (mapStateToProps, {showBuyer, likeUser, dislike})(SellerPage)

