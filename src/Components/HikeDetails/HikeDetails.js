import { render } from '@testing-library/react'
// import React, { Component } from 'react'
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { getHikes } from '../../apiCalls'
import compass_icon from '../../Images/compass_icon.png'


import './HikeDetails.css'

const HikeDetails = ({hike, saveFavoriteHike}) => {
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
            <div className='specific-details-container'>
                <p className='details-name'>{hike.name}</p>
                {/* <p className='details-location'>{hike.location}</p> */}
                <p className='details-description'>{hike.description}</p>
                <p className='details-difficulty'><b>Difficulty:</b> {hike.difficulty}</p>
                <p className='details-distance'><b>Distance: </b>{hike.distance} miles round-trip</p>
                <p className='details-elevation'><b>Elevation Gain: </b>{hike.elevation} feet</p>
            </div>
            <div className='image-container'>
                <img src={hike.image} alt={hike.name} className='details-image'/>
            </div>
            <div className='button-container'>
                <button className='favorite-button' onClick={() => saveFavoriteHike(hike.id)}>ADD TO FAVORITES</button>
                {/* <Link to='/'>
                    <button className='home-button'>ALL HIKES</button>
                </Link>
                <Link to='/favorites'>
                <button className='view-favorites'>VIEW FAVORITES</button>
                </Link> */}
            </div>
        </section>
    )
}
export default HikeDetails

const hikesShape = {
    name: PropTypes.string,
    description: PropTypes.string,
    difficulty: PropTypes.string,
    distance: PropTypes.string,
    elevation: PropTypes.string,
    image: PropTypes.string,
    saveFavoriteHike: PropTypes.func,
}

HikeDetails.propTypes = {
    hikes: PropTypes.arrayOf(PropTypes.shape(hikesShape)).isRequired
}