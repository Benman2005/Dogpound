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
          }
        
        if (this.props.matched.length === 0){
              return (
              <NoMatches />
              )
        }
        
        else return (
            <div className="container-contact100">
            <Matches matched={this.props.matched} selectUser={this.selectUser}/>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        matched: state.likeFunction.matched
    }
}

export default connect (mapStateToProps, {selectUser})(MatchesContainer)