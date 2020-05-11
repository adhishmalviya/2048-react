import React from "react";
const Cell = (props) => {
  let value = props.cellValue === 0 ? "" : props.cellValue;
  return (
    <td>
      <div className="cell">
        <div className="number">{props.cellValue}</div>
      </div>
    </td>
  );
};

export default Cell;
