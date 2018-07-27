import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom'

export default class StartPage extends PureComponent {

    componentDidMount (){

    }

    render(){

        return (
            <div>
            <div className="container-contact100">
            <div className="wrap-contact100">
            <span className="contact100-form-title"><Link to="/"><img src="https://i.pinimg.com/originals/d2/cc/2a/d2cc2a2b8da27f79e2bbb1ea59a23f3c.png" width="200px" height="200px"></img></Link></span>
            </div>
            <div>
            <button><Link to="/buy">I want to adopt a dog!</Link></button>
            </div>
            <div>
            <button><Link to="/sell">I want to give my dog up for adoption..</Link></button>
            </div>
        </div>
        </div>
        )
    }
}