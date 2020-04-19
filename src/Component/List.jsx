/** @format */

import React from "react";

const List = (props) => {
  const { codeathome } = props;
  const list = codeathome.map((person) => {
    return (
      <div
        key={person.key}
        style={{ boxShadow: "0px 0px 3px 2px gray", margin: 20, padding: 20, width: 300 }}
      >
        <p>Nama {person.nama}</p>
        <p>Umur {person.umur}</p>
        <p>Passion {person.passion}</p> <br />
      </div>
    );
  });
  return <div>{list}</div>;
};

export default List;
