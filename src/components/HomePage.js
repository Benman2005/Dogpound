import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'

export default class StartPage extends PureComponent {

    componentDidMount (){

    }

    render(){

        return (
        <div>
            Welcome to the Dogpound!
            <div>
            <button><Link to="/buy">I want to adopt a dog!</Link></button>
            </div>
            <div>
            <button><Link to="/sell">I want to give my dog up for adoption..</Link></button>
            </div>
        </div>
        )
    }
}