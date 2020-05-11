import React, { Component } from "react";
import Cell from "./cell.jsx";
const Row = (props) => {
  return (
    <tr>
      {props.row.map((cell, i) => (
        <Cell key={i} cellValue={cell} />
      ))}
    </tr>
  );
};

export default Row;
