
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Post from './pages/Post.jsx'
import './index.css'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'

const router = createBrowserRouter([
  {
  path:"/",
  element: <HomePage />
  },
  {
    path:"/signup",
    element: <SignUp/>
  },
  {
    path:"/login",
    element: <Login />
  },
  {
    path:"/post",
    element:<Post />
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
