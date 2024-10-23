import React from 'react'

export default function Homepage() {
  return (
    <>
    <main>
      {/* Cover Image */}
      <div className="">
        <img 
          className="lg:h-[700px] h-[300px] w-full object-cover" 
          src="/Designer.png" 
          alt="Cover Image" 
        />
        <div className="absolute inset-0 flex items-start text-center mt-20">
          <h2 className="text-4xl font-bold text-white shadow p-4 rounded">
         
          </h2>
        </div>
      </div>
    </main>
  </>
  );
}
