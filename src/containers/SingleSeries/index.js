import React, { Component } from 'react'

import Loader from '../../components/Loader'


class SingleSeries extends Component  {
  state = {
    show: null
  }

  componentDidMount(){
    const {id} = this.props.match.params

    fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then(response => response.json())
      .then(json => this.setState({ show: json }));
  }

  render() {
    const {show} = this.state
    console.log(show)
    console.log(this.props)
    return (
      <div>
        { show === null && <Loader/>}
        { show !== null && 
        <div> 
          <img style={{marginTop: 30}}src={show.image.medium} alt="show"/>
          <p> {show.name} </p>
          <p> Premiered {show.premiered} </p>
          <p> Rating {show.average} </p>
          <p> Episodes {show._embedded.episodes.length} </p>

        </div>
        }

      </div>
    )
  }
}

export default SingleSeries