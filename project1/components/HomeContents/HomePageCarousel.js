import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Container,
} from '@chakra-ui/react';

import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function HomePageCarousel() {

  const [slider, setSlider] = React.useState(null);


  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });


  const cards = [
    {
      title: '',
      text:
        "",
      image:
      
        'https://cdn.kimkim.com/files/a/images/ceb6c1ccfc1da56c233f4987e4ac58066d01bf36/big-570d6dbcc2255abf5a85e1d9ee4b3731.jpg',
    },
    {
      title: '',
      text:
        "",
      image:
      
        'https://livability.com/wp-content/uploads/2018/05/PortlandME-LighthouseDusk.jpg',
    },
    {
      title: '',
      text:
        "",
      image:
        'https://content.thriveglobal.com/wp-content/uploads/2020/06/summer.jpg',
    },{
        title: '',
        text:
          "",
        image:
          'https://files.tripstodiscover.com/files/2015/10/Kyoto-Japan.jpg',
      },
  ];

  return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'full'}
            width="full"
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'xl'}
                position="absolute"
                top="20%"
                left={"32%"}
                transform="translate(0, -100%)">
                <Heading fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }} fontWeight="hairline">
                  {card.title}
                </Heading>
                
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}