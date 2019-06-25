import React from 'react'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'
import { HOME_PAGE } from './quries'

class Home extends React.Component{
  render(){
    return (
      <Query query={HOME_PAGE}>{(
        {loading, data, error} ) => {
          if(loading) return <span>loading</span>
          if(error) return <span>error</span>
          return data.movies.map(movie => (
            <div key={movie.id}>
              <Link to={`/details/${movie.id}`}>{movie.title}</Link>
            </div>
          ))
        }
      }
      </Query>
    )
  }
}

export default Home