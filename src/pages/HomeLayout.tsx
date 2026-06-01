import { Outlet, useLocation } from "react-router-dom"
import { Header, Navbar, Footer } from "@/components"
import { useEffect } from "react"

const HomeLayout = () => {
  // scroll to top
  const location = useLocation()
  // écouter tout changement sur "location"
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return <>
    <Header />
    <Navbar />
    <Outlet />
    <Footer />
  </>
}

export default HomeLayout