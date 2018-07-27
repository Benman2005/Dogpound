import * as React from 'react'
import { selectUser } from '../components/SellerPage';
import { Link } from 'react-router-dom'


export default function Matches(props){

    return(
        <div className="container-contact100">
            
            <ul>
            {props.matched.map(match => <div className="pics"><li className="matchpic" key= {match.id}> <Link to={ `/users/${match.name}` }><img src={match.photo} ></img></Link> </li></div>)}
            
            </ul>
        </div>
    )
}

// onClick={() => props.selectUser(match.id)}