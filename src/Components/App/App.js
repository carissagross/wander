import React, { Component } from 'react'
import { getHikes } from '../../apiCalls'
import Header from '../Header/Header'
import Hikes from '../Hikes/Hikes'
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
      console.log(data.hikes)

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
        <Header />
        <hr
            style={{
                color: 'black'
            }}
            />
        <Hikes hikes={this.state.hikes} />
      </main>
    )
  }
}
export default App;
