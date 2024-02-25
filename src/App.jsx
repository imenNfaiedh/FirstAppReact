import { useState } from 'react'
import * as React from "react"
function App() {
  const title ="React";
  return (
    <div>
      <h1> hello {title}
      </h1>
      <label htmlFor="search"> Search :</label>
      <input type ="text" id="search" />
    </div>
  )
}
export default App;
