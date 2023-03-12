import { useState } from 'react'
import Board from './components/Board'
import './App.css'

function App() {
  const [cardChosen, setCardChosen] = useState<{}>({})

  return (
    <div className="App">
      <h3>8bitMemoryTypeScriptReact</h3>
    <Board cardChosen={cardChosen}/>
    </div>
  )
}

export default App
