import React, { useState } from 'react'
import { MainHeader } from '../../MainHeader/MainHeader'
export default function Contant() {
  const [isChange, setisChange] = useState({
    name:false,
     email:false,
     age:false,
      password:false,
  });
  

  function handleChange(e) {
    setisChange((prev)  => ({
      ...prev,
      [e.target.id]:true,
    }));

  }
  return (
    <div>
      <MainHeader>conatct section</MainHeader>
      <div className="mx-auto w-full sm:w-11/12 md:10/12">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group relative  mb-6 py-2">

            <input
              type="text"
              id='name'
              placeholder='User Name'
              className='w-full outline-none border-b-2'
              onChange={handleChange}
        
           
            />
            <label
              htmlFor="name"
              className={` absolute left-0 top-20 ${isChange.name  ? "opacity-100 top-[-30px]" : "opacity-0"
                } transition-[opacity,top] duration-300 text-red-400   `}
            >
              Enter Name:
            </label>

          </div>
               <div className="form-group relative  mb-6 py-2">

            <input
              type="text"
              id='email'
              placeholder='UserEmail'
              className='w-full outline-none border-b-2'
              onChange={handleChange}
        
           
            />
            <label
              htmlFor="name"
              className={` absolute left-0 top-20 ${isChange.email  ? "opacity-100 top-[-30px]" : "opacity-0"
                } transition-[opacity,top] duration-300 text-red-400   `}
            >
              Enter email:
            </label>

          </div>
               <div className="form-group relative  mb-6 py-2">

            <input
              type="text"
              id='age'
              placeholder='UserAge'
              className='w-full outline-none border-b-2'
              onChange={handleChange}
        
           
            />
            <label
              htmlFor="name"
              className={` absolute left-0 top-20 ${isChange.age  ? "opacity-100 top-[-30px]" : "opacity-0"
                } transition-[opacity,top] duration-300 text-red-400   `}
            >
              Enter age:
            </label>

          </div>
               <div className="form-group relative  mb-6 py-2">

            <input
              type="text"
              id='password'
              placeholder='UserPassword'
              className='w-full outline-none border-b-2'
              onChange={handleChange}
        
           
            />
            <label
              htmlFor="name"
              className={` absolute left-0 top-20 ${isChange.password  ? "opacity-100 top-[-30px]" : "opacity-0"
                } transition-[opacity,top] duration-300 text-red-400   `}
            >
              Enter password:
            </label>

          </div>
      
          <button className='py-2 px-4 bg-green-500 rounded-md hover:bg-green-400 transition-all duration-300'>Submit</button>
        </form>
      </div>
    </div>
  );
}
