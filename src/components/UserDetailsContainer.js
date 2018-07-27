import React, {PureComponent} from 'react'
import UserDetails from './components/UserDetails'
import { connect } from 'react-redux'



class UserDetailsContainer extends PureComponent{
    componentDidMount(){

    }
    render(){
        return  <UserDetails user={this.props.matched} />
    }

    mapStateToProps(){

    }
}
const mapStateToProps = (state) => {
    return {
        matched: state.likeFunction.matched,

    }
}

export default connect (mapStateToProps)(UserDetailsContainer)