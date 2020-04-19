/** @format */
import React from "react";
import List from "../Component/List";

export default class OutputList extends React.Component {
  state = {
    codeathome: [
      { nama: "Rahmat", umur: 20, passion: "security", key: 1 },
      { nama: "Ega", umur: 20, passion: "Designer", key: 2 },
      { nama: "Elfin", umur: 20, passion: "Programmer", key: 3 },
    ],
  };
  render() {
    return (
      <div>
        {" "}
        <h1>Output List</h1> <List codeathome={this.state.codeathome} />
      </div>
    );
  }
}
