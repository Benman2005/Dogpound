import * as React from 'react'
import { connect } from 'react-redux'
import Matches from './Matches'
import { selectUser } from '../actions/selectUser';
import { Link } from 'react-router-dom'




class MatchesContainer extends React.PureComponent {
    // componentDidMount() {
    //    this.props.selectUser()
    // }

    
    
    render(){
        function NoMatches() {
            return <div className="container-contact100">No matches yet.. go back to keep swiping..
            <button><Link to="/"> Back</Link></button></div> 
            const type = this.props.type
            return <p>No matches yet.. go back to keep swiping..
            <button><Link to="/">Back</Link></button></p> 
          }
        function BackToSell(){
            return (
                <div className="container-contact100"> 
                <div className="wrap-contact100">
                    <p>Go back to swiping :)
                <button><Link to="/sell">Back</Link></button></p> 
                </div>
                </div>
            )
        }
        function BackToBuy(){
            return (
                <div className="container-contact100"> 
                <div className="wrap-contact100">
                    <p>Go back to swiping :)
                    <button><Link to="/buy">Back</Link></button></p> 
                </div>
                </div>
            )
        }
        
        if (this.props.matched.length === 0 && this.props.type === "seller"){
              return (
                <div className="container-contact100"> 
                <div className="wrap-contact100">
              <p> No matches yet.. </p>
               <BackToSell />
                </div>
                </div>
            )
        }
        if (this.props.matched.length === 0 && this.props.type === "buyer"){
            return (
                <div className="container-contact100"> 
                <div className="wrap-contact100">
              <p> No matches yet.. </p>
              <BackToBuy />
                </div>
                </div>
          )
      }
        if (this.props.type === "seller"){
            return (
                <div className="container-contact100"> 
                <div className="wrap-contact100">
                    <Matches matched={this.props.matched} selectUser={this.selectUser}/>
                    <BackToSell />
                </div>
                </div>
            )
        }
        if (this.props.type === "buyer"){
            return (
                <div className="container-contact100"> 
                <div className="wrap-contact100">
                    <Matches matched={this.props.matched} selectUser={this.selectUser}/>
                    <BackToBuy />
                </div>
                </div>
            
            )
        }
        else return (
            <div className="container-contact100"> 
            <div className="wrap-contact100">
            <Matches matched={this.props.matched} selectUser={this.selectUser}/>

            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        matched: state.likeFunction.matched,
        type: state.likeFunction.type
    }
}

export default connect (mapStateToProps, {selectUser})(MatchesContainer)