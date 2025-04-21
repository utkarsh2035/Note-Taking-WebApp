import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './output.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store.js'
import { ToastContainer, toast } from 'react-toastify';
createRoot(document.getElementById('root')).render(
    <Provider store = {store}>
      <App />
      <ToastContainer />
    </Provider>
)
