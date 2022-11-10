// import { render } from '@testing-library/react'
import React, { Component } from 'react'
import { getHikes } from '../../apiCalls'
import './HikeDetails.css'

class HikeDetails extends Component {
    constructor() {
        super()
        this.state = {
            singleHike: '',
            error: ''
        }
    }

    componentDidMount = async () => {
        try {
          const result = await getHikes()
          const data = await result.json()
          const hikeMatch = await data.find(hike => hike.id === Number(this.props.hikeId))

          this.setState({singleHike: hikeMatch})
          console.log(this.state.singleHike)
        } catch (error) {
          this.setState({
            error: 'Sorry, no hikes available. Try searching for the trail again!'
          })
        }
      }

render() {
    // const hike = this.state.singleHike
    return (
        <div className='hike-details-container'>
            <div className='hike-details-card'>
                <h3>{singleHike.name}</h3>
                {/* <p className='details-location'>{singleHike.location}</p>
                <img src={singleHike.image} alt={singleHike.name} className='details-image'/>
                <p className='details-description'>{singleHike.description}</p>
                <p className='details-difficulty'>{singleHike.difficulty}</p>
                <p className='details-distance'>{singleHike.distance}</p>
                <p className='details-elevation'>{singleHike.elevation} feet of gain</p> */}
            </div>
        </div>
        )
    }
}
export default HikeDetails