import { Outlet } from "react-router-dom"
import { Header, Navbar, Footer } from "@/components"

const HomeLayout = () => {
  return <>
    <Header />
    <Navbar />
    <Outlet />
    <Footer />
  </>
}

export default HomeLayout