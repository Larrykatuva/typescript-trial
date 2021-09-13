import React from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import {BsStarHalf} from 'react-icons/bs'

const ProductDesc = () => {
  return (
    <div className="col-xl-6 col-md-6 col-sm-12">
      <h4 className="title">3PCS/SET Fashion Handbags for Ladies PU Leather High Quality Handbags for Women Pink one size</h4>
      <h5 className="pricing">KSh 1,399 <span className="offer">72% off</span></h5>
      <h5 className="before"><del>Ksh 2000</del></h5>
      <p className="rating"><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/><AiOutlineStar/> <span>Rating</span></p>
      <div className="description">
        <p>Condition <span>New</span></p>
        <p>Model <span>Gucci</span></p>
        <p>Condition <span>New</span></p>
        <p>Condition <span>New</span></p>
        <p>Condition <span>New</span></p>
      </div>
    </div>
  )
}

export default ProductDesc
