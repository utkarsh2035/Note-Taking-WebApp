import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const initialState = {
  paste: localStorage.getItem("paste") ? JSON.parse(localStorage
    .getItem("paste")
  ): []
}


export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addPaste: (state, action) => {
      const paste = action.payload
      state.paste.push(paste)
      localStorage.setItem("paste", JSON.stringify(state.paste))
    },

    updatePaste: (state, action) => {
      const paste = action.payload
      const index = state.paste.findIndex((item)=> item._id === paste._id)
      if(index >=0){
        state.paste[index] = paste
        localStorage.setItem("paste", JSON.stringify(state.paste))
      }
    },
    reseteAllPaste: (state, action) => {
      state.paste = []
      localStorage.removeItem("paste")
    },
    removePaste: (state, action)=>{
      const paste = action.payload
      const index = state.paste.findIndex((item)=> state._id === paste._id)
      if(index >= 0){
        state.paste.splice(index, 1)
        localStorage.setItem("paste", JSON.stringify(state.paste))
        toast.success("Paste Deleted Successfully")

      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addPaste, updatePaste, reseteAllPaste, removePaste } = pasteSlice.actions

export default pasteSlice.reducer