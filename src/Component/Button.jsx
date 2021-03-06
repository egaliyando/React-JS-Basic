/** @format */

import React from "react";

const Button = (props) => {
  return (
    <div>
      <p>{props.judul}</p>
      <p>{props.deskripsi}</p>
      <button>{props.mybutton}</button>
    </div>
  );
};

export default Button;
