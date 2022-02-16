import React from 'react'
import FormSearch from '../FormSearch/FormSearch'
import ListSearch from '../ListSearch/ListSearch'

import './Search.scss'

const Search = () => {
  return (
    <div className='search__container'>
      <FormSearch />
      <ListSearch />
    </div>
  )
}

export default Search
