import React from 'react'

import './search-panel.css'

const SearchPanel = ({filter, onchange}) => (
  <div className="form-group d-md-flex mb-2">
    <input placeholder="type to search" type="text" className="form-control small-margin" onChange={onchange} />
    <div className="btn-group ml-md-1 d-flex justify-content-sm-center" role="group">
      <button className="btn btn-primary" type="button" onClick={() => filter('all')}>All</button>
      <button className="btn btn-danger" type="button" onClick={() => filter('important')}>Important</button>
      <button className="btn btn-success" type="button" onClick={() => filter('done')}>Done</button>
    </div>
  </div>
)

export default SearchPanel
