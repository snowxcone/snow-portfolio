import React from 'react'
import ReactDOM from 'react-dom'
import '../static/styles/index.css'

const App = () => {
  return (
    <div className="App">
      woot woot
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
