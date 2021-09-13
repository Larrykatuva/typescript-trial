import React from 'react'
import { Link } from 'react-router-dom'
import { MdLaptopMac, MdChevronRight } from 'react-icons/md'
import { AiOutlineHome, AiOutlineCar } from 'react-icons/ai'
import { CgSmartHomeCooker, CgGym } from 'react-icons/cg'
import { GiAmpleDress, GiPocketRadio, GiFoodTruck } from 'react-icons/gi'
import { FaBabyCarriage } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <Link to="">
          <li><MdLaptopMac className="start"/> Computer & Accessories <span className="end"><MdChevronRight/></span></li>
        </Link>
         <Link to="">
          <li><AiOutlineHome className="start"/> Home & Furniture <span className="end"><MdChevronRight/></span></li>
        </Link>
         <Link to="">
          <li><CgSmartHomeCooker className="start"/> Household Appliances <span className="end"><MdChevronRight/></span></li>
        </Link>
         <Link to="">
          <li><AiOutlineCar className="start"/> Vehicle & Spares <span className="end"><MdChevronRight/></span></li>
        </Link>
         <Link to="">
          <li><GiAmpleDress className="start"/> Fashion <span className="end"><MdChevronRight/></span></li>
        </Link>
         <Link to="">
          <li><FaBabyCarriage className="start"/> Baby products <span className="end"><MdChevronRight/></span></li>
        </Link>
         <Link to="">
          <li><CgGym className="start"/> Sports & Fitness <span className="end"><MdChevronRight/></span></li>
        </Link>
         <Link to="">
          <li><GiPocketRadio className="start"/> Electronics <span className="end"><MdChevronRight/></span></li>
        </Link>
         <Link to="">
          <li><GiFoodTruck className="start"/> Food & Beaverages <span className="end"><MdChevronRight/></span></li>
        </Link>
      </ul>
    </div>
  )
}

export default Sidebar
