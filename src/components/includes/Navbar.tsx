import React, {useState} from 'react'
import Logo from '../../assets/logo.png'
import { FiUserCheck } from 'react-icons/fi'
import { GiShoppingCart } from 'react-icons/gi'
import {RiShoppingBagLine} from 'react-icons/ri'

const Navbar = () => {
  const [search, setSearch] = useState()

  const handleSearch = (e: any) => {
    setSearch(e.target.value)
  }
  const submitSearch = (e:any) => {
    e.preventDefault();
  }
  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="" />
      <form action="" onSubmit={submitSearch}>
        <div className="form-group">
          <input type="text" className="form-control" onChange={handleSearch}/>
          <button className="btn" type="submit">Search</button>
        </div>
      </form>
      <div className="left">
        <div className="user">
          <span className="icon"><FiUserCheck /></span>
          <p>Name</p>
        </div>
        <div className="user">
          <span className="icon"><GiShoppingCart /><span>2</span></span>
          <p>Cart</p>
        </div>
        <button className="sell"><RiShoppingBagLine/> Sell</button>
      </div>
    </div>
  )
}

export default Navbar
