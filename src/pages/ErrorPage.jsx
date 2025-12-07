// import React from 'react'
import {  useNavigate, useRouteError } from 'react-router-dom'


export const ErrorPage = () => {



    const navigate = useNavigate();

    // useNavigate()- if the user go default route then the again back the only 1 step the user location route. this is useful for redirect the user checking route


    const handlePage = () =>{

        // navigate("/");//home page 
        navigate(-1);


    }

    const error = useRouteError();
    console.log(error);

    if (error.status === 404) {
        return (
            <section className='flex justify-center items-center min-h-screen '>
                <div className='flex flex-col items-center'>
                    <figure>
                        <img src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif" alt="" />
                    </figure>

                    <div className='text-center mb-8'>
                        <p className='relative bottom-8 ' > The page you were looking for could not be found</p>
                        <p className='relative bottom-8 '>... Back to previous page</p>

                    </div>

                    {/* <button className=' text-center bg-blue-500 text-white p-3 mt-4   '><NavLink to="/" >
                        Go Back To HomePage

                    </NavLink>
                    </button> */}

                    <button className='text-center bg-blue-500 text-white p-4 relative bottom-8' onClick={handlePage}>Go Back</button>


                </div>


            </section>
        )
    }



}

