import React from 'react'
import { Query } from 'react-apollo'
import { MOVIE_DETAILS } from './quries'


class Detail extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Query query={MOVIE_DETAILS} variables={{movieId: this.props.match.params.movieId}}>{(
        {loading, data, error} ) => {
          if(loading) return <span>loading</span>
          if(error) return <span>error</span>
          console.log(data)
          return (
            <div>
              <div>{data.movie.title}</div>
              <div>{data.suggestions[0].id}</div>
            </div>
          )
        }
      }
      </Query>
    )
  }
}

export default Detail