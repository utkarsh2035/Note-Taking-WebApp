import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaRegCopy} from "react-icons/fa";
import { IoEyeOutline, IoShareOutline} from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { removePaste, updatePaste } from '../redux/pasteSlice';
import { toast } from 'react-toastify';
import ViewPaste from './ViewPaste';
import { NavLink } from 'react-router-dom';
const Paste = () => {
  const [search, setSearch] = React.useState("")
  const paste = useSelector((state)=> state.paste.paste)
  console.log(paste)
  const disPatch = useDispatch()
  const filteredData = paste.filter((paste)=> paste.title.toLowerCase().includes(search.toLowerCase())) 

  function handleDelete(pasteId){
    disPatch(removePaste(pasteId))
  }
  function handleUpdate(pasteId){
    disPatch(updatePaste(pasteId))
  }
  function handleShare(pasteId){
    
     const url = `${window.location.origin}/paste/${pasteId}`
     navigator.clipboard.writeText(url)
     toast.success("Link Copied to clipboard")
                    
  }
  return (
    <div className='bg-gray-700 min-h-screen text-white p-6 flex flex-col gap-10 items-center'>
      <input type="search" placeholder='search here...' value={search} onChange={(e)=> setSearch(e.target.value)}
      className='p-2 border-2 border-rose-500 rounded-lg text-xl text-rose-400 bg-gray-900 w-full md:w-1/2' />

      <div className='bg-gray-900 rounded-lg w-full max-w-screen-lg mx-auto flex flex-wrap gap-4 flex-col'>
      <div className='bg-black text-white w-full h-24 flex items-center  justify-center flex-wrap p-4 rounded-md resize-none text-xl border-b-4 '>
        <h1 className='text-5xl'>All Pastes</h1>
      </div>
        {
          filteredData.length > 0 &&
          filteredData.map((paste)=>{
            return (
              <div className='bg-black text-white w-full  p-4 rounded-md resize-none text-xl border-b-4' key={paste?._id}>
                <h1 className='text-3xl'>{paste.title}</h1>
                <div className=' text-gray-400 mt-2 mb-2 line-clamp-3 overflow-ellipsis overflow-hidden'>
                  {paste.content}
                </div>
                <div className='flex flex-row place-content-evenly flex-wrap w-46'>
                  <button className='p-2 rounded-lg hover:bg-rose-600'>
                    <FaRegCopy onClick={()=>{
                      navigator.clipboard.writeText(paste?.content)
                      toast.success("Copied to clipboard")
                    }} />
                  </button>
                  <button className='p-2 rounded-lg hover:bg-rose-600'>
                    <MdDeleteOutline  onClick={() => handleDelete(paste?._id)} />
                  </button>
                  <button className='p-2 rounded-lg hover:bg-rose-600'>
                    <IoShareOutline  onClick={()=>handleShare(paste?._id)} />
                  </button>
                  <button className='p-2 rounded-lg hover:bg-rose-600'>
                    <NavLink to={`/paste/${paste?._id}`}><IoEyeOutline />
                    </NavLink>
                  </button>
                  <button className='p-2 rounded-lg hover:bg-rose-600'>
                    <NavLink to={`/?pasteId=${paste?._id}`}><CiEdit />
                    </NavLink>
                  </button>
                </div>
                <div>
                  {paste.createdAt}
                </div>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default Paste