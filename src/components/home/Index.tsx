import React from 'react'
import Navbar from '../includes/Navbar'
import Sidebar from '../includes/Sidebar'
import Slide from '../includes/Carousel'
import Category from '../includes/Category'
import {AiOutlineDoubleRight} from 'react-icons/ai'
const Index = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="slider">
          <Slide/>
        </div>
      </div>
      <div className="categories">
        <div className="title"><h4>Hot Categories</h4> <span>See All <AiOutlineDoubleRight/></span></div>
        <Category/>
      </div>
      <div className="categories">
        <div className="title"><h4>Featured Categories</h4> <span>See All <AiOutlineDoubleRight/></span></div>
        <Category/>
      </div>
      <div className="categories">
        <div className="title"><h4>Custom Categories</h4> <span>See All <AiOutlineDoubleRight/></span></div>
        <Category/>
      </div>
    </div>
  )
}

export default Index
