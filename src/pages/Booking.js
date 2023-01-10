import React from 'react'
import Wrapper from '../assets/wrappers/BookingForm'
import Logo from "../assets/components/Logo"




//function here to print the input and convert to object




const Booking = () => {
  return (
    <Wrapper className='full-page-bookingForm'>

      <div id="booking" className="section">
        <div className="section-center">
          <div className="container ">
    
            <div className="row">
              <div className="col-md-6 ">
                <div className="booking-cta">
                  <h1>Make your reservation</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facere, soluta magnam consectetur molestias itaque
                    ad sint fugit architecto incidunt iste culpa perspiciatis possimus voluptates aliquid consequuntur cumque quasi.
                    Perspiciatis.
                  </p>
                </div>
              </div>
              <div className="col-md-1 " ></div>
              <div className="col-md-5 ">
                <div className="booking-form">
                <Logo />
                  <form>
                  {/*///////////////////// name of client /////////////////////*/}
                    <div className="form-group">
                      <span className="form-label">Name of Client</span>
                      <input className="form-control" type="text" placeholder="Enter Name" />
                    </div>

                    {/*///////////////////// celebrants name ////////////////////// */}
                    <div className="form-group">
                      <span className="form-label">Celebrant's name</span>
                      <input className="form-control" type="text" placeholder="Enter Name of celebrant" required />
                    </div>

                    {/*///////////////////// Location or adress /////////////////////  */}
                    <div className="form-group">
                      <span className="form-label">Location</span>
                      <input className="form-control" type="text" placeholder="Enter location of event" required />
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                      
                      {/* ///////////////////// date of event ///////////////////// */}
                        <div className="form-group">
                          <span className="form-label">Date of event</span>
                          <input className="form-control" type="date" required />
                        </div>
                      </div>
                      <div className="col-sm-6">

                      {/* ///////////////////// Time of event ///////////////////// */}
                        <div className="form-group">
                          <span className="form-label">time of event</span>
                          <input className="form-control" type="time" required />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">

                      {/* ///////////////////// Motif of event ///////////////////// */}
                        <div className="form-group">
                          <span className="form-label">Motif</span>
                          <select className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                          <span className="select-arrow"></span>
                        </div>
                      </div>
                      <div className="col-sm-6">

                      {/* ///////////////////// theme of event ///////////////////// */}
                        <div className="form-group">
                          <span className="form-label">Theme</span>
                          <select className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                          </select>
                          <span className="select-arrow"></span>
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className="col-sm-6">

                      {/* ///////////////////// Contact Number of client ///////////////////// */}
                          <div className="form-group">
                            <span className="form-label">Contact Number</span>
                            <input className="form-control" type="tel" placeholder="Enter Contact Number" required />
                          </div>
                      </div>
                      <div className="form-btn col-sm-6">
                        <button className="btn">Check availability</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Booking