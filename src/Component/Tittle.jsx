/** @format */

import React from "react";
import Button from "./Button";

class Tittle extends React.Component {
  state = {
    nama: "Ega",
    umur: 20,
  };
  render() {
    return (
      <div>
        <h1>
          Nama saya {this.state.nama} umur saya {this.state.umur}
        </h1>
        <Button />
      </div>
    );
  }
}

export default Tittle;
