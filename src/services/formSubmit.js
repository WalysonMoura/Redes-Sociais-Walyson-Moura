import axios from "axios"

const formSubmit = axios.create({
    baseURL: ""
})

export default formSubmit;