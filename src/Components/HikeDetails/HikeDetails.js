import { render } from '@testing-library/react'
// import React, { Component } from 'react'
import React from 'react'
import { getHikes } from '../../apiCalls'
import './HikeDetails.css'

const HikeDetails = ({hike}) => {
// class HikeDetails extends Component {
//     constructor() {
//         super()
//         this.state = {
//             singleHike: {},
//             error: ''
//         }
//     }

    // componentDidMount = async () => {
    //     try {
    //       const result = await getHikes()
    //       const data = await result.json()
    //       const hikeMatch = await data.find(hike => hike.id === Number(this.props.hikeId))
    //       this.setState({singleHike: hikeMatch})

    //     } catch (error) {
    //       this.setState({
    //         error: 'Sorry, no hikes available. Try searching for the trail again!'
    //       })
    //     }
    //   }

    return (
        <section className='details-container'>
            <div className='image-container'>
                <p className='details-name'>{hike.name}</p>
                <img src={hike.image} alt={hike.name} className='details-image'/>
            </div>
            <div className='specific-details-container'>
                <p className='details-location'>{hike.location}</p>
                <p className='details-description'>{hike.description}</p>
                <p className='details-difficulty'><b>Difficulty: </b>{hike.difficulty}</p>
                <p className='details-distance'>{hike.distance} miles round-trip</p>
                <p className='details-elevation'>{hike.elevation} feet of elevation gain</p>
                <button className='favorite-button'>ADD TO FAVORITES</button>
            </div>
        </section>
    )
}
export default HikeDetails