import React from 'react'

const Title = ({titleone,titletwo}) => {
  return (
    <>
        <div className="text-center mb-5 titles">
            <span className="text-warning fw-thin">{titletwo}</span>
            <h2 className='fw-bold'>{titleone}</h2>
        </div>
    </>
  )
}

export default Title