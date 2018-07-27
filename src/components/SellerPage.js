import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { showBuyer } from '../actions/showBuyer';
import { likeUser } from '../actions/likeUser'
import { dislikeUser } from '../actions/disLikeFunction';
import { setMatches } from '../actions/matched'
import Matches from './Matches'
import { Link } from 'react-router-dom'
// import { buyers } from '../data/userData'



class SellerPage extends PureComponent {
    componentDidMount() {
        this.props.showBuyer()
    }
    
    checkMatch = (likedUser) => {
        

        if (this.props.user.liked.includes(this.props.id) === true) { return (
            this.props.setMatches(this.props.user),
            window.alert("You have a match!")
            )
        }
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
        <div className="container-contact100">
         <div>
            <button ><Link to="/matches" className="goBack" ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT21QXEElcz4venITWZD1XmideA3R1BM706V9v0oiLAbItA10EG" height="50px" width="50px" ></img></Link></button>
            </div>
        {/* <div ><Link to ="/"> Go Back </Link></div> */}
            <div className="wrap-contact100">
            <div className="contact100-form-title" >
                {this.props.user.name}
            </div>
            {/* <div className="contact100-form-title">
                {this.props.user.age}
            </div> */}
            <div> 
                <img className = "profileImage" src={this.props.user.photo}></img>        
            </div>
           <div className="contact100-form-title"></div>
           <p >
                {this.props.user.description}
            </p>
      
           
            <div>
                <button  className = "dislike" onClick ={this.handleDislike}>ME NO LIKE!</button> 
                <button  className="like" onClick={this.handleLike}>LIKE!</button> 
            </div>
            
            {/* <Matches matched={this.props.matched} /> */}
        </div>
        </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.showBuyer,
        liked: state.likeFunction.liked,
        disliked: state.likeFunction.disliked,
        matched: state.likeFunction.matched,
        id: state.likeFunction.id
    }
}




export default connect (mapStateToProps, {showBuyer, likeUser, dislikeUser, setMatches})(SellerPage)

