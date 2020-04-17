/** @format */

import React from "react";
import MyButton from "./Button";

function Button(props) {
  return <button>{props.button}</button>;
}

class Tittle extends React.Component {
  state = {
    nama: "Ega",
    umur: 20,
    uang: 0,
  };

  tambahUang = () => {
    let a = this.state.uang;
    this.setState({
      uang: a + 200000,
    });
  };

  kurangiUang = () => {
    let b = this.state.uang;
    if (b > 0) {
      this.setState({
        uang: b - 200000,
      });
    }
  };

  resetDompet = () => {
    this.setState({
      uang: 0,
    });
  };

  render() {
    return (
      <div>
        <h1>
          Nama saya {this.state.nama} umur saya {this.state.umur}
        </h1>
        <Button button='Download' />
        <Button button='Upload' />
        <MyButton mybutton='Select' judul='Ini Judulnya' deskripsi='ini Deskripsi' />
        <p>Uang Saya Didompet Rp. {this.state.uang}</p>
        <button onClick={this.tambahUang}>Tambah Uang</button>
        <button onClick={this.kurangiUang}>Kurangi Uang</button>
        <button onClick={this.resetDompet}>Reset Dompet</button>
      </div>
    );
  }
}

export default Tittle;
