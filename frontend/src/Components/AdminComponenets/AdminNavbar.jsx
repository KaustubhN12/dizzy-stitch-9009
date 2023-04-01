import React from 'react'
import "../../CSS/RestAdminCss.css"
import {Link as ScrollLink} from "react-scroll"

const AdminNavbar = () => {
  return (
    <>

    <div className='mainadmindiv'>
     
    <ScrollLink to="restaurant" smooth={true}  duration={500} >
     <div className='admindiv' >Restaurant </div>
     </ScrollLink>

     <ScrollLink to="salon" smooth={true}  duration={500} >
     <div className='admindiv'  >Salon</div>
     </ScrollLink>

     <ScrollLink to="health" smooth={true}  duration={500} >
     <div className='admindiv' >Health</div>
     </ScrollLink>

     <ScrollLink to="gift" smooth={true}  duration={500} >
     <div className='admindiv' >Gift</div>
     </ScrollLink>

    </div>
    
    </>
  )
}

export default AdminNavbar