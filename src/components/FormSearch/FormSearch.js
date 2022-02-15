import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAsyncSearch } from '../../features/movies/movieSlice'

import './FormSearch.scss'

const FormSearch = () => {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchAsyncSearch(text))
    setText('')
  }

  return (
    <form className='form__search' onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={handleTextChange}
        placeholder='Enter title ...'
        className='input__search'
        type='text'
      />
      <button className='btn__search'>
        <i className='fa-solid fa-magnifying-glass'></i>
      </button>
    </form>
  )
}

export default FormSearch
