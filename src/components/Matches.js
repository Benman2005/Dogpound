import * as React from 'react'
import { selectUser } from '../components/SellerPage';
import { Link } from 'react-router-dom'


export default function Matches(props){

    return(

        <div>
            <ul>
            {props.matched.map(match => <li key={match.id}> <Link to={ `/users/${match.name}` }><img className="match-photo" src={match.photo} ></img></Link> </li>)}
            
            </ul>
        </div>
    )

}

// onClick={() => props.selectUser(match.id)}