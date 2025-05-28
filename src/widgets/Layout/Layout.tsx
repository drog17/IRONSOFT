import Faq from "../Faq/FAQ"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Form from '../form/form'
import { Outlet } from "react-router-dom"


const Layout = () => {
  return (
    <div>
      <Header />
        <Outlet />
      <Faq />
      <Form />
      <Footer />
    </div>
  )
}

export default Layout
