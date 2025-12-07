import React, { useEffect, useState } from 'react'
import { Card } from '../UI/Card'
// import { useLoaderData } from 'react-router-dom';
import { BooksSearch } from '../UI/BooksSearch';
// import { getBooksData } from '../api/GetAPI';
import { getBooks } from '../services/GetServices';

export const Books = () => {

  // const booksData = useLoaderData();

  const [data,setData] = useState([]);


  const getBooksData = async() =>{

    try {
      
      const response = await getBooks();

      console.log(response.data.items);
      setData(response.data.items);
    } catch (error) {
      console.error("Error message", error.message);
      console.error("Error status", error.status);
      console.error("Error status", error.data);
      
    }

    

  }

  useEffect(() =>{
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getBooksData();

  },[]);

  // console.log(booksData.items);


  
  return (
    <>
    <BooksSearch />
      <ul className='border border-gray-300 p-4  
               grid place-items-center 
               gap-10 
               grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>

        {data.map((curBook) => {

          return <Card key={curBook.id} curBook={curBook} />

        })}

      </ul>

    </>
  )
}
