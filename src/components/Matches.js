import * as React from 'react'
import { selectUser } from '../components/SellerPage';
import { Link } from 'react-router-dom'


export default function Matches(props){

    return(
        <div className="container-contact100">
        
            {props.matched.map(match => 
                <div className="pics" key= {match.id}> 
                    <Link to={ `/users/${match.name}` }>
                        <img src={match.photo} ></img>
                    </Link> 
                </div>)}

        </div>
    )
}

// onClick={() => props.selectUser(match.id)}