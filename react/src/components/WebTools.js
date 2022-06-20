import React,  { useState }from 'react'
import Captura from '../sample/Captura.PNG'
import fifa from '../sample/fifa.PNG'
import leagueof from '../sample/leagueof.PNG'
import age2 from '../sample/age2.PNG'



import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: Captura,
    altText: 'Counter Strike',
    tooltext:"Counter Strike" ,
    details:"Combate en un torneo junto a tu equipo para lanzarse como el campeon.",
    caption: 'Counter Strike'
  },
  {
    src: fifa,
    altText: 'Fifa',
    tooltext:"Fifa" ,
    caption: 'Fifa',
    details:"Pon a prueba tus habilidades en magnificos partidos contra otros jugadores"
  },
  {
    src: leagueof,
    altText: 'League Of Leyends',
    tooltext:"League Of Leyends" ,
    caption: 'League Of Leyends',
    details:"League of Legends es un juego en equipo con más de 140 campeones con los que realizar jugadas épicas."
  },
  {
    src: age2,
    altText: 'Age Of empires 2',
    tooltext:"Age Of empires 2" ,
    caption: 'Age Of empires 2',
    details:" Un videojuego de estrategia en tiempo real"
  },

];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
     
      <CarouselItem 
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      className="container fluid col sm-4">
        <div className="row">
        <div className="col sm-4">
        <img src={item.src} alt={item.altText} width="300px" height="300px" />
       
        </div >
        <div className="col sm-8" >
          <h2>{item.tooltext}</h2>
          <p>{item.details}</p>
        </div>
        </div>
        <hr/>
      </CarouselItem>
     
     
 
     
    );
  });
  const images = items.map((item)=>{
      return (
          <div className="col sm-4">
          <img src={item.src}  alt={item.altText} width="100px" height="100px"/>
          <h3> {item.altText}</h3>
          </div>
      )
  })

  return (
      <div>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
    <div className="row">{images}</div>
        
    </div>

  );
}

export default Example 
