import Ticket from "../models/TicketModels.js"

export const getAllTicket = async (req, res) => {
    try {
        const data = await Ticket.findAll()
        res.status(200).json({ msg: 'mengambil seluruh data', data: data })
    } catch (err) {
        res.status(500).json({ msg: err.msg })
    }

}

export const getAllTicketById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await Ticket.findByPk(id)
        if (data) {
            res.status(200).json({ msg: 'berhasil mengambil data ', data: data })
        } else {
            res.status(200).json({ msg: 'data tidak ada', data: null })
        }
    } catch (err) {
        res.status(500).json({ msg: err.msg })
    }

}
export const createTicket = async (req, res) => {
    try {
        const { title, harga, deskripsi,gambar,stock,jadwal } = req.body;

        // Validasi input
        if (!title || !harga, !deskripsi, !gambar,!stock, !jadwal) {
            return res.status(400).json({ message: 'pastikan mengisi semua data' });
        }

        // Buat Ticket baru
        const newTicket = await Ticket.create({ title, harga, deskripsi, gambar,stock,jadwal });

        res.status(201).json({ message: 'Ticket berhasil dibuat', data: newTicket });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Terjadi kesalahan', error: error.message });
    }

}
export const updateTicket = async (req, res) => {
    try {
        if (!req.body.title || !req.body.harga || !req.body.deskripsi||!req.body.gambar ||!req.body.stock || !req.body.jadwal ) {
            res.status(400).json({ msg: 'pastikan mengisi semua data' })
        } else {
            const { title, harga, deskripsi,gambar,stock,jadwal } = req.body
            const data = await Ticket.update({ title, harga, deskripsi,gambar,stock,jadwal}, {
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({ message: 'Data berhasil diupdate' });
        }
    } catch (err) {
        res.status(500).json({ msg: err.message })
    }

}


export const deleteTicket = async (req, res) => {
    try {
        const { id } = req.params;
        await Ticket.destroy({
            where: {
                id: id,
            },
        });

        res.status(200).json({ message: 'Data berhasil di hapus' })

    } catch (error) {
        res.status(500).json({ message: 'Gagal menghapus data.', error });
    }
}
