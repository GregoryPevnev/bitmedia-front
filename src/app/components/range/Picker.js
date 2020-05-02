import React from "react";
import { range } from "../../utils";

const Picker = ({
  text,
  min,
  max,
  value,
  onPick
}) => (
    <label className="range__picker">
      <b>{text}</b>
      <select
        className="range__input"
        value={Math.max(min, value)}
        onChange={e => onPick(e.target.value)}
      >
        {range(min, max).map(val => (
          <option key={val} value={val}>{val}</option>
        ))}
      </select>
    </label>
  );

export default Picker;
