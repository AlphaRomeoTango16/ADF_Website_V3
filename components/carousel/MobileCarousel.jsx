import styled from 'styled-components'
import Card from '../card/Card'
import projectList from '../../projectList';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function MobileCarousel() {
  return (
    <MobileCarouselContainer>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {projectList.map((project, index) => {
          return (
            <div key={index}>
              <SwiperSlide>
                <Card
                  key={`${project.title}-${index}`}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  icons={project.iconsList}
                  link={project.link}
                />
              </SwiperSlide>
            </div>
          )
        })}
      </Swiper>
    </MobileCarouselContainer>
  )
}

export default MobileCarousel

const MobileCarouselContainer = styled.div`
  display: flex;
  align-items: center;
`