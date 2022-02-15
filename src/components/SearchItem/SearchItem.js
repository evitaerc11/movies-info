import React from 'react'
import './SearchItem.scss'

const SearchItem = ({ item }) => {
  return (
    <div className='list__search__item'>
      <div className='list__item__left'>
        <img src={item.Poster} alt='' />
      </div>
      <div className='list__item__right'>
        <h2>{item.Title}</h2>
        <h3>Relesed: {item.Year}</h3>
      </div>
    </div>
  )
}

export default SearchItem
