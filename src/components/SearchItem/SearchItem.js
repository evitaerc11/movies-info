import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SearchItem.scss'

const SearchItem = ({ item }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/movie/${item.imdbID}`)
  }

  return (
    <div onClick={handleClick} className='list__search__item'>
      <div className='list__item__left'>
        <img
          src={item.Poster !== 'N/A' ? item.Poster : '/images/null.jpg'}
          alt=''
        />
      </div>
      <div className='list__item__right'>
        <h2>{item.Title}</h2>
        <h3>Relesed: {item.Year}</h3>
      </div>
    </div>
  )
}

export default SearchItem
