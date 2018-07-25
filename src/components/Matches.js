import * as React from 'react'

export default function Matches(props){

    return(

        <div>
            <ul>
                Hi
            {props.matched.map(match => <li key={match.id}> <img className="match-photo" src={match.photo}></img></li>)}
            
            </ul>
        </div>
    )

}