import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Homepage() {
  return (
    <>
    <main>
      {/* Cover Image */}
      <div className="relative mx-5">
        <img 
          className="lg:h-[60%] h-[300px] w-full object-cover" 
          src="/Designer (3).png" 
          alt="Cover Image" 
        />
        <div className="absolute inset-0 flex items-start text-center mt-20">
          <h2 className="text-4xl font-bold text-white shadow p-4 rounded">
          Welcome to Maharashtra’s Agricultural Hub!
          Empowering farmers with innovative solutions and resources for a thriving future.
          </h2>
        </div>
      </div>
      <Footer />
    </main>
  </>
  );
}
