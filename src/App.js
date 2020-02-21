import React, { Component } from 'react'
import { BrowserRouter as HashRouter } from 'react-router-dom'

import Navbar from './components/Navbar'


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navbar />

        </div>
      </HashRouter>
    )
  }
}

export default App