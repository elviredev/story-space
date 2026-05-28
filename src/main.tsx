import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { HomeLayout, Landing, News, Webb, SpaceX, Apod, Hubble } from './pages'
import { newsPageLoader } from './pages/News'
import { ErrorElement } from './components'
import { hubblePageLoader } from './pages/Hubble'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    hydrateFallbackElement: <div>Loading...</div>,
    children: [
      { index: true, element: <Landing /> },
      { path: "news", element: <News />, loader: newsPageLoader, errorElement: <ErrorElement /> },
      { path: "webb", element: <Webb /> },
      { path: "spacex", element: <SpaceX /> },
      { path: "apod", element: <Apod /> },
      { path: "hubble", element: <Hubble />, loader: hubblePageLoader, errorElement: <ErrorElement /> },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
