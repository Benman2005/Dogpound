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
            <div className="container-contact100">
            
            <div className="wrap-contact100">
                {console.log(this.props.matched[0].name)    }
                {console.log(this.props.matched)    }
                <div className="contact100-form-title"></div>
                 <p>  Name: {this.props.matched.find(findName).name}
                </p>
                <div  >

                <img className = "profileImage" src={this.props.matched.find(findName).photo}></img>
                </div>
                
                <div><p>
                    Age: {this.props.matched.find(findName).age}
                    </p>
                </div>
                <div>
                    <p>
                Description: {this.props.matched.find(findName).description}
                </p>
                </div>
                <div>
                <button><Link to="/matches">Go Back to matches</Link></button>
                </div>
            </div>
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