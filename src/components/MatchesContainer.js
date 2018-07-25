import * as React from 'react'
import { connect } from 'react-redux'
import Matches from './Matches'

class MatchesContainer extends React.PureComponent {
    render(){
        const matches = this.props.matched
        return (
            <div>   
                <h1>Hi there</h1>
                <p>Awesome</p>
            <Matches matched={this.props.matched} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        matched: state.likeFunction.matched
    }
}

export default connect (mapStateToProps)(MatchesContainer)