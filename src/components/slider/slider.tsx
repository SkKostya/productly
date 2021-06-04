import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { sizes } from "../../constants";

import { SliderItem } from "../../components";
import { IProps as ISliderItem } from "../../components/slider-item/slider-item";

import {
  Container,
  Item,
  Dot,
  DotsContainer
} from "./styles";

interface IProps {
  slides: ISliderItem[];
};

const Slider = ({ slides }: IProps) => {
  const [allSlides, setAllSlides] = React.useState(slides);

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [slidesPerView, setSlidesPerView] = React.useState(3);

  const slidesChange = (s: number) => {
    const newSlides = allSlides.map((item, i) =>
      i === s
      ? { ...item, isActive: true }
      : { ...item, isActive: false }
    );
    setAllSlides(newSlides);
  };
  const [sliderRef, slider] = useKeenSlider<any>({
    initial: 0,
    slidesPerView: slidesPerView,
    spacing: 30,
    loop: true,
    centered: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
      slidesChange(s.details().relativeSlide);
    },
    mounted(s) {
      slidesChange(s.details().relativeSlide);
    }
  });

  React.useEffect(() => {
    let resizeTimer: any;

    if(window.innerWidth > sizes.laptop && slidesPerView !== 3) {
      setSlidesPerView(3);
    }
    if(window.innerWidth <= sizes.laptop && window.innerWidth >= sizes.mobileL && slidesPerView !== 2) {
      setSlidesPerView(2);
    }
    if(window.innerWidth <= sizes.mobileL && slidesPerView !== 1) {
      setSlidesPerView(1);
    }

    function ScroolFixer(e: any) {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function() {
        console.log(e.target.innerWidth)
        if(e.target.innerWidth > sizes.laptop && slidesPerView !== 3) {
          setSlidesPerView(3);
        }
        if(e.target.innerWidth <= sizes.laptop && window.innerWidth >= sizes.mobileL && slidesPerView !== 2) {
          setSlidesPerView(2);
        }
        if(e.target.innerWidth <= sizes.mobileL && slidesPerView !== 1) {
          setSlidesPerView(1);
        }
      }, 500);
    }

    window.addEventListener("resize", ScroolFixer);
  }, [slidesPerView])

  return (
    <div>
      <div>
        <Container ref={sliderRef} className="keen-slider">
          {allSlides.map((item, i) =>
            <Item className="keen-slider__slide" key={item.image + i}>
              <SliderItem {...item} />
            </Item>
          )}
        </Container>
      </div>
      {slider && (
        <DotsContainer className="dots">
          {slides.map((item, idx) => {
            return (
              <Dot
                key={idx}
                onClick={() => {
                  slider.moveToSlideRelative(idx)
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              />
            )
          })}
        </DotsContainer>
      )}
    </div>
  );
};

export default Slider;
