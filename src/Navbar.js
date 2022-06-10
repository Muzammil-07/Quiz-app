import React from 'react'

function Navbar() {
  return (
<div className='App' style={{alignSelf:'center'}}>
    <nav className="navbar bg-light">
    <form className="container-fluid justify-content-start">
      <button className="btn btn-outline-success me-2" type="button">Main button</button>
      <button className="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
    </form>
  </nav>
  </div>
  )
}

export default Navbar