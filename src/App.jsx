  import React from 'react'
import HomePage from './components/HomePage'
import MovingTriangle from './components/MovingTriangle'

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <MovingTriangle />
      <div className="relative z-10">
        <HomePage />
      </div>
    </div>
  )
}

export default App
