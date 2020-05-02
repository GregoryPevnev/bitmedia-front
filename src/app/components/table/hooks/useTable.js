import { useEffect, useRef } from "react";

const widthOf = column => column.getBoundingClientRect().width;

const useTable = items => {
  const headRef = useRef();
  const bodyRef = useRef();

  useEffect(() => {
    const headRow = headRef.current.querySelector("tr");
    const bodyRow = bodyRef.current.querySelector("tr");

    if (headRow && bodyRow) {
      const headColumns = headRow.querySelectorAll("th");
      const bodyColumns = bodyRow.querySelectorAll("td");

      setTimeout(() => {
        headColumns.forEach((headColumn, i) => {
          console.log(widthOf(bodyColumns[i]));

          headColumn.style.width = `${widthOf(bodyColumns[i])}px`;
        });
      }, 0);
    }
  }, [items]);

  return { headRef, bodyRef };
};

export default useTable;
