import React, { PureComponent } from 'react';
import { userData } from '../data/userData'
import { connect } from 'react-redux'
import { showUser } from '../actions/showUser';
import { likeUser } from '../actions/likeFunction'


class SellerPage extends PureComponent {
    componentDidMount() {
        this.props.showUser()
    }
    
    handleClick = () => {
        // this.props.showUser()
        this.props.likeUser()

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
                <button id="likers" name = "dislike">ME NO LIKE!</button> 
                <button id="likers" name="like" onClick={this.handleClick}>LIKE!</button> 
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.currentUser,
        liked: state.likeFunction
    }
}



export default connect (mapStateToProps, {showUser, likeUser})(SellerPage)
