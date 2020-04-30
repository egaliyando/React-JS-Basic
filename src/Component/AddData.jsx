import React, { Component } from "react";

class AddData extends Component {
  state = {
    nama: null,
    umur: null,
    passion: null,
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addData(this.state);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="nama">Nama :</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="umur">Umur :</label>
          <input type="text" id="umur" onChange={this.handleChange} />
          <label htmlFor="nama">Passion "</label>
          <input type="text" id="passion" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default AddData;
