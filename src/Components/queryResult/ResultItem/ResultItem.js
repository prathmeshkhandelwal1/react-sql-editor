import React, { Component } from "react";
import "./ResultItem.css";

class ResultItem extends Component {
  state = {
    customerID: this.props.details.customerID,
    contactName: this.props.details.contactName,
    companyName: this.props.details.companyName,
    country: this.props.details.country,
    phone: this.props.details.phone,
  };

  //sending query for changung data can be done here.

  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div className="ResultItem">
        <input
          type="text"
          name="customerID"
          value={this.state.customerID}
          onChange={this.onChangeHandler}
        />
        <input
          type="text"
          name="contactName"
          value={this.state.contactName}
          onChange={this.onChangeHandler}
        />
        <input
          type="text"
          name="companyName"
          value={this.state.companyName}
          onChange={this.onChangeHandler}
        />
        <input
          type="text"
          name="country"
          value={this.state.country}
          onChange={this.onChangeHandler}
        />
        <input
          type="text"
          name="phone"
          value={this.state.phone}
          onChange={this.onChangeHandler}
        />
      </div>
    );
  }
}

export default ResultItem;
