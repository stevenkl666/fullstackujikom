import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logoPanjang (2).png'
const FormAcces = ({ children, tipe, sub, err }) => {
    return (
        <div className="font-[sans-serif]">
            <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
                <div className="grid md:grid-cols-2 items-center gap-10 max-w-6xl max-md:max-w-md w-full">
                    <div>
                        <h2 className="lg:text-5xl text-3xl font-extrabold lg:leading-[55px] text-gray-800">
                            Akses Login Untuk Admin
                        </h2>
                        <p className="text-sm mt-6 text-gray-800">
                            Pastikan datamu sudah terfatar sebagai admin
                        </p>
                        <p className="text-sm mt-12 text-gray-800">
                            Don't have an account{" "}
                            {tipe === 'login' ?
                                <Link to='/register'
                                    href="javascript:void(0);"
                                    className="text-blue-500 hover:underline ml-1 whitespace-nowrap font-semibold"
                                >Register Here</Link> :
                                <Link
                                    to='/login'
                                    href="javascript:void(0);"
                                    className="text-blue-500 hover:underline ml-1 whitespace-nowrap font-semibold"
                                >Sign In Here</Link>
                            }
                        </p>
                    </div>
                    <div className="max-w-md md:ml-auto w-full">
                        <h3 className="text-gray-800 text-3xl font-extrabold mb-8">  {tipe == 'login' ? 'Sign In' : 'Register'}</h3>
                       {children}
                        <div className="!mt-8">
                            <button
                            onClick={sub}
                                type="button"
                                className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded text-white bg-blue-400 focus:outline-none"
                            >
                                {tipe == 'login' ? 'Sign In' : 'Register'}
                            </button>
                        </div>
                        {err ?
                            <p className='w-full text-center text-red-900'>
                                {err}
                            </p>
                            : <></>}

                    </div>
                </div>
            </div>
        </div>


    )
}

export default FormAcces
