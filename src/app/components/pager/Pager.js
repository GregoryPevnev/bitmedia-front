import React from "react";
import Page from "./Page";
import Gap from "./Gap";
import PageButton from "./PagerButton";
import { dedupliate } from "../../utils";

const EDGE_RANGE = 2;
const MID_RANGE = 1;

const pagesAround = (page, range) => {
  const pages = [];

  for (let i = page - range; i <= page + range; i++)
    pages.push(i);

  return pages;
};

const pagesList = (pages, page) => {
  const list = dedupliate([
    ...pagesAround(1, EDGE_RANGE),
    ...pagesAround(page, MID_RANGE),
    ...pagesAround(pages, EDGE_RANGE),
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
    <div className="pager">
      <PageButton
        back
        active={!isFirst}
        onClick={() => onPage(page - 1)}
      />

      <div className="pager__pages">
        {withGaps(pagesList(pages, page)).map(currentPage => (
          currentPage === null ?
            <Gap /> :
            <Page
              key={currentPage}
              isActive={currentPage === page}
              onClick={() => onPage(currentPage)}
            >
              {currentPage}
            </Page>
        ))}
      </div>

      <PageButton
        active={!isLast}
        onClick={() => onPage(page + 1)}
      />
    </div>
  );
};

export default Pager;
