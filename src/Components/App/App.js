import React, { Component } from 'react'
import { getHikes } from '../../apiCalls'
import NavBar from '../NavBar/NavBar'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      hikes: [],
      error: ''
    }
  }

  componentDidMount = async () => {
    try {
      const result = await getHikes()
      const data = await result.json()

      this.setState({hikes: data.hikes})
    } catch (error) {
      this.setState({
        error: 'There was an error fetching the hikes'
      })
    }
  }

  render() {
    return (
      <main className='App'>
        <nav>
          <NavBar />
        </nav>
      </main>
    )
  }
}
export default App;
