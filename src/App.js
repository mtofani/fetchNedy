import logo from './logo.svg'
import './App.css'
import React, { useState, useEffect } from 'react'
import getMocks from '../src/services/getMocks'

function App() {
  const [datos, dataSet] = useState([])

  async function anyNameFunction() {
    let resp = await getMocks()
    dataSet(resp)
    console.log(resp)
  }

  useEffect(() => {
    dataSet(datos)
    anyNameFunction()
    console.log('TRAJE API')
    //document.getElementsByTagName('HTML')[0].setAttribute('data-theme', localStorage.getItem('theme'))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>Mock de datos de NEdy</p>
        <ul>
          {console.log('HOLA' + datos)}
          {datos.slice(0, 5).map(item => (
            <li key={item.ip}>
              {item.hostname} {item.ip} {item.model.substring(-1, 25)}..
            </li>
          ))}
        </ul>
      </header>
    </div>
  )
}

export default App
