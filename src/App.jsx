/* eslint-disable no-unused-vars */
import { useState,useEffect } from "react"
import { useDispatch} from 'react-redux'
import authService from "./appwrite/auth";
import{login , logout} from "./store/authSlice"
import { Footer, Header } from "./components";
import {Outlet} from 'react-router-dom'

function App() {
 const [loading,setLoading] = useState(true);
 const dispatch = useDispatch()

 useEffect(()=>{
     
  authService.getCurrentUser().then((userData) => {
    if (userData) {
      dispatch(login({userData}))
    } else {
      dispatch(logout())
    }
  })
  .finally(() => setLoading(false))
}, [])

 return !loading ?(
  <div  className="min-h-screen flex flex-wrap justify-center items-center content-between bg-white">
    <div className="w-full flex flex-col justify-center items-center">
      <Header />
      <main className=" w-full">
         <Outlet/>
      </main>
      <Footer/>

    </div>
  </div>
 ):null;
}

export default App
