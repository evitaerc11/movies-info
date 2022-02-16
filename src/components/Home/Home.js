import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'

import { useDispatch } from 'react-redux'
import {
  fetchAsyncMovies,
  fetchAsyncShows
} from '../../features/movies/movieSlice'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()
  useEffect(() => {
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncShows())
  }, [dispatch])

  useEffect(() => {
    navigate('/search')
  }, [navigate])
  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing />
    </div>
  )
}

export default Home
