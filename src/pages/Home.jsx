import React from 'react'
import { Link } from 'react-router-dom'
import Cards from '../components/Cards'
import Collection from '../components/Collection'
import Work from '../components/Work'
import Team from '../components/Team'
import Story from '../components/Story'

const Home = () => {
  return (
    <>
        <div className="home">
            <div className="container">
                <div className="home_content">
                    <h1>
                        Ceramics studio
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci massa, dapibus quis molestie sit amet, 
                        pharetra vitae dolor. Praesent auctor, dui id maximus sagittis, lectus enim pharetra quam,
                        ut laoreet tortor metus ut ipsum.
                    </p>
                    <div className="home_btn">
                        <Link to="/shop">Show More</Link>
                    </div>
                </div>
            </div>
        </div>
        <Cards />
        <Collection />
        <Work />
        <Team />
        <Story />
    </>
  )
}

export default Home