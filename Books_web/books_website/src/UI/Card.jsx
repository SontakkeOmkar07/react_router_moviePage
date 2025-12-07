import React from 'react';

export const Card = ({ curBook }) => {
  const { volumeInfo } = curBook;
  const { title, imageLinks } = volumeInfo || {};
  const { thumbnail } = imageLinks || {};

  return (
    <>
      <li className="w-70 h-80 shadow-lg  relative top-20 bg-white rounded-lg shadow-md flex flex-col mt-6">

        <figure className='w-full h-60'>
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-60  "
          />
        </figure>

        <div className="p-3 flex flex-col gap-2 flex-1 relative">
          <h5 className="text-xl font-poppins font-semibold line-clamp-2 text-center">
            {title}
          </h5>



          <p className="text-xs text-gray-600 mt-1 line-clamp-3 text-center">
          </p>

          {/* Button pushed to bottom by mt-auto */}
          <button
            className="text-2xl py-4 px-4 w-full rounded-sm mt-auto bg-yellow-400 text-white text-xl py-1.5  w-full hover:bg-yellow-500 transition font-bold absolute bottom-0 "
          >
            Checkout
          </button>
        </div>

      </li>


    </>
  );
};

