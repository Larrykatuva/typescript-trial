import React from 'react'
import Navbar from '../includes/Navbar'
import Bag from '../../assets/Bag.jpg'
import ProductDesc from '../includes/ProductDesc'
import Category from '../includes/Category'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import Seller from '../includes/Seller'

const ShowProduct = () => {
  return (
    <>
      <Navbar/>
      <div className="show-product row">
        <div className="col-xl-8 col-md-8 col-sm-12">
          <div className="row">
            <div className="col-xl-6 col-md-6 col-sm-12">
              <img src={Bag} alt="" />
            </div>
            <ProductDesc/>
          </div>
        </div>
        <Seller/>
      </div>
      <div className="categories">
        <div className="title"><h4>More Products from Seller</h4> <span>See All <AiOutlineDoubleRight/></span></div>
        <Category/>
      </div>
      <div className="categories">
        <div className="title"><h4>Related Products</h4> <span>See All <AiOutlineDoubleRight/></span></div>
        <Category/>
      </div>
    </>
  )
}

export default ShowProduct
