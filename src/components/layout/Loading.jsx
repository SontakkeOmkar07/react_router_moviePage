import React from 'react'

export const Loading = () => {
    return (
        <div className="flex justify-center items-center h-lvh">
      <div className="relative w-12 h-12">
        <div className="
          absolute  
          inset-0 
          rounded-full 
          border-4 
          border-transparent
          animate-spin
          bg-gradient-to-tr from-blue-500 to-purple-500 
          [mask-image:radial-gradient(farthest-side,transparent calc(100%-8px),#000 0)]
        "></div>

        <div className="absolute inset-2 bg-white rounded-full"></div>
      </div>
    </div>
    )
}
