import React from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../../assets/wrappers/SharedLayout'
import {Navbar, SmallSidebar, BigSidebar} from '../../assets/components'

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className='dashboard'>
        <SmallSidebar/>
        <BigSidebar/>
        <div >
          <Navbar/>
          <div >
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  )
}

export default SharedLayout