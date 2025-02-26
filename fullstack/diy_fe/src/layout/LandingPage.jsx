import Navbar from '../landingPage/Navbar'
import Main1 from '../landingPage/Main1'
import MenuList from '../landingPage/MenuList'
import Footer from '../landingPage/Footer'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { convertToRp } from '../currency';
import ModalPembeli from '../components/ModalPembeli';
import ModalAddTran from '../components/ModalAddTran';
import { data } from 'react-router-dom';
import Popup from '../components/Popup';


const LandingPage = () => {
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
 
    const [dataAdd,setDataAdd]=useState(
        {
            nama:'',
            email:'',
            password:''
        }
    )
    const [modalAdd,setModalAdd]=useState(false)
    console.log(dataAdd)
    const [modalLog,setModalLog]=useState(false)
    const handleAddMenu = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:3100/pembeli/create', dataAdd);
            console.log('Login berhasil:', response.data.data);
            localStorage.setItem('dataku',JSON.stringify(response.data.data))
            window.location.href = '/'
        } catch (error) {
            console.error('Login gagal:' + error.response.data.msg);
        }
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:3100/pembeli/login', dataAdd);
            console.log('Login berhasil:', response.data.data);
            localStorage.setItem('dataku',JSON.stringify(response.data.data))
            window.location.href = '/'
        } catch (error) {
            console.error('Login gagal:' + error.response.data.msg);
        }
    };


    //!
  
    const [dataTr,setDataTr]=useState({
        jumlah_barang:0,
        total_harga:0,
        TicketId:0
    })
    const [modalBeli,setModalBeli]=useState(false)
    const [hargaMenu,setHargaMenu]=useState(0)
    const [idMenu,setIdMenu]=useState(0)
    const [idStock,setStock]=useState(0)

    // console.log(dataTr)
  const [dataB,setDataB]=useState({})
    const dataku = localStorage.getItem('dataku')
    function handleBeli(e) {
        if (!dataku) {
            alert('silahkan login atau daftar')
        }else{
            setDataB(e)
            setStock(e.stock)
            setIdMenu(e.id)
            setHargaMenu(e.harga)
            setModalBeli(true)
        }

    }
// console.log(idStock)
    //! add cart
    const [idCart,setIdCart]=useState(0)
    const [totalHarga,setTotalHarga]=useState(0)
    const [modalAprove,setModalAprove]=useState(false)
    

    const handleAddCart = async (e) => {
        if(dataTr.jumlah_barang  > idStock){
            setModalBeli(false)
           return alert('jumlah barang melebihi stock')
        }
        console.log(idMenu)
        console.log(idStock)
        try {
            const response = await axios.post('http://localhost:3100/cart/create', {...dataTr,TicketId:idMenu});
            console.log('Login berhasil:', response.data.data);
            setIdCart(response.data.data.id)
            setTotalHarga(response.data.data.total_harga)
            setModalBeli(false)
            setModalAprove(true)
            // window.location.href = '/'
        } catch (error) {
            console.error('Login gagal:' + error.response.data.msg);
        }
     
    };

    console.log(dataB)

    //! pop up
    // console.log(idCart)
    
    async function handlePesan(){
        let id = localStorage.getItem("dataku")
        const parseId= JSON.parse(id)
        // console.log(parseId.id)
        try {
            const response = await axios.post('http://localhost:3100/transaksi/create', {total_harga:totalHarga,status:true,tanggal_pembelian:new Date(),CartId:idCart,PembeliId:parseId.id});
            console.log('Login berhasil:', response.data.data);

            try{
                console.log({...dataB,stock:dataB.stock - dataTr.jumlah_barang})

                const responseBuah = await axios.put('http://localhost:3100/menu/update/'+dataB.id,{...dataB,stock:dataB.stock - dataTr.jumlah_barang}) 
                window.location.href = '/'
            }catch(err){
                console.error('erro' + err.response.data.msg);

            }

         
        } catch (error) {
            console.error('Login gagal:' + error.response.data.msg);
        }
    }
  return (
    <div>
      <Navbar></Navbar>
      <Main1 setModalAdd={setModalAdd} setModalLog={setModalLog}></Main1>
      <MenuList/>
      <div className='max-w-6xl mx-auto mt-20 '>
        {modalAdd?
            <ModalPembeli judul='Register' data={dataAdd} onSub={handleAddMenu} setData={setDataAdd} state={{ modalAdd, setModalAdd }}></ModalPembeli>
        :<></>}
            <ModalPembeli judul=' Login' data={dataAdd} onSub={handleLogin} setData={setDataAdd} state={{ modalAdd:modalLog, setModalAdd:setModalLog }}></ModalPembeli>

            <ModalAddTran judul=' Pembelian' data={dataTr} harga={hargaMenu}  setData={setDataTr} onSub={handleAddCart} state={{ modalAdd:modalBeli, setModalAdd:setModalBeli }}></ModalAddTran>
            {modalAprove?
        <Popup onSub={handlePesan}></Popup>:<></>    
        }
            <div className='w-full flex flex-wrap gap-8'>

                {
                    dataMenu.map((e, i) => (

                        <div key={i} className="relative flex flex-col  bg-white shadow-sm border border-slate-200 rounded-lg w-65">
                            <div className="  m-2.5 overflow-hidden text-white rounded-md">
                                <img
                                    src={e.gambar}
                                    alt="card-image"
                                />
                            </div>
                            <div className="p-4">
                                <div className='w-full flex justify-between'>

                                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                                    {e.title}
                                </h6>
                                </div>
                                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                                    <span>Jumlah Tiket :</span>
                                    {e.stock}
                                </h6>
                                <p className="text-slate-600 leading-normal font-light">
                                    {e.deskripsi.substring(0,120)}...

                                </p>
                            </div>
                            <div className="px-4 pb-4 w-full flex items-end justify-between  gap-2">
                                <p className='font-semibold'>
                                    {convertToRp(e.harga)}
                                </p>
                                <div className='flex w-fit gap-2'>

                                    <button
                                        onClick={() => handleBeli(e)}
                                        className='px-2 cursor-pointer text-red-500'
                                    >Beli</button>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>

        </div>
      <Footer></Footer>
    </div>
  )
}

export default LandingPage
