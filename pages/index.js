import {useState, useEffect} from 'react'
import Nav from '../component/navBar'
import Aside from '../component/aside'
import Carousel from '../component/carousel'
import MovieList from '../component/movieList'
import Footer from '../component/footer'
import {getMovies} from '../actions'


// export default function Home() {
//   const [movies, setMoveis] = useState([])
//   const [count, setCount] = useState(0)
//   useEffect(() =>{
//     const fetchData = async() =>{
//       const resMovies= await getMovies()
//       setMoveis(resMovies)
//     }
//     fetchData();
//  /*    getMovies().then((movies) => {
//       setMoveis(movies)
//     }) */
//   }, [count]) 
//   return (
//     <React.Fragment>
//       <head>
//           <title>Home</title>
//           <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
//           <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
//           <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
//           <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
//       </head>
//       <div>
//         <Nav />
//           <div className="home-page">
//           <div className="container">
//               <button onClick={() => setCount(count)}>Click me</button>
//               <div className="row">
//               <Aside appName={"Movie DB"}/>
//                   <div className="col-lg-9">
//                     <Carousel />
//                     <div className="row">
//                     <MovieList  movies={movies} />  
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//         <Footer />
//         </div>
// </React.Fragment>

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      movies:[]
    }

  }

//  state = {
//    movies: []
//  } 

  componentDidMount(){
    getMovies().then((movies) => {
      this.setState({movies})

    })
 }
 
render(){
  const { movies } = this.state
  return (
    <div>
      <head>
          <title>Home</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
      </head>
      <div>
        <Nav />
          <div className="home-page">
          <div className="container">
              <div className="row">
              <Aside appName={"Movie DB"}/>
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
    </div>
  )
}
}
export default Home