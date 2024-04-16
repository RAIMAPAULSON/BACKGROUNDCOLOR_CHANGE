import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Button from "./components/Button"
import './App.css'

function App() {
  const [backgroundcolor, setBackgroundColor] = useState("");

  const changeBackground = (color) => {
    document.body.style.backgroundColor = color;

  };

  return (
    <div className='App' style={{ backgroundColor: backgroundcolor }}>
      <div>
        <a></a>
        <a target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Backgroundcolor Change</h1>
      </div>
      <div className="card buttons" style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <Button colorName='red' changeBackground={changeBackground} />
        <Button colorName='blue' changeBackground={changeBackground} />
        <Button colorName='green' changeBackground={changeBackground} />
        <Button colorName='yellow' changeBackground={changeBackground} />
      </div>
    </div>

  )
}

export default App
