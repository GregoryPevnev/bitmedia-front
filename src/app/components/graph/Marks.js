import React from "react";

const markStep = maximum => maximum / 6;

const selectMarks = maximum => {
  const marks = [];
  const step = markStep(maximum);

  for (let iter = 0; iter < maximum; iter += step)
    marks.push(Math.ceil(iter));

  if (marks[marks.length - 1] !== maximum)
    marks.push(maximum);

  return marks;
};

const markPosition = (marks, index) =>
  // Starting from top -> Reverse
  // Calculating SPACE BETWEEN -> Subtracting 1
  `${100 - (10 + 80 / (marks.length - 1) * index)}%`;

const Marks = ({ limit }) => {
  const selectedMarks = selectMarks(limit);
  const marks = selectedMarks.map((mark, index) => ({
    mark,
    position: markPosition(selectedMarks, index)
  }));

  return (
    <>
      <g className="line" id="mark-lines">
        {marks.map(({ mark, position }) => (
          <line key={mark} x1="5%" x2="95%" y1={position} y2={position} />
        ))}
      </g>

      <g transform="translate(-5, 5)" className="label label--vertical" id="marks">
        {marks.map(({ mark, position }) => (
          <text key={mark} x="5%" y={position}>{mark}</text>
        ))}
      </g>
    </>
  );
};

export default Marks;
