import React, { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode';
import ModalProfile from './ModalProfile';
import logo from '../images/logoTeater.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { FaX, FaUser, FaRectangleAd, FaUserLock, FaInbox, FaBars } from 'react-icons/fa6';
const Dashboard = ({ children, page }) => {

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect ke halaman login jika tidak ada token
    }
  }, [navigate]);

  const [decode, setDecode] = useState('')
  useEffect(() => {
    const data = localStorage.getItem('token')
    data ?
      setDecode(jwtDecode(data))
      : <></>
  }, [])
  const [open, setOpen] = useState(false)
  const [profile, setProfile] = useState(false)
  const list = [
    {
      nama: 'Daftar Menu',
      ic: <FaRectangleAd />,
      link: '/menu',
    },
    {
      nama: 'Data Pembeli',
      ic: <FaUser />,
      link: '/pembeli',
    },
    {
      nama: 'Data Admin',
      ic: <FaUserLock />,
      link: '/admin',
    },
    {
      nama: 'Transaksi',
      ic: <FaInbox />,
      link: '/transaksi',
    },
  ]
  return (
    <div>
      <>
        {
          profile ?
            <div className='bg-white px-3 py-1 text-blue-300 font-medium border-blue-300 shadow-xl border-2 rounded-md absolute right-4 top-15 '>
              <div className='w-full flex justify-end'>

                <FaX className='text-end cursor-pointer' onClick={() => setProfile(false)}></FaX>
              </div>
              <div className='flex items-end gap-2'>
                <p>Nama : </p>
                <p>{decode.nama}</p>
              </div>
              <div className='flex items-end gap-2'>
                <p>Email : </p>
                <p>{decode.email}</p>
              </div>
              <div className='flex justify-end'>

                <p
                  onClick={() => {
                    window.location.href = '/login'
                    localStorage.removeItem('token')
                  }}
                  className='hover:underline mt-2 cursor-pointer'
                >Log Out</p>
              </div>

            </div> : <></>
        }
        <nav className="  fixed w-full z-0 top-0 shadow-none start-0 border-b-2 border-blue-500">
          <div className="w-full py-5 flex flex-wrap items-center justify-between mx-auto p-4 ">
            <div></div>
            <FaBars
              className='cursor-pointer'
              onClick={() => setProfile(true)}

            ></FaBars>
            <div className="flex md:hidden  md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

            </div>

          </div>
        </nav>


        <aside
          id="default-sidebar"
          className={`fixed top-0 left-0 z-1 w-64 h-screen bg-white transition-transform ${open ? 'translate-x-0' : '-translate-x-full'}  sm:translate-x-0`}
          aria-label="Sidebar"
        >

          <div className="h-full overflow-y-auto  border-r-2 border-blue-500 shadow-r-xl" >
            <div className='w-full py-5 bg-white flex justify-center items-center'>
              <div className='w-full flex px-5 gap-3 items-end'>
                <h1 className='mb-4 text-pink-500 text-3xl font-semibold'>Jakarta Fair</h1>
              </div>
            </div>  
            <ul className="space-y-4  px-3  py-4    font-medium">
              {
                list.map((e, i) => (
                  <li key={i}>

                    <Link to={e.link} className='flex gap-2 items-center'>
                      {
                        page === e.link ?
                          <p className='w-4 h-4 rounded-full bg-blue-300 inline'></p>
                          : <></>
                      }
                      <span
                        href="#"
                        className={` flex  items-center p-2  rounded-lg text-blue-300   group hover:text-blue-400`}
                      >
                        {e.ic}
                        <span className="ms-3 ">{e.nama}</span>
                      </span>
                    </Link>
                  </li>

                ))
              }

            </ul>
          </div>
        </aside>
        <div className="p-4 sm:ml-64 mt-20 px-6">


            {children}
        </div>

      </>

    </div>
  )
}

export default Dashboard
