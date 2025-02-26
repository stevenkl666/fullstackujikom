import db from "../utils/connection.js";
import Admin from "./AdminModels.js";
import Pembeli from "./PembeliModels.js";
import Ticket from "./TicketModels.js";
import Cart from "./CartModels.js";
import Transaksi from "./TransaksiModels.js";

await db.sync({force:true})
