import styles from '../styles/About.module.css'
import TemplateDefault from '../templates/Default'

const about = () => {
  return (
    <TemplateDefault>
      <section className={styles.about}>
        <h1>Sobre nós</h1>
      </section>
    </TemplateDefault>
  )
}

export default about