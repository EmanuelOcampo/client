import {BrowserRouter, Routes, Route} from "react-router-dom"
import {BookingForm, Register, Error, Landing , ProtectedRoute} from "./pages";
import {Admin, Gallery, Bookings, Profile, Stats, SharedLayout} from './pages/dashboard'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <SharedLayout/>
            </ProtectedRoute>
        }>
        
          <Route index element={<Stats />}/>
          <Route path="bookings" element={<Bookings />}/>
          <Route path="upload-gallery" element={<Gallery />}/>
          <Route path="add-admin" element={<Admin />}/>
          <Route path="profile" element={<Profile />}/>
          
          {/* <Route path="/sharedLayout" element={<SharedLayout />}/> */}
        </Route>
        
        <Route path="/register" element={<Register />}  />


        <Route path="/landing" element={<Landing />} />
        <Route path="/booking"  element={<BookingForm />} />
        {/* landing page will have a child of book, gallery and themes*/}


        <Route path="*" element={<Error />}  />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
