import React, { PureComponent } from 'react';
import { userData } from '../data/userData'
import { connect } from 'react-redux'
import { showUser } from '../actions/showUser';


class SellerPage extends PureComponent {
    componentDidMount() {
        this.props.showUser()
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
                <button id="likers" name="like">LIKE!</button> 
            </div>

                <button id="switch">></button>
            <div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.currentUser
    }
}



export default connect (mapStateToProps, {showUser})(SellerPage)