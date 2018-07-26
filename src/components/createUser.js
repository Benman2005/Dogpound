import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { newUser } from "../actions/newUser";
import { Link } from "react-router-dom";


class createUser extends PureComponent {
  constructor() {
    super();
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  // handleChange = (event) => {
  //     this.setState({
  //         name: event.target.value,
  //         age: event.target.value,
  //         description: event.target.value
  //     })
  // }

  handleSubmit = event => {
    event.preventDefault();
    const newUser = this.props.newUser(
      this.state.name,
      this.state.age,
      this.state.description,
      this.state.type
    );
    console.log(newUser);
  };

  render() {
    if (!this.state) return "Loading...";
    if (this.props.type === "seller")
      return (
        <div>
          {`Hi ${
            this.props.name
          } so you'd like to give your dog up for adoption...`}
          <button>
            <Link to="/sell"> See available adopters! </Link>
          </button>
        </div>
      );
    else if (this.props.type === "buyer")
      return (
        <div>
          {`Hi ${this.props.name} so you'd like to adopt a dog...`}
          <button>
            <Link to="/buy"> Have a look at the dogs! </Link>
          </button>
        </div>
      );

    return (
      <div>
        <div className="container-contact100">
          <div className="wrap-contact100">
            {/* <form class="contact100-form validate-form"> */}
            <span className="contact100-form-title"><img src="https://i.pinimg.com/originals/d2/cc/2a/d2cc2a2b8da27f79e2bbb1ea59a23f3c.png" width="200px" height="200px"></img></span>
            <form
              className="contact100-form validate-form"
              name="form"
              onSubmit={this.handleSubmit}
            >
              <div
                className="wrap-input100 validate-input"
                data-validate="Name is required"
              >
                <span className="label-input100" >Name </span>
                <input
                  className="input100"
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange.bind(this)}
                />
                <span className="focus-input100" />
              </div>
                <span className="label-input100">Age</span>
                <input
                  className="input100"
                  type="text"
                  placeholder="Enter your age"
                  onChange={this.handleChange.bind(this)}
                  name="age"
                  value={this.state.age}
                />
                <span className="focus-input100" />
              <div
                className="wrap-input100 validate-input"
                data-validate="Age is required"
              >
              </div>
              
              <div className="wrap-input100 input100-select">
                <span className="label-input100">Looking to :</span>
                <div>
                  <select className="selection-2" name="type" value={this.state.type} onChange={this.handleChange.bind(this)} >
                  <option>Choose </option>
                    <option value="buyer">Adopt</option>
                    <option value="seller">Sell</option>
                  </select>
                </div>
              </div>

              <div className="wrap-input100 validate-input" data-validate = "Message is required">
					<span className="label-input100">Description</span>
                    <textarea className="input100" placeholder="Your description here..."
                  onChange={this.handleChange.bind(this)}
                  name="description"
                  value={this.state.description}
                />
                <span className="focus-input100"></span>
				</div>

              <div className="container-contact100-form-btn">
                <div className="wrap-contact100-form-btn">
                  <div className="contact100-form-bgbtn" />
                  <button
                    className="contact100-form-btn"
                    onSubmit={this.handleSubmit}
                  >
                    <span>
                      Submit
                      <i
                        className="fa fa-long-arrow-right m-l-7"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.likeFunction.name,
    age: state.likeFunction.age,
    description: state.likeFunction.description,
    type: state.likeFunction.type
  };
};

export default connect(
  mapStateToProps,
  { newUser }
)(createUser);
