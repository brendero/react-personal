import React from 'react'

export const MainWrapper = (props) => {
  return (
    <div>
    <main className="content-wrapper">
      {props.children} 
    </main>

    <footer>
      <p>&copy;2017 - Brent De Roeck</p>
    </footer>
    </div>   
  )
}
