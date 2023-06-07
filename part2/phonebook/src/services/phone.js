import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'


const getAll = () => {
    return axios.get(baseUrl).then(response => response.data);
}

const create = (newPhone) => {
    return axios.post(baseUrl, newPhone).then(response => response.data);
}

const deleteP = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}


const update = (id, newPhone) => {
    return axios.put(`${baseUrl}/${id}`, newPhone).then(response => response.data)
}

export default {getAll, create, deleteP, update};