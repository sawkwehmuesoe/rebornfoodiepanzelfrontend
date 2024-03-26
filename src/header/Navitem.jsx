import React from 'react'

// eslint-disable-next-line react/prop-types
const Navitem = ({navname,navlink}) => {
  return (
    <>
        <li className="nav-item py-sm-2"><a href={navlink} className="nav-link mx-2 menuitems">{navname}</a></li>
    </>
  )
}

export default Navitem