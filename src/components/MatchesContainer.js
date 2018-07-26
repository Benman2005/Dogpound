import * as React from 'react'
import { connect } from 'react-redux'
import Matches from './Matches'
import { selectUser } from '../actions/selectUser';


class MatchesContainer extends React.PureComponent {
    componentDidMount() {
       this.props.selectUser()
    }
    
    render(){
        // const matches = this.props.matched
        return (
            <div>   
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