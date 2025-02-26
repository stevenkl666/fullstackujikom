import React from 'react'
import { FaX } from 'react-icons/fa6'

const ModalPembeli = ({ judul, data, setData, state, onSub }) => {
    function handleChange(e) {
        const newData = { ...data }
        newData[e.target.name] = e.target.value
        setData({ ...newData })

    }
    // console.log(data)
    return (
        <div
            id="authentication-modal"
            tabIndex={-1}
            aria-hidden="true"
            className={`${state.modalAdd ? 'flex' : 'hidden'} overflow-y-auto bg-black/50 overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
        >
            <div className="relative p-4 w-full max-w-md max-h-full">
                {/* Modal content */}
                <div className="relative bg-white rounded-lg shadow-sm">
                    {/* Modal header */}
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900">
                            {judul}
                        </h3>
                        <button
                            onClick={() => state.setModalAdd(false)}
                            type="button"
                            className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                            data-modal-hide="authentication-modal"
                        >
                            <FaX />
                        </button>
                    </div>
                    {/* Modal body */}
                    <div className="p-4 md:p-5">
                        <div className="space-y-4 " action="#">
                            {judul === 'Register' || judul === 'Edit data Pembeli' ?

                                <div>

                                    <label
                                        htmlFor="nam"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Masukan Nama Anda
                                    </label>
                                    <input
                                        type="text"
                                        name="nama"
                                        value={data ? data.nama : ''}
                                        onChange={(e) => handleChange(e)}

                                        id="nam"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Masukan Nama Menu
    "

                                    />
                                </div> : <></>
                            }

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Masukan Email
                                </label>
                                <input
                                    type="text"
                                    name="email"
                                    value={data ? data.email : ''}
                                    onChange={(e) => handleChange(e)}

                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="Masukan Email
    "

                                />
                            </div>
                            {
                                judul === 'Edit data Pembeli' ? <></> :
                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="block mb-2 text-sm font-medium text-gray-900"
                                        >
                                            Masukan password
                                        </label>
                                        <input
                                            type="text"
                                            name="password"
                                            value={data ? data.password : 0}

                                            onChange={(e) => handleChange(e)}

                                            id="password"
                                            placeholder="Masukan Password
    "
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            required=""
                                        />
                                    </div>
                            }



                            <button
                                onClick={onSub}
                                className="w-[100%] text-white bg-blue-300 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                submit
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalPembeli
