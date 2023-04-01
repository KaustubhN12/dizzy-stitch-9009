import React from 'react'
import RestaurantAdmin from '../Components/AdminComponenets/RestaurantAdmin'
import SalonAdmin from '../Components/AdminComponenets/SalonAdmin'
import HealthAdmin from '../Components/AdminComponenets/HealthAdmin'
import GiftAdmin from '../Components/AdminComponenets/GiftAdmin'
import "../CSS/RestAdminCss.css"
import AdminNavbar from '../Components/AdminComponenets/AdminNavbar'

const Admin = () => {
  return (
    <>
    <AdminNavbar />
    <RestaurantAdmin />
    <hr className='hr2' />
    <SalonAdmin />
    <hr className='hr2' />
    <HealthAdmin />
    <hr className='hr2' />
    <GiftAdmin />
    
    
    
    </>
  )
}

export default Admin