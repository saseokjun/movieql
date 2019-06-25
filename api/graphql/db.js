export let movies = [
  {
    id: 0,
    name: "Avengers",
    score: 80
  },
  {
    id: 1,
    name: "Dark Knight",
    score: 100
  },
  {
    id: 2,
    name: "Infinity war",
    score: 99
  },
  {
    id: 3,
    name: "1987",
    score: 98.9
  },
  {
    id: 4,
    name: "Hello",
    score: 81
  }
]

export const getMovies = () => movies

export const getById = id => {
  const filteredMovie = movies.filter(movie => id === movie.id)
  return filteredMovie[0]
}

export const deleteMovie = id => {
  const cleanedMovie = movies.filter(movie => id !== movie.id)
  if(movies.length > cleanedMovie.length){
    movies = cleanedMovie
    return true
  }else{
    return false
  }
}

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length +1,
    name,
    score
  }
  movies.push(newMovie)
  return newMovie
}