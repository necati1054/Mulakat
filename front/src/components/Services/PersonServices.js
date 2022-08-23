import axios from "axios";
const API_URL = "http://localhost:8000/api/";

const AllData = () => {
    return axios.get(API_URL+"person")
}

const AddPerson = (item) =>{
    return axios.post(API_URL+"person",item)
}

const PersonServices = {
    AllData,
    AddPerson
}

export default PersonServices;