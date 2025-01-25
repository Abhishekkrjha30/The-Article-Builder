/* eslint-disable no-unused-vars */
import { Container, Logo , LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
const [menuOpen, setMenuOpen] = useState(false);
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  const closeMenus = () => {
    setMenuOpen(false);
  };
  return (
    <header className='relative py-3 shadow bg-gray-50 w-full top-0'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'   />

              </Link>
          </div>
{/* Menu Button (Mobile View) */ }
         <button
            className="block md:hidden ml-auto"
           onClick={() => setMenuOpen(!menuOpen)}
         >
           <FontAwesomeIcon icon={faBars} className='text-xl'/>
         </button>
          {/* Desktop Navbar  */}
            <ul className=' ml-auto hidden md:flex'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
           {/* Mobile Navbar  */}
            <div
            className={`${menuOpen ? "block" : "hidden"
              } absolute top-16 left-0 w-full bg-gray-50 md:hidden md:relative md:top-0 md:flex md:w-auto z-20`}
            >
             <ul className='flex flex-col justify-center items-center'>
             {navItems.map((item) => 
              item.active ? (
                <li key={item.name} onClick={closeMenus}>
                  <button
                  onClick={() => navigate(item.slug)}
                  className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                  
                  >{item.name}</button>
                </li>
              ) : null
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
            </div>
           </nav>
           </Container>

     </header>
  )
}

export default Header


