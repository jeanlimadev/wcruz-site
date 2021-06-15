import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import styles from '../styles/TemplateDefault.module.css'


const Default = ({ children}) => {
  return (
    <div className={styles.container}>
      <Header />
      { children }
      <div className={styles.whatsapp}>
        <a href="https://api.whatsapp.com/send?phone=5522981041287" target="_blank"><img src={'/images/whatsapp.svg'} /></a>
      </div>
      <Footer />
    </div>
  )
}

export default Default