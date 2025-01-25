/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import logo from "../assets/img/logo.jpeg"

const Logo = ({width ='100px'}) => {
  return (
    <div className="flex">
      <img src={logo} alt="" className="lg:w-10 lg:h-10 md:w-8 md:h-8 sm:h-4 sm:w-4 h-8 w-8"/>
      <div className='font-Merriweather font-semibold lg:text-2xl md:text-xl ml-2 mt-2 '>CodingAge</div>
    </div>
  )
}

export default Logo 