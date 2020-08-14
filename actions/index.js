const MOVIE_DATA = [
  {
    id: '1',
    name: 'The Shawshank Redemption',
    releaseYear: 1994,
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    longDesc: "None of that prepared him for the arena, the crowd, the tense hush, the towering puppets of light from a half-open service hatch framed a heap of discarded fiber optics and the dripping chassis of a skyscraper canyon. The semiotics of the bright void beyond the chain link. Its hands were holograms that altered to match the convolutions of the spherical chamber. Splayed in his elastic g-web, Case watched the other passengers as he made his way down Shiga from the sushi stall he cradled it in his jacket pocket. Now this quiet courtyard, Sunday afternoon, this girl with a ritual lack of urgency through the center of his closed left eyelid. Why bother with the movement of the train, their high heels like polished hooves against the gray metal of the bright void beyond the chain link. The semiotics of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. She peered at the clinic, Molly took him to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the wall of a skyscraper canyon. The girls looked like tall, exotic grazing animals, swaying gracefully and unconsciously with the movement of the train, their high heels like polished hooves against the gray metal of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses.",
    rating: 4.8,
    genre: 'drama',
    image: 'https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg'
  },
  {
    id: '2',
    name: 'The Dark Knight',
    releaseYear: 2008,
    description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    longDesc: "None of that prepared him for the arena, the crowd, the tense hush, the towering puppets of light from a half-open service hatch framed a heap of discarded fiber optics and the dripping chassis of a skyscraper canyon. The semiotics of the bright void beyond the chain link. Its hands were holograms that altered to match the convolutions of the spherical chamber. Splayed in his elastic g-web, Case watched the other passengers as he made his way down Shiga from the sushi stall he cradled it in his jacket pocket. Now this quiet courtyard, Sunday afternoon, this girl with a ritual lack of urgency through the center of his closed left eyelid. Why bother with the movement of the train, their high heels like polished hooves against the gray metal of the bright void beyond the chain link. The semiotics of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. She peered at the clinic, Molly took him to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the wall of a skyscraper canyon. The girls looked like tall, exotic grazing animals, swaying gracefully and unconsciously with the movement of the train, their high heels like polished hooves against the gray metal of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses.",
    rating: 4.7,
    genre: 'action, crime, drama',
    image: 'https://img.cinemablend.com/filter:scale/quill/c/3/8/0/f/4/c380f4f12cfeec19f0c40c6f57db188f2f98cca8.jpg?mw=600'
  },
  {
    id: '3',
    name: 'Lord of the Rings',
    releaseYear: 2004,
    description: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
    longDesc: "None of that prepared him for the arena, the crowd, the tense hush, the towering puppets of light from a half-open service hatch framed a heap of discarded fiber optics and the dripping chassis of a skyscraper canyon. The semiotics of the bright void beyond the chain link. Its hands were holograms that altered to match the convolutions of the spherical chamber. Splayed in his elastic g-web, Case watched the other passengers as he made his way down Shiga from the sushi stall he cradled it in his jacket pocket. Now this quiet courtyard, Sunday afternoon, this girl with a ritual lack of urgency through the center of his closed left eyelid. Why bother with the movement of the train, their high heels like polished hooves against the gray metal of the bright void beyond the chain link. The semiotics of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. She peered at the clinic, Molly took him to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the wall of a skyscraper canyon. The girls looked like tall, exotic grazing animals, swaying gracefully and unconsciously with the movement of the train, their high heels like polished hooves against the gray metal of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses.",
    rating: 4.9,
    genre: 'adventure, drama, fantasy',
    image: 'https://img.cinemablend.com/filter:scale/quill/0/f/5/2/a/6/0f52a6843a25c1a5c1f9a0c00548cad9e1d912e2.jpg?mw=600'
  }
]


export const getMovies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MOVIE_DATA)
      // reject('Cannot fetch data!')
    }, 50)
  })
}

export const getMovieById = (id) => {

  return new Promise((resolve, reject) => {
    const movieIndex = MOVIE_DATA.findIndex(m => m.id === id)
    const movie = MOVIE_DATA[movieIndex]

    setTimeout(() => resolve(movie), 50)
  })
}