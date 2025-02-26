import Pembeli from "../models/PembeliModels.js"
// import { hashData, compareData } from "../utils/bycrptData.js"

export const getAllPembeli = async (req, res) => {
    try {
        const data = await Pembeli.findAll()
        res.status(200).json({ msg: 'mengambil seluruh data', data: data })
    } catch (err) {
        res.status(500).json({ msg: err.msg })
    }

}
export const loginPembeli = async (req, res) => {
    try {
      const {  email,password } = req.body;
  
      // Cek apakah nama dan email,password diinputkan
      if (!email || !password) {
        return res.status(400).json({ msg: "Nama dan email,password harus diisi" });
      }
  
      // Cari pembeli berdasarkan nama dan email,password
      const pembeli = await Pembeli.findOne({
        where: {email,password },
      });
  
      if (!pembeli) {
        return res.status(404).json({ msg: "Pembeli tidak ditemukan" });
      }
  
      res.status(200).json({
        msg: "Login berhasil",
        data: pembeli, // Kirim data pembeli ke frontend
      });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  };
  

export const getAllPembeliById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Pembeli.findByPk(id)
        if (data) {
            res.status(200).json({ msg: 'berhasil mengambil data admin', data: data })
        } else {
            res.status(200).json({ msg: 'data tidak ada', data: null })
        }
    } catch (err) {
        res.status(500).json({ msg: err.msg })
    }

}
export const createPembeli = async (req, res) => {
    try {
        const { nama, email,password } = req.body;

        // Validasi input
        if (!nama || !email||!password) {
            return res.status(400).json({ message: 'Nama dan emailharus diisi' });
        }

        // Buat Pembeli baru
        const newPembeli = await Pembeli.create({ nama, email,password });

        res.status(201).json({ message: 'Pembeli berhasil dibuat', data: newPembeli });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Terjadi kesalahan', error: error.message });
    }

}
export const updatePembeli = async (req, res) => {
    try {
        if (!req.body.nama || !req.body.email || !req.body.password ) {
            res.status(400).json({ msg: 'pastikan mengisi semua data' })
        } else {
            const { nama, email,password } = req.body
            const data = await Pembeli.update({ nama, email,password}, {
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({ message: 'Pembeli berhasil diupdate' });
        }
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }

}


export const deletePembeli = async (req, res) => {
    try {
        const { id } = req.params;
        await Pembeli.destroy({
            where: {
                id: id,
            },
        });

        res.status(200).json({ message: 'Data berhasil di hapus' })

    } catch (error) {
        res.status(500).json({ message: 'Gagal menghapus data.', error });
    }
}
