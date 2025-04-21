import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { updatePaste, addPaste } from '../redux/pasteSlice'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';


const Home = () => {
    const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [searchParam, setParam] = useSearchParams()
  const pasteId = searchParam.get("pasteId")
  const dispatch = useDispatch()
  const allPaste = useSelector((state)=> state.paste.paste)
  useEffect(()=>{
    if(pasteId){
      const paste = allPaste.find((paste)=> paste?._id === pasteId)
      console.log("page found")
      setTitle(paste.title)
      setText(paste.content)
    }
  }, [pasteId])

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };
  function createPaste() {
    if (!title.trim() || !text.trim()) {
      toast.error("Title and content cannot be empty!");
      return;
    }
  
    const paste = {
      title: title,
      content: text,
      _id: pasteId || Date.now().toString(36),
      createdAt: formatDate(new Date().toISOString()),
    };
  
    if (pasteId) {
      dispatch(updatePaste(paste));
      toast.success("Paste Updated Successfully");
    } else {
      dispatch(addPaste(paste));
      toast.success("Paste Created Successfully");
    }
  
    setTitle('');
    setText('');
    setParam({});
  }
  return (
    <div className="bg-gray-700 min-h-screen text-white p-6 flex flex-col gap-10">
      {/* Top Input Section */}
      <div className="bg-transparent p-4 rounded-lg flex flex-wrap gap-4 items-center place-content-center">
        <input
          type="text"
          value={title}
          placeholder="Enter Title Here"
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border-2 border-rose-500 rounded-lg text-xl text-rose-400 bg-gray-900 w-full md:w-1/2"
        />

        <button className="bg-rose-500 p-2 border-2 border-gray-500 rounded-lg text-xl text-white hover:bg-rose-600 transition" onClick={createPaste}>
          {pasteId ? "Update Paste" : "Create Paste"}
        </button>
      </div>

      {/* Textarea Section */}
      <div className="bg-green-500 rounded-lg p-4 w-full max-w-screen-lg mx-auto flex flex-wrap">
        <textarea
          className="bg-black text-white w-full h-96 p-4 rounded-md resize-none text-xl"
          placeholder="Write your paste content here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  )
}

export default Home
