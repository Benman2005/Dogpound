import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { showBuyer } from '../actions/showBuyer';

export  class BuyerPage extends PureComponent {
    componentDidMount(){
        this.props.showBuyer()
    }
    render(){

        return (
        <div>
            <h1>Buy Dog Here!</h1>
         
            <img src ={this.props.user.photo}></img>
            <div>
                <button id="likers" name = "dislike">ME NO LIKE!</button> 
                <button id="likers" name="like">LIKE!</button> 
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.showBuyer
    }
}

export default connect(mapStateToProps, {showBuyer}) (BuyerPage)
