import React, { PureComponent } from 'react';
import { connect } from 'react-redux'

export default function Matches(props){
    return(

        <div>
            <ul>
            {props.matched.map(match => <li key={match.id}> <img className="match-photo" src={match.photo}></img></li>)}
            
            </ul>
            
        </div>
    )

}