import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { showBuyer } from '../actions/showBuyer';

export  class BuyerPage extends PureComponent {
    componentDidMount(){
        this.props.showBuyer()
    }
    render(){

        return (
        <div>
            <h1></h1>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    user: state.showBuyer
}

export default connect(mapStateToProps, {showBuyer}) (BuyerPage)
