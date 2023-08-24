import axios from "axios"

const api = new axios.create({
    baseURL:'http://localhost:4000'
})

export default api