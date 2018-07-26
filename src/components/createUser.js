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

    handleSubmit = (event) => {
        event.preventDefault()
        const newUser = this.props.newUser(this.state.name, this.state.age, this.state.description, this.state.type)
        console.log(newUser)

    
    }

    render(){

        if (!this.state) return 'Loading...'
        if (this.props.type === 'seller') return (
            <div>
                {`Hi ${this.props.name} so you'd like to give your dog up for adoption...`}
                <button><Link to="/sell"> See available adopters! </Link></button>
            </div> )

        else if (this.props.type ==='buyer') return (
            <div>
            {`Hi ${this.props.name} so you'd like to adopt a dog...`}
            <button><Link to="/buy"> Have a look at the dogs! </Link></button>
            </div> )
        
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

                    <label>
                        <select value={this.state.type} name="type" onChange={this.handleChange.bind(this)} defaultValue="buyer">
                            <option value="buyer">Adopt</option>
                            <option value="seller">Sell</option>
                        </select>
                    </label>
            
                    <button onSubmit={this.handleSubmit}> SUBMIT JA</button>
                </form>
        
                    
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.likeFunction.name,
        age: state.likeFunction.age,
        description: state.likeFunction.description,
        type: state.likeFunction.type
    }
}




export default connect (mapStateToProps, { newUser })(createUser)

