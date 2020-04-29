import React from "react";
import Marks from "./Marks";
import Dates from "./Dates";
import Chart from "./Chart";
import { WIDTH, HEIGHT } from "./constants";
import { dateToTime, timeToDate } from "../../utils/dates";

const percentageFrom = (value, maximum) => {
  if (!value) return 0;

  return value / maximum * 100;
};

const toValues = (values, start, end) => {
  const startTime = dateToTime(start), endTime = dateToTime(end);
  const dayTime = 24 * 60 * 60 * 1000;

  const result = [];

  const maximumValue = values.reduce((prev, { value }) => Math.max(prev, value), 0);

  const dateValues = values.reduce((table, { date, value }) => ({
    ...table,
    [date]: value,
  }), {});

  for (let iter = startTime; iter <= endTime; iter += dayTime) {
    const currentDate = timeToDate(iter);

    result.push({
      value: percentageFrom(dateValues[currentDate], maximumValue),
      date: currentDate,
    });
  }

  return {
    records: result,
    limit: maximumValue,
  };
};

const Graph = ({ data, startDate, endDate }) => {
  const { records, limit } = toValues(data, startDate, endDate);

  return (
    <div className="container">
      <div className="svg-container">
        <svg version="1.1" viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="svg-content">
          <Marks limit={limit} />
          <Dates records={records} />
          <Chart records={records} />
        </svg>
      </div>
    </div>
  );
};

export default Graph;
