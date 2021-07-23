import React, { Component } from "react";
import axios from "axios";

class Vehicles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicles: [],
      vehicleTypeID: this.props.vehicleTypeID
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://my-json-server.typicode.com/brian-anderson-iowa/interviewData/vehicles"
      )
      .then((response) => {
        console.log(response);
        this.setState({ vehicles: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  populateTable() {
    const vehicleList = [];
    for (let i = 0; i < this.state.vehicles.length; i++) {
      if (this.state.vehicles[i].vehicleTypeId === this.state.vehicleTypeID) {
        vehicleList.push(
          <tr key={this.state.vehicles.id}>
            <td key={this.state.vehicles[i].vehicleTypeId}>
              {this.state.vehicles[i].vehicleTypeId}
            </td>
            <td key={this.state.vehicles[i].make}>
              {this.state.vehicles[i].make}
            </td>
            <td key={this.state.vehicles[i].model}>
              {this.state.vehicles[i].model}
            </td>
            <td key={this.state.vehicles[i].year}>
              {this.state.vehicles[i].year}
            </td>
          </tr>
        );
      }
    }
    return vehicleList;
  }

  render() {
    return (
      <div>
        <table key="table">
          <thead key="thead">
            <tr key="0">
              <th key="VehicleTypeID">VehicleTypeID</th>
              <th key="Make">Make</th>
              <th key="Model">Model</th>
              <th key="Year">Year</th>
            </tr>
          </thead>
          <tbody key="tbody">{this.populateTable()}</tbody>
        </table>
      </div>
    );
  }
}

export default Vehicles;
