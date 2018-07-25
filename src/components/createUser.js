import React, { PureComponent } from 'react';
import { connect } from 'react-redux'


export default class createUser extends PureComponent {
    componentDidMount() {
    }

    handleChange(){

    }

    handleSubmit() {

    }
    
    
    render(){
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>Name: 
                    <input type='text' onChange={this.handleChange} name="name" ></input>
                </label>
                <label>Age: 
                    <input type='number' onChange={this.handleChange} name="age" ></input>
                </label>
                <label>Description:
                    <input type='text' onChange={this.handleChange} name="description" ></input>
                </label>
                
            
            </form>
        </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//     }
// }




// export default connect (mapStateToProps, {showBuyer, likeUser, dislikeUser, setMatches})(SellerPage)

