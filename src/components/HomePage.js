import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'

export default class StartPage extends PureComponent {
    render(){

        return (
        <div>
            Welcome to the Dogpound!
            <div>
            <Link to="/buy">Buy dog</Link>
            </div>
            <div>
            <Link to="/sell">Sell dog</Link>
            </div>
        </div>
        )
    }
}