// import { useState } from 'react';

// import { useSearchParams } from 'react-router-dom';

import { PaginationStyled } from './Pagination.styles';

const Pagination: React.FC = (): JSX.Element => {
  // const [searchParams, setSearchParams] = useSearchParams();

  // const [pages, setPages] = useState<string>(1);

  return (
    <PaginationStyled>
      <div className="pagination__arrow">
        <i className="arrow left"></i>
      </div>
      <div className="pagination__pages">
        <div className="pagination__pages_item pagination__pages_item--active"></div>
        <div className="pagination__pages_item"></div>
        <div className="pagination__pages_item"></div>
      </div>
      <div className="pagination__arrow">
        <i className="arrow right"></i>
      </div>
    </PaginationStyled>
  );
};

export { Pagination };
