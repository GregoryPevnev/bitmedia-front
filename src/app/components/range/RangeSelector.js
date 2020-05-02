import React from "react";
import Picker from "./Picker";

const RangeSelector = ({
  min,
  max,
  from,
  to,
  prefix,
  onSelect
}) => {
  const pickRange = (fromValue, toValue) =>
    onSelect({
      from: Math.max(min, fromValue),
      to: Math.min(max, toValue),
    });

  return (
    <div className="range">
      <p>Statistic from </p>
      <Picker
        text={prefix}
        min={min}
        max={to - 1}
        value={from}
        onPick={fromValue => pickRange(fromValue, to)}
      />
      <p> to </p>
      <Picker
        text={prefix}
        min={from + 1}
        max={max}
        value={to}
        onPick={toValue => pickRange(from, toValue)}
      />
    </div>
  )
};

export default RangeSelector;
