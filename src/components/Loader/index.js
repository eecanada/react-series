import React from 'react'
import loaderSrc from '../../assets/loading.gif'


const Loader = (props) => (
  <div>
    <img 
      src={loaderSrc}
      alt="loading icon" 
      style={{width: 75, marginTop: 20}}/>
  </div> 
)

export default Loader; 