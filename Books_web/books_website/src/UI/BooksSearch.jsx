import React from "react";

export const BooksSearch = () => {
  return (
    <>


      <section className="bg-white visible p-4">
        <div className="mb-4">
          <input
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm 
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Search by title or author..."
          />

         
        </div>
      </section>


    </>
  );
};
