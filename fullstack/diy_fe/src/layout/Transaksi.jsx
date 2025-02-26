import React, { useEffect, useState } from 'react'
import Dashboard from '../template/Dashboard'
import axios from 'axios'
import { convertToRp } from '../currency'

const Transaksi = () => {
    const[data,setData]=useState()
    const getAllData = async () => {

        return await axios.get('http://localhost:3100/transaksi/')
            .then((response) => response.data.data)
            .catch((error) => {
                return error;
            })
    }

    useEffect(() => {
        getAllData().then((result) => setData(result))
    }, [])
    
  return (
    <Dashboard page='/transaksi'>
   
   
    <div className=' flex w-[100%] -z-99 gap-12 flex-wrap '>
    <div className="relative w-full overflow-x-auto shadow-md ">
        <table className="w-full text-sm text-left  rtl:text-right text-gray-500 ">
          <thead className="text-xs bg-blue-300 uppercase border-2 border-blue-300 text-white ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nomor
              </th>
              <th>
                Pembeli
              </th>
              <th scope="col" className="px-6 py-3">
              Tanggal Pembelian
              </th>
              <th scope="col" className="px-6 py-3">
               Nama Konser
              </th>

              <th scope="col" className="px-6 py-3">
                jumlah Ticket
              </th>
              <th scope="col" className="px-6 py-3">
                Total Harga
              </th>
            </tr>
          </thead>
          <tbody>

            {
                data?
              data.map((e, i) => (

                <tr key={i}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {i + 1}
                  </th>
                  <td className="px-6 py-4">{e.Pembeli.nama}</td>
                  <td className="px-6 py-4">{e.tanggal_pembelian}</td>
                  <td className="px-6 py-4">{e.Cart.Ticket.title}</td>
                  <td className="px-6 py-4">{e.Cart.jumlah_barang}</td>
                  <td className="px-6 py-4">{convertToRp(e.Cart.total_harga)}</td>
                  
                </tr>
              )):<></>
            }

          </tbody>
        </table>
      </div>

       
    </div>

</Dashboard>
  )
}

export default Transaksi
