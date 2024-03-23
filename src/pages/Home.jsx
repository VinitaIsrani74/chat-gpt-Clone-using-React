import React from 'react'
import './home.css'
import Sidebar from '../components/sidebar/Sidebar'
import Mainbar from '../components/mainbar/Mainbar'

const Home = () => {
  return (
    <div className="home-page-container">
    <Sidebar />
    <Mainbar />
    </div>
  )
}

export default Home