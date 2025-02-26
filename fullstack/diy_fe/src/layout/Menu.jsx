import React, { useEffect, useState } from 'react'
import Dashboard from '../template/Dashboard'
import { FaTrash } from "react-icons/fa6";
import { FaPen } from "react-icons/fa6";
import axios from 'axios';
import { convertToRp } from '../currency';
import ModalMenu from '../components/ModalMenu';
const Menu = () => {
    const [dataMenu, setDataMenu] = useState([])

    const getAllData = async () => {

        return await axios.get('http://localhost:3100/menu/')
            .then((response) => response.data.data)
            .catch((error) => {
                return error;
            })
    }

    useEffect(() => {
        getAllData().then((result) => setDataMenu(result))
    }, [])
    const [modalAdd, setModalAdd] = useState()
    // console.log(dataMenu)

    const [data, setData] = useState({
        title: '',
        harga: 0,
        stock: 0,
        deskripsi: '',
        gambar: '',
        jadwal: '',

    })
    const handleAddMenu = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3100/menu/create', data);
            console.log('Login berhasil:', response.data.data);
            window.location.href = '/menu'
        } catch (error) {
            console.error('Login gagal:' + error.response.data.msg);
        }
    };


    const [modalAddUp, setModalAddUp] = useState()
    const [id, setId] = useState()
    const [dataUp, setDataUp] = useState()
    const getDataById = async () => {

        return await axios.get('http://localhost:3100/menu/find/' + id)
            .then((response) => response.data.data)
            .catch((error) => {
                return error;
            })
    }

    //update
    const updateUser = async (e) => {
        console.log('ss')
        try {
            const response = await axios.put('http://localhost:3100/menu/update/' + id,
                dataUp,
            );
            window.location.href = '/menu'

            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    };
    useEffect(() => {
        id ?
            getDataById().then((result) => setDataUp((result)))
            : <></>
    }, [id])

    function handleDelete(id) {
        try {
            axios.delete(`http://localhost:3100/menu/delete/${id}`);
            console.log(`User ${id} deleted`);
            window.location.href = '/menu'
        } catch (error) {
            console.error('Delete failed:', error.response ? error.response.data : error.message);
        }
    }
    console.log
    return (
        <>
            <Dashboard page='/menu'>
                <ModalMenu judul='Tambah data Menu' data={data} onSub={handleAddMenu} setData={setData} state={{ modalAdd, setModalAdd }}></ModalMenu>
                {dataUp ?
                    <ModalMenu judul='Edit data Menu' data={dataUp} onSub={updateUser} setData={setDataUp} state={{ modalAdd: modalAddUp, setModalAdd: setModalAddUp }}></ModalMenu>
                    : ''
                }
                <div className='w-full flex justify-start mb-3 '>

                    <button onClick={() => setModalAdd(true)} className='rounded-sm bg-blue-300 px-3 py-1 text-white cursor-pointer'>Add Menu</button>
                </div>
              
                <table className="w-full text-sm text-left rtl:text-right text-white ">
          <thead className="text-xs bg-blue-300 uppercase border-2 border-blue-300 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nomor
              </th>
              {/* <th scope="col" className="px-6 py-3">
                Judul
              </th> */}
              <th scope="col" className="px-6 py-3">
                Harga
              </th>
              <th scope="col" className="px-6 py-3">
                Stock Tiket
              </th>
              <th scope="col" className="px-6 py-3">
Jadwal              </th>

              <th scope="col" className="px-6 py-3">
                Edit
              </th>
              <th scope="col" className="px-6 py-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className='text-gray-900'>

            {
              dataMenu.map((e, i) => (

                <tr key={i}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {i + 1}
                  </th>
                  <td className="px-6 py-4">{e.title}</td>
                  <td className="px-6 py-4">{convertToRp(e.harga)}</td>
                  <td className="px-6 py-4">{e.stock}</td>
                  <td className="px-6 py-4">{e.jadwal}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <a
                      href="#"
                      onClick={() => {
                        setModalAddUp(true)
                        setId(e.id)
                    }}
                      className="font-medium text-blue-600  hover:underline"
                    >
                      Edit
                    </a>
                 
                  </td>
                  <td>
                  <td className="px-6 py-4 flex gap-2">
                  <a
                  onClick={(() => handleDelete(e.id))}
                      href="#"
                      className="font-medium  text-red-600  hover:underline"
                    >
                      Delete
                    </a>
                 
                  </td>
                  </td>
               
                </tr>
              ))
            }

          </tbody>
        </table>
            </Dashboard>
        </>
    )
}

export default Menu
