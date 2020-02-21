import React, { Component } from 'react'
import { BrowserRouter as HashRouter } from 'react-router-dom'

import Navbar from './components/Navbar'
import Admin from './components/Admin'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navbar />
          <Admin />
        </div>
      </HashRouter>
    )
  }
}

export default App