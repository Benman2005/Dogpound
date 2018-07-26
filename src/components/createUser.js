import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { newUser } from '../actions/newUser'
import { Link } from 'react-router-dom'


class createUser extends PureComponent {
    constructor(){ 
        super()
        this.state = { }

        this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange (evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    // handleChange = (event) => {
    //     this.setState({
    //         name: event.target.value,
    //         age: event.target.value,
    //         description: event.target.value
    //     })
    // }


    handleSubmit = (event) => {
        event.preventDefault()
        this.props.newUser(this.state.name, this.state.age, this.state.description)

    }
    
    
    render(){

        if (!this.state) return 'Loading...'
        if (this.props.name) return (
            <div>
                {`Hi ${this.props.name.toUpperCase()}, are you looking to adopt or sell a dog?`}
                    <button><Link to="/buy">ADOPT!</Link></button>

                    <button><Link to="/sell">GIVE UP up for adoption..</Link></button> 
            </div>
        )
        return (
            <div>
            
                <form name="form" onSubmit={this.handleSubmit} >
                
                
                    <label>Name: 
                        <input type='text' name="name" value={this.state.name} onChange={this.handleChange.bind(this)}></input>
                    </label>
                    <label>Age: 
                        <input type='number' onChange={this.handleChange.bind(this)} name="age" value={this.state.age}></input>
                    </label>
                    <label>Description:
                        <input type='text' onChange={this.handleChange.bind(this)} name="description" value={this.state.description}></input>
                    </label>
            
                    <button onSubmit={this.handleSubmit}> SUBMIT JA</button>
                </form>
            
{/*             
                    <button><Link to="/buy">ADOPT!</Link></button>

                    <button><Link to="/sell">GIVE UP up for adoption..</Link></button> } */}
                    
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.likeFunction.name,
        age: state.likeFunction.age,
        description: state.likeFunction.description
    }
}




export default connect (mapStateToProps, {newUser})(createUser)

