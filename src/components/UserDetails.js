import React, {PureComponent} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class UserDetails extends PureComponent{
    componentDidMount(){
        // const address = window.location.pathname
        // const split = address.split( '/' )
        // const userName = split.pop()

        // console.log(userName)
        // function findName (user){
        //     return user.name === userName
        // }
        // console.log(this.props.matched.find(findName))
    }
    render(){
        const address = window.location.pathname
        const split = address.split( '/' )
        const userName = split.pop()

        console.log(userName)
        function findName (user){
            return user.name === userName
        }
        // console.log(this.props.matched.find(findName))
        {console.log(this.props.matched.find(findName).photo)}
        
        return (
            <div>
                {console.log(this.props.matched[0].name)    }
                {console.log(this.props.matched)    }
                <div>

                <img src={this.props.matched.find(findName).photo}></img>
                </div>
                <div>
                    Name: {this.props.matched.find(findName).name}
                </div>
                <div>
                    Age: {this.props.matched.find(findName).age}
                </div>
                <div>
                Description: {this.props.matched.find(findName).description}
                </div>
                <Link to="/matches">Go back to your matches</Link>
            </div>
        )
    }
   
}
const mapStateToProps = (state) => {
    return {
        matched: state.likeFunction.matched,
    }
    
}

// console.log(window.location.pathname)

export default connect (mapStateToProps)(UserDetails)