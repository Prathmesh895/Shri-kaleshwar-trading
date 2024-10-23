import React, { useState } from 'react';
import { FaPlusCircle } from "react-icons/fa";

function Sell() {
  const [Isopen, setIsopen] = useState(false);
  const handleOnOpen = () => {
    setIsopen(!Isopen);
  }
  return (
    <div className='p-1'>
      <div className="flex items-center justify-between border-b pb-5 mx-3 border-gray-700">
        <h1 className="text-xl">Sell of Goods</h1>
        <h1 onClick={handleOnOpen} className="border w-[120px] h-[35px] flex justify-center items-center cursor-pointer border-greenCustom rounded hover:bg-green-400">
          Add new
        </h1>
      </div>
      <div className="my-5 mx-3">
        <h1 className='my-5'>Sell Details</h1>
        <div className="overflow-x-auto">
          <table className="border dark:border-gray-700 w-full min-w-[800px] md:min-w-0">
            <thead className="border-b border-gray-700 lg:text-[14px] text-[12px]">
              <tr>
                <th className="p-2">Sr/No</th>
                <th className="p-2">Date</th>
                <th className="p-2">Bill Status</th>
                <th className="p-2">Company Name</th>
                <th className="p-2">Soda Rs/qtl</th>
                <th className="p-2">Weight</th>
                <th className="p-2">Amount</th>
                <th className="p-2">Date of Payment</th>
                <th className="p-2">Mode</th>
                <th className="p-2">Delevery Date</th>

              </tr>
            </thead>
            <tbody>
              <tr className="text-center lg:text-[14px] text-[12px] border-b group hover:bg-gray-200 hover:dark:bg-slate-900">
                <td className="border-y border-r cursor-pointer dark:border-r-slate-700 p-2 flex items-center justify-center space-x-4 group-hover:border-b-greenCustom">
                  <FaPlusCircle className="text-greenCustom" /><p>1</p>
                </td>
                <td className="border-y p-2 group-hover:border-b-greenCustom">17/08/2024</td>
                <td className="border-y p-2 group-hover:border-b-greenCustom">Pending</td>
                <td className="border-y p-2 group-hover:border-b-greenCustom">Kirti Pvt Ldt</td>
                <td className="border-y p-2 group-hover:border-b-greenCustom">4480 Rs/qtl</td>
                <td className="border-y p-2 group-hover:border-b-greenCustom">1000 Kg</td>
                <td className="border-y p-2 group-hover:border-b-greenCustom">100000</td>
                <td className="border-y p-2 group-hover:border-b-greenCustom">10/10/2024</td>
                <td className="border-y p-2 group-hover:border-b-greenCustom">Cash</td>
                <td className="border-y p-2 group-hover:border-b-greenCustom">10/10/2024</td>

              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {
        Isopen &&
        <div className='backdrop-blur-md absolute w-full left-0 top-20 min-h-screen flex items-center justify-center'>
          <div className='w-full max-w-md backdrop-blur-sm'>
            <form className='relative border md:w-full flex flex-col rounded dark:bg-slate-900 space-y-5 p-5 font-semibold font-sans text-sm'>
              <h1 className='text-xl'>Add New Sell Details</h1>
              <div>
                <label htmlFor="name">Enter Company Name</label>
                <input type="text" className='w-full dark:bg-slate-900' />
              </div>
              <div>
                <label htmlFor="contact">Date of Soda </label>
                <input type="date" className='w-full dark:bg-slate-900' />
              </div>
              <div>
                <label htmlFor="date">Enter Date of Sell</label>
                <input type="date" className='w-full dark:bg-slate-900' />
              </div>
              <div>
                <label htmlFor="product">Product Type</label>
                <input type="text" className='w-full dark:bg-slate-900' />
              </div>
              <div>
                <label htmlFor="weight">Total Weight</label>
                <input type="number" className='w-full dark:bg-slate-900' />
              </div>
              <div>
                <label htmlFor="rate">Soda Rate/Kg</label>
                <input type="number" className='w-full dark:bg-slate-900' />
              </div>
              <div>
                <label htmlFor="advance">Amount to be Receive</label>
                <input type="number" className='w-full dark:bg-slate-900' />
              </div>
              <div>
                <label htmlFor="product">Mode of Payment</label>
                <input type="text" className='w-full dark:bg-slate-900' />
              </div>
              <div>
                <label htmlFor="datePayment">Date of Payment</label>
                <input type="date" className='w-full dark:bg-slate-900' />
              </div>
              <div>
                <label htmlFor="product">Remarks</label>
                <input type="text" className='w-full dark:bg-slate-900' />
              </div>
              <div className='flex justify-between'>
                <button onClick={handleOnOpen} className='bg-gray-200 p-2 w-[45%] mt-4'>Cancel</button>
                <button className='p-2 w-[45%] mt-4'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      }
    </div>
  );
}

export default Sell;
