import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Data from './components/Data'
import Home from './components/Home'
import About from './components/About'
import { createContext } from 'react'
import RegistrationForm from './components/RegistrationForm'
import Contact from './components/Contact'

export const myContext = createContext()

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/data',
          element: <Data />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/registration',
          element: <RegistrationForm />
        }
      ],
    },
  ])
  const fname = 'Jack'
  const age = 25
  return (
    <>
      <myContext.Provider value={{ fname, age }}>
        <RouterProvider router={router} />
      </myContext.Provider>
    </>
  )
}

export default App
