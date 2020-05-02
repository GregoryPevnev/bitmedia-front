import React from "react";
import { stringDate } from "../../utils";

const dateStep = dates => {
  if (dates <= 7) return 1;

  const total = dates % 2 === 0 ? 6 : 7;

  return dates / total;
};

const selectDates = values => {
  const dates = [];
  const step = dateStep(values.length);

  for (let iter = 0; iter < values.length; iter += step) {
    const index = Math.min(Math.floor(iter), values.length - 1);

    dates.push(values[index].date);
  }

  // Making sure the last label belongs to the last element
  const lastDate = values[values.length - 1].date;

  if (lastDate !== dates[dates.length - 1])
    dates.push(lastDate);

  return dates;
};

const dateLabelPosition = (totalDates, index) =>
  // Calculating SPACE BETWEEN -> Subtracting 1
  `${10 + 80 / (totalDates - 1) * index}%`;

const Dates = ({ records }) => {
  const dates = selectDates(records);

  return (
    <g className="label label--horizontal" id="dates">
      {dates.map((date, index) => (
        <text key={date} x={dateLabelPosition(dates.length, index)} y="100%">
          {stringDate(date)}
        </text>
      ))}
    </g>
  );
}

export default Dates;
