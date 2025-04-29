import { Suspense } from 'react'
import Navbar from './components/Navbar'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './App.css'
import './index.css'
import RootLayout from './layouts/RootLayout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='skills' element={<Skills/>}/>
        <Route path='certifications' element={<Certifications/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    ),
    {
      future: {
        v7_relativeSplatPath: true
      }
    }
  )

  return (
    <div className="min-h-screen box-border text-white m-0 p-0 relative">
      <div className="rgb-ball-bg">
        <div className="rgb-ball"></div>
      </div>
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
        <RouterProvider router={router} future={{
    v7_startTransition: true,
  }}/>
      </Suspense>
    </div>
  )
}

export default App
