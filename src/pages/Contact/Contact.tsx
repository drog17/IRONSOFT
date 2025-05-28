import Footer from "../../widgets/Footer/Footer"
import Header from "../../widgets/Header/Header"
import Hero from "./Components/Hero/Hero"
import styles from './contact.module.scss'
const Contact = () => {
  return (
    <div className={styles.contact}>
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default Contact
