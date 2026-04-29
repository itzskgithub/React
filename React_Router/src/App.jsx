import { useState } from 'react'

//This is used when we have to use the loaders
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

// This is used when we are not using the loaders
// import {RouterBrowser,Routes,Route} from 'react-router-dom'

//Importing the routes

import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Github, { githubInfoLoader } from './Pages/Github.jsx'
import User from './Pages/User.jsx'
import Home from './Pages/Home.jsx'

//Importing the components

import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'

function App() {

  return (
    // <BrowserRouter>
    //   <Header/>
    //     <Routes>
    //         <Route path='/' element={<Home />} />
    //         <Route path='/About' element ={<About />}/>
    //         <Route path='/Contact' element ={<Contact />}/>
    //         <Route 
    //         path='/Github' 
    //         // loader={githubInfoLoader}
    //         element={<Github />}/>
    //         <Route path='/User:/userid' element={<User />}/>
    //     </Routes>
    //   <Footer/>
    // </BrowserRouter>
    <RouterProvider router={router} />

  )
}

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '', element: <Home /> },
        { path: 'About', element: <About /> },
        { path: 'Contact', element: <Contact /> },
        { path: 'Github', element: <Github />, loader: githubInfoLoader },
        { path: 'User/:userid', element: <User /> }
      ]
    }
  ])
  function Layout() {
    return (
      <>
      <Header/>
      <Outlet/>
      <Footer/>
      </>
    )
    
  }


export default App
