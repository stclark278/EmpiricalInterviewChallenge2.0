import React, { Component } from "react";
import Vehicles from "./Vehicles";

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 0,
      showComponent: false
    };
  }

  populateSelectBox() {
    const vehicleTypeList = [];
    for (let i = 0; i < this.props.vehicleTypes.length; i++)
      vehicleTypeList.push(
        <option
          key={this.props.vehicleTypes[i].id}
          value={this.props.vehicleTypes[i].id}
        >
          {this.props.vehicleTypes[i].type}
        </option>
      );
    return vehicleTypeList;
  }

  // changeHandler(e) {
  //   this.setState({
  //     vehicleTypeID: e.target.key,
  //     showComponent: true
  //   });
  // }

  render() {
    return (
      <div>
        <select
          value={this.state.value}
          onChange={(e) => this.setState({ data: 1, showComponent: true })}
        >
          <option value="">Select a Vehicle Type</option>
          {this.populateSelectBox()}
        </select>
        {this.props.vehicleTypeID}
        {this.state.showComponent ? (
          <Vehicles vehicleTypeID={this.state} />
        ) : null}
      </div>
    );
  }
}

export default Dropdown;
