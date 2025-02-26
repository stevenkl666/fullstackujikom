import express from 'express'
import { getAllTicket,getAllTicketById,createTicket,updateTicket,deleteTicket } from '../controller/TicketController.js'
const RouterTicket=express.Router()

RouterTicket.get('/',getAllTicket)
RouterTicket.get('/find/:id',getAllTicketById)
RouterTicket.post('/create',createTicket)
RouterTicket.put('/update/:id',updateTicket)
RouterTicket.delete('/delete/:id',deleteTicket)

export default RouterTicket