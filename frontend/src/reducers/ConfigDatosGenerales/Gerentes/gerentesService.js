import axios from 'axios'
import { errorsHandling } from '../../errorsHandling' 
import getHeaderDB from '../../../helpers/getHeaderDB'
import getHeaderToken from '../../../helpers/getHeaderTokenAndDB';

const getGerentes = async () => {
    const headers = getHeaderDB()
    const response = await axios.get(process.env.REACT_APP_HOST + 'gerentes', headers).catch((error) => errorsHandling(error))
    return response.data[0] 
  }
  const getGerentesById = async (gerentesData) => {
    const headers = getHeaderToken()
    const response = await axios.post(process.env.REACT_APP_HOST + 'gerentes/id',  {Codigo:gerentesData}, headers).catch((error) => errorsHandling(error))
    console.log(response)
    return response.data
  }

  const endUpdate = async (gerenteData) => {
    const headers = getHeaderToken()
    const response = await axios.post(process.env.REACT_APP_HOST + 'gerentes/endUpdate', gerenteData, headers).catch((error) => errorsHandling(error))
    return response.data
}
const beginUpdate = async (gerenteData) => {
  const headers = getHeaderToken()
  const response = await axios.post(process.env.REACT_APP_HOST + 'gerentes/beginUpdate', gerenteData, headers).catch((error) => errorsHandling(error))
  return response.data
}

const postGerentes = async (form) => {
    const headers = getHeaderToken()
    const response = await axios.post(process.env.REACT_APP_HOST + 'gerentes', form, headers ).catch((error) => errorsHandling(error))
    return response.data 
  }
const updateGerentes = async (form) => {
  const headers = getHeaderToken()
  const response = await axios.put(process.env.REACT_APP_HOST + 'gerentes' , form, headers)
  return response.data 
}  

const deleteGerentes = async (gerentesData) => {
  const response = await axios.delete(process.env.REACT_APP_HOST + 'gerentes', {  headers: {
    'db-connection': window.localStorage.getItem('db')
  }, data: gerentesData } )

  return response.data }

const gerentesService = {
    getGerentes, 
    postGerentes, 
    updateGerentes,
    beginUpdate, 
    deleteGerentes, 
    getGerentesById,
    endUpdate
  }


export default gerentesService