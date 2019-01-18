import React from 'react'

const AppHeader = ({ remaining, done }) => {
  let text = '';
  if (!remaining && done > 0) text += 'All done!'
  if (remaining) {
    if (done) text += `${remaining} to do, ${done} done`;
    else text += `${remaining} to do`
  }
  
  return (
    <div className="">
      <h2 className="mb-0">My To-Dos</h2>
      <small className="d-flex justify-content-end text-muted">{text}</small>
    </div>
  )
}

export default AppHeader
