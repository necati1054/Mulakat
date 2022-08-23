import axios from "axios";
const API_URL = "http://localhost:8000/api/";

const AllData = () => {
    return axios.get(API_URL+"book")
}

const AddBook = (item) => {
    return axios.post(API_URL+"book",item)
}

const BookServices = {
    AllData,
    AddBook
}

export default BookServices;