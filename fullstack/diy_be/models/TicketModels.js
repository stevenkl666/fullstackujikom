import { DataTypes } from "sequelize";
import db from "../utils/connection.js";

const Ticket = db.define(
    'Ticket', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    harga: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    deskripsi: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gambar: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    jadwal: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
        tableName: 'ticket'
    }
)



export default Ticket