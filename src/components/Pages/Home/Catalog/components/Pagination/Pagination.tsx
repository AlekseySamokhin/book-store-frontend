import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAppSelector } from '@/redux/store';

import { PaginationStyled } from './Pagination.styles';

const Pagination: React.FC = (): JSX.Element | null => {
  const [searchParams, setSearchParams] = useSearchParams();
  const infoPages = useAppSelector((state) => state.shop.pagination);

  const { pagesQty, currentPage, prevPage, nextPage } = infoPages;

  const [activePage, setActivePage] = useState<number>(
    Number(searchParams.get('page')) || 1,
  );

  const [pages, setPages] = useState<{ page: number; styles: string }[]>([]);

  useEffect(() => {
    const arrayPages = [] as { page: number; styles: string }[];

    new Array(pagesQty).fill('').forEach((_, index) => {
      arrayPages.push({
        page: index + 1,
        styles: `pagination__pages_item ${
          index + 1 === currentPage ? 'pagination__pages_item--active' : ''
        }`,
      });
    });

    setPages(arrayPages);
  }, [currentPage, pagesQty]);

  const handleChangePage = (page: number) => {
    if (currentPage === page || page === 0) {
      return;
    }

    searchParams.set('page', String(page));

    const activePage = searchParams.get('page') || 1;

    setActivePage(Number(activePage));

    setSearchParams(searchParams);
  };

  if (pages.length > 1) {
    return (
      <PaginationStyled>
        <div className="pagination__block">
          <div
            className="pagination__arrow"
            onClick={() => handleChangePage(prevPage)}
          >
            <i className="arrow left"></i>
          </div>
          <div className="pagination__pages">
            {!!pages.length &&
              pages.map(({ page, styles }) => (
                <div
                  key={page}
                  onClick={() => handleChangePage(page)}
                  className={styles}
                ></div>
              ))}
          </div>
          <div
            className="pagination__arrow"
            onClick={() => handleChangePage(nextPage)}
          >
            <i className="arrow right"></i>
          </div>
        </div>
        <p className="pagination__number_pages">
          {activePage} ... {pages.length}
        </p>
      </PaginationStyled>
    );
  }

  return null;
};

export { Pagination };
