import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { showBuyer } from '../actions/showBuyer';
import { likeUser } from '../actions/likeUser'


class SellerPage extends PureComponent {
    componentDidMount() {
        this.props.showBuyer()
    }
    
    handleClick = () => {
        this.props.showBuyer()
        this.props.likeUser(this.props.user)

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
            <button className="dislike" name = "dislike" onClick ={this.handleBuyer}>ME NO LIKE!</button> 
            <button className="like" name="like" onClick={this.handleClick}>LIKE!</button> 
    
            </div>
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



export default connect (mapStateToProps, {showBuyer, likeUser})(SellerPage)
