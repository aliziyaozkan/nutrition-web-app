import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router'
function Navbar() {
  return (
    <div className='brand'>

      <div className='brand-left'>
        <img className='logo' src='./src/images/diet.png' />
        fitNutrition
      <div className='brand-center'>
        <Link className='elm' to='/' > 🏠 Anasayfa </Link>
        <Link className='elm' to='/diyetler'>🍴 Diyetler</Link>
        <Link className='elm' to='/kalori-hesabi'> 📏 Kalori Hesapla</Link>
        </div>
        </div>
    </div>
  )
}

export default Navbar