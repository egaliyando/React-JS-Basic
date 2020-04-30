/** @format */
import React from "react";
import List from "../Component/List";
import AddData from "../Component/AddData";

export default class OutputList extends React.Component {
  state = {
    codeathome: [
      { nama: "Rahmat", umur: 21, passion: "security", key: 1 },
      { nama: "Ega", umur: 19, passion: "Designer", key: 2 },
      { nama: "Elfin", umur: 18, passion: "Programmer", key: 3 },
    ],
  };
  addData = (data) => {
    data.key = Math.random();
    let codeathome = [...this.state.codeathome, data];
    this.setState({
      codeathome: codeathome,
    });
  };
  render() {
    return (
      <div>
        <h1>Output List</h1> <List codeathome={this.state.codeathome} />
        <AddData addData={this.addData} />
      </div>
    );
  }
}
