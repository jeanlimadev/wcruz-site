
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
      <section className={styles.home}>
        <div className={styles.swiper}>
          <Swiper
            centeredSlides={true}
            autoplay={{
              "delay": 7000,
              "disableOnInteraction": false
            }}
            pagination={{"clickable": true}}
            navigation={true}
            className={styles.mySwiper}>

            <SwiperSlide>
              <div className={styles.box}>
                <img 
                  src="/images/homecenoura.jpg"
                />
                <div className={styles.text}>
                  <span className={styles.textImg}>Texto de teste</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.box}>
                <img 
                  src="/images/cenouras.jpg"
                />
                <div className={styles.text}>
                  <span className={styles.textImg}>Texto de teste</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.box}>
                <img 
                  src="/images/beterrabas.jpg"
                />
                <div className={styles.text}>
                  <span className={styles.textImg}>Texto de teste</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.box}>
                <img 
                  src="/images/batatadoce.jpg"
                />
                <div className={styles.text}>
                  <span className={styles.textImg}>Texto de teste</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </TemplateDefault>
  )
}

export default Home
