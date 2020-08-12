import Head from 'next/head'
import {useState} from 'react'
import HeadCode from '../component/head'
import Nav from '../component/navBar'
import Aside from '../component/aside'
import Carousel from '../component/carousel'
import MovieList from '../component/movieList'
import Footer from '../component/footer'

import {getMovies} from '../actions/index'




export default function Home() {
  const movies = getMovies ()
  return (
    <React.Fragment>
      <head>
      <HeadCode />
      </head>
      
      <div>
        
        <Nav />
    
        <div className="home-page">
            <div className="container">
            
              <div className="row">

              <Aside 
              appName={"Movie DB"}
              clickHandler={() => console.log("Hello World")}
              />

                <div className="col-lg-9">
                  <Carousel />

                  <div className="row">

                  <MovieList  movies={movies} />

                    
                  </div>
                </div>
              </div>
            </div>
          </div>
    <Footer />
    </div>
  

    </React.Fragment>
 
  )
}
