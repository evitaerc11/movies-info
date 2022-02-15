import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieApi from '../../common/apis/movieApi'

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async () => {
    try {
      const movieText = 'Fast'
      const res = await movieApi('/', {
        params: {
          s: movieText,
          type: 'movie'
        }
      })
      return res.data
    } catch (error) {
      return error.message
    }
  }
)

export const fetchAsyncShows = createAsyncThunk(
  'movies/fetchAsyncShows',
  async () => {
    try {
      const showText = 'Friends'
      const res = await movieApi('/', {
        params: {
          s: showText,
          type: 'series'
        }
      })
      return res.data
    } catch (error) {
      return error.message
    }
  }
)

export const fetchAsyncDetails = createAsyncThunk(
  'movies/fetchAsyncDetails',
  async (id) => {
    try {
      const res = await movieApi('/', {
        params: {
          i: id,
          Plot: 'full'
        }
      })
      return res.data
    } catch (error) {
      return error.message
    }
  }
)

export const fetchAsyncSearch = createAsyncThunk(
  'movies/fetchAsynSearch',
  async (title) => {
    try {
      const res = await movieApi('/', {
        params: {
          s: title,
          type: 'movie'
        }
      })
      return res.data
    } catch (error) {
      return error.message
    }
  }
)

const initialState = {
  movies: {},
  shows: {},
  details: {},
  searchs: {}
}

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeDetails: (state) => {
      state.details = {}
    }
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {},
    [fetchAsyncMovies.fulfilled]: (state, action) => {
      return { ...state, movies: action.payload }
    },
    [fetchAsyncMovies.rejected]: () => {},
    [fetchAsyncShows.fulfilled]: (state, action) => {
      return { ...state, shows: action.payload }
    },
    [fetchAsyncDetails.fulfilled]: (state, action) => {
      return { ...state, details: action.payload }
    },
    [fetchAsyncSearch.fulfilled]: (state, action) => {
      return { ...state, searchs: action.payload }
    }
  }
})

export const { removeDetails } = movieSlice.actions

export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getDetails = (state) => state.movies.details
export const getSearchs = (state) => state.movies.searchs

export default movieSlice.reducer
