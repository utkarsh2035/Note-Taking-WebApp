import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { updatePaste, addPaste } from '../redux/pasteSlice'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const ViewPaste = () => {
const {id} = useParams()
const allPaste = useSelector((state)=> state.paste.paste)
const paste = allPaste.filter((paste)=> paste?._id === id)[0]
console.log(paste)
  return (
    <div className="bg-gray-700 min-h-screen text-white p-6 flex flex-col gap-10">
      {/* Top Input Section */}
      <div className="bg-transparent p-4 rounded-lg flex flex-wrap gap-4 items-center place-content-center">
        <input
          disabled
          type="text"
          value={paste.title}
          className="p-2 border-2 border-rose-500 rounded-lg text-xl text-rose-400 bg-gray-900 w-full md:w-1/2"
        />

      </div>

      <div className="bg-green-500 rounded-lg p-4 w-full max-w-screen-lg mx-auto flex flex-wrap">
        <textarea
          disabled
          className="bg-black text-white w-full h-96 p-4 rounded-md resize-none text-xl"
          value={paste.content}
          rows={20}
        />
      </div>
    </div>
  )
}

export default ViewPaste
