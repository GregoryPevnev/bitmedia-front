import React from "react";
import { X_AXIS, Y_AXIS, X_OFFSET, Y_OFFSET, SMOOTH_FACTOR } from "./constants";

const initialMove = ({ x, y }) => `M ${x} ${y}`;

const controlLine = (firstPoint, secondPoint) => {
  const lengthX = secondPoint.x - firstPoint.x;
  const lengthY = secondPoint.y - firstPoint.y;

  return {
    length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
    angle: Math.atan2(lengthY, lengthX)
  };
};

const controlPoint = (current, previous, next, reverse = false) => {
  const p = previous || current;
  const n = next || current;

  const o = controlLine(p, n);

  const angle = o.angle + (reverse ? Math.PI : 0);
  const length = o.length * SMOOTH_FACTOR;

  return {
    x: current.x + Math.cos(angle) * length,
    y: current.y + Math.sin(angle) * length,
  };
};

const curveMove = (points, i) => {
  const cps = controlPoint(points[i - 1], points[i - 2], points[i]);
  const cpe = controlPoint(points[i], points[i - 1], points[i + 1], true);

  return `C ${cps.x},${cps.y} ${cpe.x},${cpe.y} ${points[i].x},${points[i].y}`;
};

// Getting percentages for each value (Stored / Pre-Compiled)
const toPoints = values => values.map(({ value }, i) => ({
  x: (values.length - i - 1) / (values.length - 1) * 100,
  y: value
}));

// Coordinates for the graph (SVG)
//   - Reverse (Subtracting value from 100)
const toCoordinates = points => points.map(({ x, y }) => ({
  x: ((100 - x) / 100 * X_AXIS + X_OFFSET),
  y: ((100 - y) / 100 * Y_AXIS + Y_OFFSET),
}));

const toPath = coordinates => {
  const [initialPivot, ...pivots] = coordinates;

  const initial = initialMove(initialPivot);

  const moves = pivots.reduce(
    (moves, _, index) => [...moves, curveMove(coordinates, index + 1)],
    []
  ).join(", ");

  return `${initial} ${moves}`;
};

const Chart = ({ records }) => {
  const coordinates = toCoordinates(toPoints(records));
  const firstCoordinate = coordinates[0];
  const lastCoordinate = coordinates[coordinates.length - 1];

  return (
    <>
      <g className="point">
        <circle r="8" id="start-point" cx={firstCoordinate.x} cy={firstCoordinate.y} />
        <circle r="8" id="end-point" cx={lastCoordinate.x} cy={lastCoordinate.y} />
      </g>

      <path className="graph" id="graph" d={toPath(coordinates)} />
    </>
  );
};

export default Chart;
