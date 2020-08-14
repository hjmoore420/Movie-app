import React from 'react'
import Link from 'next/link'


class MovieList extends React.Component {
  shorten = (text, maxLength) =>{
    if(text && text.length > maxLength) {
      return text.substr(0,maxLength) + '...'
    }
    return text

  }
  // state = {
  //   count: 0
  // }
  
  render() {
    const {movies} =  this.props
    return (
      <React.Fragment>
        { movies.map(movie => 
          (
              <div key={movie.id} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                    <div className="imageCut">
                    <Link href="/movies[id]" as={`/movies/${movie.id}`}>
                      <a><img className="card-img-top" src={movie.image} alt={movie.name} /></a>
                      </Link>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title">
                      <Link href="/movies[id]" as={`/movies/${movie.id}`}>
                        <a >{movie.name}</a>
                        </Link>
                      </h4>
                      <p className="card-text">{this.shorten(movie.description,200)}</p>
                    </div>
                    <div className="card-footer">
                    <small className="text-muted"> Rating: {movie.rating}</small><br />
                    <small className="text-muted"> Genre: {movie.genre}</small>
                    </div>
              </div>
            </div>
            )
          )
          
         }
        
      </React.Fragment>
    )
  }
}




export default MovieList