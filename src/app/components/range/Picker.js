import React from "react";
import { range } from "../../utils";

const Picker = ({ min, max, value, onPick }) => (
  <div>
    <select value={Math.max(min, value)} onChange={e => onPick(e.target.value)}>
      {range(min, max).map(val => (
        <option key={val} value={val}>{val}</option>
      ))}
    </select>
  </div>
);

export default Picker;
