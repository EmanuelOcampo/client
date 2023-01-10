import React from 'react'
import Wrapper from '../../assets/wrappers/Booking'
import { Link } from 'react-router-dom'
import { FaCalendar } from "react-icons/fa"
import {IoIosTime} from 'react-icons/io'
import {MdContactPhone} from 'react-icons/md'
import {SiEventbrite} from 'react-icons/si'

const Bookings = () => {
  return ( 
    <Wrapper>
      <div className='row'>
        <div className="col-md">
          <header>
            <div className='main-icon'>P</div>
            <div className='info'>
              <h5>Celebrant's Name</h5>
              <p>location or adress</p>
            </div>
          </header>
          <div className='content'>
            <div className='content-center'>
              <Link >
                <span className='icon' style={{textDecoration:"none",display:"inline",paddingRight:"10px"}}><MdContactPhone/></span>
                <p style={{display:"inline",color:'grey'}}>Contact Number</p>
              </Link>
              <Link >
                <span className='icon' style={{textDecoration:"none",display:"inline",paddingRight:"10px"}}><FaCalendar/></span>
                <p style={{display:"inline",color:'grey'}}>Event Date</p>
              </Link>
              <Link >
                <span className='icon' style={{textDecoration:"none",display:"inline",paddingRight:"10px"}}><IoIosTime/></span>
                <p style={{display:"inline",color:'grey'}}>Time</p>
              </Link>
              <Link >
                <span className='icon' style={{textDecoration:"none",display:"inline",paddingRight:"10px"}}><SiEventbrite/></span>
                <p style={{display:"inline",color:'grey'}}>Event Theme</p>
              </Link>
              <Link >
                <span className='icon' style={{textDecoration:"none",display:"inline",visibility:'hidden',paddingRight:"10px"}}><SiEventbrite/></span>
                <p style={{display:"inline",color:'grey'}}>Status</p>
              </Link>
              <div className='status declined'>Cancelled</div>

            </div>
            <footer>
              <div className='actions'>
              
                  <Link className='btn accept-btn'>Accept Booking</Link> 

                  <button 
                    type='button'
                    className='btn cancelled-btn'
                    onClick={()=>{console.log("got click")}}
                  >
                    Cancel Booking
                  </button>
              </div>
            </footer>       
          </div>
        </div> 


        <div className="col-md">
          <header>
            <div className='main-icon'>P</div>
            <div className='info'>
              <h5>Celebrant's Name</h5>
              <p>location or adress</p>
            </div>
          </header>
          <div className='content'>
            <div className='content-center'>
              <Link >
                <span className='icon' style={{textDecoration:"none",display:"inline",paddingRight:"10px"}}><MdContactPhone/></span>
                <p style={{display:"inline",color:'grey'}}>Contact Number</p>
              </Link>
              <Link >
                <span className='icon' style={{textDecoration:"none",display:"inline",paddingRight:"10px"}}><FaCalendar/></span>
                <p style={{display:"inline",color:'grey'}}>Event Date</p>
              </Link>
              <Link >
                <span className='icon' style={{textDecoration:"none",display:"inline",paddingRight:"10px"}}><IoIosTime/></span>
                <p style={{display:"inline",color:'grey'}}>Time</p>
              </Link>
              <Link >
                <span className='icon' style={{textDecoration:"none",display:"inline",paddingRight:"10px"}}><SiEventbrite/></span>
                <p style={{display:"inline",color:'grey'}}>Event Theme</p>
              </Link>
              <Link >
                <span className='icon' style={{textDecoration:"none",display:"inline",visibility:'hidd',paddingRight:"10px"}}><SiEventbrite/></span>
                <p style={{display:"inline",color:'grey'}}>Status</p>
              </Link>
              <div className='status pending'>Pending</div>
              

            </div>
            <footer>
              <div className='actions'>
              
                  <Link className='btn accept-btn'>Accept Booking</Link> 

                  <button 
                    type='button'
                    className='btn cancelled-btn'
                    onClick={()=>{console.log("got click")}}
                  >
                    Cancel Booking
                  </button>
              </div>
            </footer>       
          </div>
        </div>
      </div>
      
    </Wrapper>
  )
}

export default Bookings