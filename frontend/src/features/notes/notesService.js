import axios from 'axios'

const API_URL = '/api/notes/'

//Create new goal
const createNotes = async (noteData, token) =>{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, noteData, config)

    return response.data
}

//Get user notes
const getNotes = async (token) =>{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL,config)

    return response.data
}
const notesService = {
    createNotes,
    getNotes
}

export default notesService