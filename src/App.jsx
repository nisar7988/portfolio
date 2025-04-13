import React, { useState } from 'react'
import HomePage from './components/HomePage'


const App = () => {
  const [showAuth, setShowAuth] = useState(false);

  return (
    <div>
      <HomePage />
    </div>
  )
}

export default App
