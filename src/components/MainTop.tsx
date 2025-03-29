import React from 'react'

const MainTop = ({title, text, img}:any) => {
  return (
    <>

        <div className="top-container">
        <div className="container">
          <div className="top-text-container">
            <h2 className="top-h2">
              {title}
            </h2>
            <p className="top-p">
              {text}
            </p>
          </div>
        </div>
      </div> 
    </>
  )
}

export default MainTop
