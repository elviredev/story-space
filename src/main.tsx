import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HomeLayout, Landing, News, Webb, SpaceX, Apod, Hubble } from './pages'
import { newsPageLoader } from './pages/News'
import { ErrorElement } from './components'
import { hubblePageLoader } from './pages/Hubble'
import { apodPageloader } from './pages/Apod'
import { webbPageLoader } from './pages/Webb'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    hydrateFallbackElement: <div>Loading...</div>,
    children: [
      { index: true, element: <Landing /> },
      { path: "news", element: <News />, loader: newsPageLoader, errorElement: <ErrorElement /> },
      { path: "webb", element: <Webb />, loader: webbPageLoader, errorElement: <ErrorElement /> },
      { path: "spacex", element: <SpaceX /> },
      { path: "apod", element: <Apod />, loader: apodPageloader, errorElement: <ErrorElement /> },
      { path: "hubble", element: <Hubble />, loader: hubblePageLoader, errorElement: <ErrorElement /> },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
