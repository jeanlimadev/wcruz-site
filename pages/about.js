import styles from '../styles/About.module.css'
import TemplateDefault from '../templates/Default'

const about = () => {
  return (
    <TemplateDefault>
      <div className={styles.container}>
        <div className={styles.banner}>
          <img src="/images/lavador-wcruz.jpeg" />
          <div className={styles.box}>
            <h2>A Wcruz</h2>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.title}>
              <img src="images/mission-icon.svg" alt="mission" />
              <h2>Missão</h2>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.title}>
              <img src="images/vision-icon.svg" alt="vision" />
              <h2>Visão</h2>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.title}>
              <img src="images/value-icon.svg" alt="mission" />
              <h2>Valores</h2>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
          </div>
        </div>
      </div>
    </TemplateDefault>
  )
}

export default about