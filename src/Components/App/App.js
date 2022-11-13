import './App.css'
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { getHikes } from '../../apiCalls'
import ScrollRestoration from 'react-scroll-restoration'
import Header from '../Header/Header'
import HikeDetails from '../HikeDetails/HikeDetails'
import FavoriteHikes from '../FavoriteHikes/FavoriteHikes'
import Hikes from '../Hikes/Hikes'

class App extends Component {
  constructor() {
    super()
    this.state = {
      hikes: [],
      favoriteHikes: [],
      filteredHikes: [],
      error: ''
    }
  }

  componentDidMount = async () => {
    try {
      const result = await getHikes()
      const data = await result.json()

      this.setState({ hikes: data.hikes })
    } catch (error) {
      this.setState({
        error: 'There was an error fetching the hikes - please reload and try again.'
      })
    }
  }

  saveFavoriteHike = (id) => {
    const favHike = this.state.hikes.find(hike => hike.id === id)
    if (!this.state.favoriteHikes.includes(favHike)) {
      const favState = { ...this.state }
      favState.favoriteHikes.push(favHike)
      this.setState({ favoriteHikes: [...favState.favoriteHikes] })
      // console.log(this.state.favoriteHikes)
    }
    // if (!this.state.favoriteHikes.includes(favHike)) {
    //   this.state.favoriteHikes.push(favHike)
    // }
  }

  render() {
    return (
      <main className='App'>
        <p className='load-error'>{this.state.error}</p>
        <Header />
        <ScrollRestoration />
        <Switch>
          <Route exact path='/' render={() => <Hikes hikes={this.state.hikes} />} />
          <Route exact path='/favorites' render={() => <FavoriteHikes favHikes={this.state.favoriteHikes} />} />
          <Route exact path='/:id' render={({ match }) => {
            const singleHike = this.state.hikes.find(hike => hike.id === match.params.id)
            return <HikeDetails hike={singleHike} saveHike={this.saveFavoriteHike} />
          }} />
        </Switch>
      </main>
    )
  }
}
export default App;
