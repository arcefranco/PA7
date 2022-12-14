import axios from 'axios'
import { errorsHandling } from '../../errorsHandling';
import getHeaderToken from '../../../helpers/getHeaderTokenAndDB';
import getHeaderDB from '../../../helpers/getHeaderDB';

const getAllPuntosDeVenta = async () => {
    const headers = getHeaderDB()
    const response = await axios.get(process.env.REACT_APP_HOST + 'puntosDeVenta', headers).catch((error) => errorsHandling(error))
    return response.data
  }
  const beginUpdate = async (puntoData) => {
    const headers = getHeaderToken()
    const response = await axios.post(process.env.REACT_APP_HOST + 'puntosDeVenta/beginUpdate', puntoData, headers).catch((error) => errorsHandling(error))
    return response.data
  }
const createPuntoDeVenta = async (puntoData) => {
  const headers = getHeaderToken()
  const response = await axios.post(process.env.REACT_APP_HOST + 'puntosDeVenta', puntoData, headers).catch((error) => errorsHandling(error)) 
  return response.data
}
  const deletePuntoDeVenta = async (puntoData) => {
  const response = await axios.delete(process.env.REACT_APP_HOST + 'puntosDeVenta',{  headers: {
    'x-auth-token': window.localStorage.getItem('userToken').split(" ")[1],
    "db-connection": window.localStorage.getItem('db')
  }, data: puntoData }).catch((error) => errorsHandling(error))
  return response.data
}
const updatePuntoDeVenta = async (puntoData) => {
  const headers = getHeaderDB()
  const response = await axios.put(process.env.REACT_APP_HOST + 'puntosDeVenta', puntoData, headers).catch((error) => errorsHandling(error)) 
  return response.data
}

const endUpdate = async (puntoData) => {
  const headers = getHeaderToken()
  const response = await axios.post(process.env.REACT_APP_HOST + 'puntosDeVenta/endUpdate', puntoData, headers).catch((error) => errorsHandling(error))
  return response.data
}



const puntosService = {
    getAllPuntosDeVenta,
    beginUpdate,
    deletePuntoDeVenta,
    updatePuntoDeVenta,
    createPuntoDeVenta,
    endUpdate
}

export default puntosService