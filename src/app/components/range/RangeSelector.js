import React from "react";
import Picker from "./Picker";

const RangeSelector = ({ min, max, from, to, onSelect }) => {
  const pickRange = (fromValue, toValue) =>
    onSelect({
      from: Math.max(min, fromValue),
      to: Math.min(max, toValue),
    });

  return (
    <div>
      <Picker
        min={min}
        max={to - 1}
        value={from}
        onPick={fromValue => pickRange(fromValue, to)}
      />
      <Picker
        min={from + 1}
        max={max}
        value={to}
        onPick={toValue => pickRange(from, toValue)}
      />
    </div>
  )
};

export default RangeSelector;
