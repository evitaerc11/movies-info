import React from 'react'
import ReactPaginate from 'react-paginate'
import { useSelector } from 'react-redux'
import { getSearchs } from '../../features/movies/movieSlice'
import SearchItem from '../SearchItem/SearchItem'

import './ListSearch.scss'

const ListSearch = () => {
  const data = useSelector(getSearchs)

  let pages = Math.ceil(parseInt(data?.totalResults) / 10)
  console.log(pages)

  return (
    <div className='list__search'>
      {data &&
        data.Search?.map((item) => (
          <SearchItem key={item.imdbID} item={item} />
        ))}
      {pages > 0 && (
        <div className='container'>
          <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            pageCount={pages}
            containerClassName={'pagination justify-content-center'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            activeClassName={'active'}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
          />
        </div>
      )}
    </div>
  )
}

export default ListSearch
