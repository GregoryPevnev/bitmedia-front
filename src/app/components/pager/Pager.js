import React from "react";
import Page from "./Page";
import PageButton from "./PagerButton";
import { dedupliate } from "../../utils";

const RANGE = 3;

const pagesAround = page => {
  const pages = [];

  for (let i = page - RANGE; i <= page + RANGE; i++)
    pages.push(i);

  return pages;
};

const pagesList = (pages, page) => {
  const list = dedupliate([
    ...pagesAround(1),
    ...pagesAround(page),
    ...pagesAround(pages)
  ]);

  return list.filter(
    page => page >= 1 && page <= pages
  ).sort(
    (page1, page2) => Number(page1) - Number(page2)
  );
}

const withGaps = pages =>
  pages.reduce((preparedPages, page, index) => {
    if (index === 0) return [page];

    if ((page - pages[index - 1]) > 1) return [...preparedPages, null, page];

    return [...preparedPages, page];
  }, []);

const Pager = ({ pages, page, onPage }) => {
  const isFirst = page === 1;
  const isLast = page === pages;

  return (
    <div>
      {/* TODO: SVG */}
      <PageButton
        isActive={!isFirst}
        onClick={() => onPage(page - 1)}
      >Prev
      </PageButton>

      <div>
        {withGaps(pagesList(pages, page)).map((page, i) => (
          page === null ?
            // TODO: Gap with Input (if enough time)
            <Page key={`gap-${i}`} onClick={console.log}>...</Page> :
            <Page key={page} onClick={() => onPage(page)}>{page}</Page>
        ))}
      </div>

      <PageButton
        isActive={!isLast}
        onClick={() => onPage(page + 1)}
      >
        Next
      </PageButton>
    </div>
  );
};

export default Pager;
