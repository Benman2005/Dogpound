import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { newUser } from '../actions/newUser'

class createUser extends PureComponent {

    state = {name: ''}

    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault()
        console.log('hello')
        this.props.newUser()
    
    
    }
    
    
    render(){
        console.log(this.state)
        if (!this.state) return 'Loading...'
        return (
        <div>
            
            <form onSubmit={this.handleSubmit}>
                <label>Name: 
                    <input type='text' name="name" value={this.state.name} onChange={this.handleChange.bind(this)}></input>
                    {/* value={this.state.name} */}
                </label>
                <label>Age: 
                    {/* <input type='number' onChange={this.handleChange} name="age" value={this.state.age}></input> */}
                </label>
                <label>Description:
                    {/* <input type='text' onChange={this.handleChange} name="description" value={this.state.age}></input> */}
                </label>
                
            
            </form>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.name
    }
}




export default connect (mapStateToProps, {newUser})(createUser)

