import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { showBuyer } from '../actions/showBuyer';
import { likeUser } from '../actions/likeUser'
import { dislikeUser } from '../actions/disLikeFunction';


class SellerPage extends PureComponent {
    componentDidMount() {
        this.props.showBuyer()
    }
    
    handleLike = () => {
        this.props.showBuyer()
        this.props.likeUser(this.props.user.id)

    }
    handleDislike = () => {
        this.props.showBuyer()
        this.props.dislikeUser(this.props.user.id)

    }
    
    render(){
        
        return (
        <div>
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
            
            <div>
            <button  name = "dislike" onClick ={this.handleDislike}>ME NO LIKE!</button> 
            <button  name="like" onClick={this.handleLike}>LIKE!</button> 
    
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.showBuyer,
        liked: state.likeFunction.liked,
        disliked: state.likeFunction.disliked
    }
}




export default connect (mapStateToProps, {showBuyer, likeUser, dislikeUser})(SellerPage)

