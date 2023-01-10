import React from 'react'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import {FormRow} from "../../assets/components"

const Gallery = () => {
  return (
    <Wrapper>
      <form>
        <div className='box-upload'>
          {/* got click fill replace a function to triger as a button */}
            <div className='content-upload' onClick={()=>{console.log("got Click!!")}}>
              <p>Drop file here</p>
              <p>or</p>
                <input id="uplaodFile" className='choosenFile' type="file"/>
                <label htmlFor="uploadFile" >Select File</label>   
            </div>        
        </div>
        <div className='input-types form-center'>
          <FormRow
            type='text'
            name="name"
            // value={name}
          />

          <div className="form-row">
            <label htmlFor="themeType" className='form-label'>Theme</label>
              <select className="form-control">
                <option>Wedding</option>
                <option>kid Birthday Party</option>
                <option>Debut</option>
              </select>
          </div>
          

          <div className="form-row">
            <label htmlFor="motifType" className='form-label'>Motif</label>
              <select className="form-control">
                <option>Brown and yellow</option>
                <option>Blue and White</option>
                <option>Red and Pink</option>
              </select>
          </div>

          <div>
            <button type='submit' className='btn btn-block submit-btn'>Submit</button>
          </div>
          
        </div>
      </form>
    </Wrapper> 
  )
}

export default Gallery