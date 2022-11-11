import React from 'react'
import './FavoriteHikes.css'

const FavoriteHikes = ({hikes}) => {
    console.log(hikes)

return (
    <section className='favorites'>
        <div className='favorites-title'>
            <h3>FAVORITE HIKES</h3>
        </div>
        <div className='favorites-container'>
        </div>
    </section>
    )
}
export default FavoriteHikes