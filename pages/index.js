import {useState, useEffect} from 'react'

import Aside from '../components/aside'
import Carousel from '../components/carousel'
import MovieList from '../components/movieList'

import {getMovies} from '../actions'


export default function Home(props) {
  const {images} = props
 
  return (
    <React.Fragment>
      
      <div>
        
          <div className="home-page">
          <div className="container">
              <div className="row">
              <Aside appName={"Movie DB"}/>
                  <div className="col-lg-9">
                    <Carousel  images={images }/>
                    <div className="row">
                    <MovieList  movies={props.movies || [ ]} />  
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
        </div>
</React.Fragment>
  )
}

Home.getInitialProps = async () => {
  const movies = await getMovies()
  const images = movies.map(movie =>({    
      id:`image-${movie.id}`,
      image: movies.image }))

  return{
    movies,
    images
  }
}
