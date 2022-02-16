import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import MovieDetails from './components/MovieDetails/MovieDetails'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Footer from './components/Footer/Footer'
import './App.scss'
import Search from './components/Search/Search'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/search' element={<Search />} />
            <Route path='/search/title/:searchTitle' element={<Search />} />
            <Route
              path='/search/title/:searchTitle/page/:pageNumber'
              element={<Search />}
            />

            <Route path='/movie/:imdbID' element={<MovieDetails />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
