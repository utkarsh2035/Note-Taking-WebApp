import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'
import '../output.css'

const Nav = () => {
  return (
    <div className="text-xl border-gray-200 dark:bg-gray-900 backdrop-blur-lg sticky top-0 z-50 shadow-md backdrop-opacity-10 place-content-center">
      <nav>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdWY7kILuScX-zbJJ-NLZiu0kfZ6jxn4SWHg&s" className="h-8" alt="Paste Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PAste App</span>
          </NavLink>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink to="/" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</NavLink>
              </li>
              <li>
                <NavLink to="/paste" className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pastes</NavLink>
              </li>
              <li>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav