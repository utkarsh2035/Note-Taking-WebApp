import React from 'react'
import './index.css'
import './output.css'
import Nav from './components/Nav'
import Home from './components/Home'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PageNotFound from './components/PageNotFound'

const router = createBrowserRouter(
     [
          {
               path: '/',
               element: 
               <div>
                    <Nav />
                    <Home />
               </div>
          },
          {
               path: '/paste',
               element: 
               <div>
                    <Nav />
                    <Paste />
               </div>
          },
          {
               path: '/paste/:id',
               element: 
               <div>
                    <Nav />
                    <ViewPaste />
               </div>
          },
          {
               path: '*',
               element:
               <div>
                    <Nav/>
                    <PageNotFound />
               </div>
          }
     ]
)
function App() {
     return (
          <RouterProvider router = {router} />
     )
    
}

export default App
