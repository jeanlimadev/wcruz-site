
import TemplateDefault from '../templates/Default'

import styles from '../styles/home.module.css'

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/swiper.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"


// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper/core'

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation])

const Home = () => {

  return (
    <TemplateDefault>
      <div className={styles.container}>
        <Swiper
          centeredSlides={true}
          loop={true}
          autoplay={{
            "delay": 7000,
            "disableOnInteraction": false
          }}
          pagination={{"clickable": true}}
          navigation={true}
          className={styles.swiper}>

          <SwiperSlide>
            <div className={styles.box}>
              <img 
                src="/images/homecenoura.jpg"
              />
              <div className={styles.text}>
                <span className={styles.textImg}>Lorem ipsum</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.box}>
              <img 
                src="/images/cenouras.jpg"
              />
              <div className={styles.text}>
                <span className={styles.textImg}>Lorem ipsum</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.box}>
              <img 
                src="/images/beterrabas.jpg"
              />
              <div className={styles.text}>
                <span className={styles.textImg}>Lorem ipsum</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.box}>
              <img 
                src="/images/batatadoce.jpg"
              />
              <div className={styles.text}>
                <span className={styles.textImg}>Lorem ipsum</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className={styles.welcome}>
          <div className={styles.text}>
            <h1>Bem-vindo!</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <img src="images/lavador-wcruz-home.jpeg" alt="wcruz" />
        </div>
        <div className={styles.local}>
          <h2>Localização</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.3896741392527!2d-42.80121318547264!3d-22.14923428540221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9815c24909e149%3A0xe7b072f2be14fe5f!2sWcruz!5e0!3m2!1spt-BR!2sbr!4v1624122822067!5m2!1spt-BR!2sbr"
            allowfullscreen=""
            loading="lazy"
          />
        </div>
      </div>
      
    </TemplateDefault>
  )
}

export default Home
