import React, { useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchAsyncSearch, getSearchs } from '../../features/movies/movieSlice'
import SearchItem from '../SearchItem/SearchItem'

import './ListSearch.scss'

const ListSearch = () => {
  const navigate = useNavigate()

  const { searchTitle } = useParams()
  const { pageNumber } = useParams()

  const dispatch = useDispatch()

  const data = useSelector(getSearchs)

  let pages = Math.ceil(parseInt(data?.totalResults) / 10)

  const handlePageClick = (e) => {
    // console.log(e.selected + 1)
    navigate(`/search/title/${searchTitle}/page/${e.selected + 1}`)
  }

  useEffect(() => {
    dispatch(fetchAsyncSearch({ title: searchTitle, page: pageNumber || 1 }))
  }, [dispatch, pageNumber, searchTitle])

  return (
    <div className='list__search'>
      {data &&
        data.Search?.map((item) => (
          <SearchItem key={item.imdbID} item={item} />
        ))}
      {pages > 0 && (
        <div className='pagination'>
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            pageCount={pages}
            onPageChange={handlePageClick}
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
