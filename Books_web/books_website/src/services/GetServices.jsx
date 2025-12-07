import axios from 'axios';

const api = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes/",
});


export const getBooks = () =>{

   return api.get("?q=subject:psychology&maxResults=30");
}