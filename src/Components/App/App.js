import './App.css'
import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { getHikes } from '../../apiCalls'
import Header from '../Header/Header'
import HikeDetails from '../HikeDetails/HikeDetails'
import Hikes from '../Hikes/Hikes'

class App extends Component {
  constructor() {
    super()
    this.state = {
      hikes: [],
      favoriteHikes: [],
      error: ''
    }
  }

  componentDidMount = async () => {
    try {
      const result = await getHikes()
      const data = await result.json()
      // console.log(data.hikes)
      this.setState({hikes: data.hikes})
    } catch (error) {
      this.setState({
        error: 'There was an error fetching the hikes'
      })
    }
  }

  favoriteHike = (id) => {
    const favHike = this.state.hikes.find(hike => hike.id === id)
    this.state.favoriteHikes.push(favHike)
  }

  render() {
    return (
      <main className='App'>
        <Header />
          <Route exact path='/' render={() => <Hikes hikes={this.state.hikes} />} />
          <Route exact path='/:id' render={({match}) => {
            const singleHike = this.state.hikes.find(hike => hike.id === match.params.id)
            return <HikeDetails hike={singleHike} /> }} />
      </main>
    )
  }
}
export default App;
