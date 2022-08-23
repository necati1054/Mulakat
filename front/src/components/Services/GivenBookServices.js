import axios from "axios";
const API_URL = "http://localhost:8000/api/";

const AllData = () => {
    return axios.get(API_URL+"given_book")
}

const AddGivenBook = (item) => {
    return axios.post(API_URL+"given_book",item)
}

const DestroyGivenBooK = (item) =>{
    return axios.delete(API_URL+"given_book",item)
}

const GivenBookServices = {
    AllData,
    AddGivenBook,
    DestroyGivenBooK,
}

export default GivenBookServices