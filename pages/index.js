
import TemplateDefault from '../templates/Default'

import styles from '../styles/Home.module.css'

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
                <span className={styles.textImg}>Mercadorias de qualidade</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.box}>
              <img 
                src="/images/cenouras.jpg"
              />
              <div className={styles.text}>
                <span className={styles.textImg}>Produção própria</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.box}>
              <img 
                src="/images/beterrabas.jpg"
              />
              <div className={styles.text}>
                <span className={styles.textImg}>Direto do produtor</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.box}>
              <img 
                src="/images/batatadoce.jpg"
              />
              <div className={styles.text}>
                <span className={styles.textImg}>Qualidade para sua mesa</span>
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
          <div>
            <img src="images/lavador-wcruz-home.jpeg" alt="wcruz" />
          </div>
        </div>
      </div>
    </TemplateDefault>
  )
}

export default Home
