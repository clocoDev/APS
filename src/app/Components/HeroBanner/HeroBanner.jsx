"use client";
import React from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./HeroBanner.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const HeroWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "50vh",
  minHeight: "400px",
  overflow: "hidden",
  [theme.breakpoints.up("sm")]: {
    height: "60vh",
  },
  [theme.breakpoints.up("md")]: {
    height: "80vh",
  },
  [theme.breakpoints.up("lg")]: {
    height: "100vh",
  },
}));

const SlideContent = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)",
    zIndex: 1,
  },
});

const BackgroundMedia = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  "& img, & video": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

const ContentWrapper = styled(Container)({
  position: "relative",
  zIndex: 2,
  color: "white",
  maxWidth: "1400px !important",
  padding: "10px 20px",
});

const BookButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#B38349",
  color: "white",
  padding: "5px 20px",
  borderRadius: "25px",
  fontFamily: "var(--font-inter)",
  fontSize: "13px",
  fontWeight: 600,
  textTransform: "none",
  [theme.breakpoints.up("sm")]: {
    padding: "10px 32px",
    fontSize: "15px",
  },
  "&:hover": {
    backgroundColor: "#B88A3F",
  },
}));

const SignUpButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#121212",
  color: "white",
  padding: "4px 20px",
  borderRadius: "25px",
  fontFamily: "var(--font-inter)",
  fontSize: "13px",
  fontWeight: 600,
  textTransform: "none",
  border: "2px solid white",
  [theme.breakpoints.up("sm")]: {
    padding: "10px 32px",
    fontSize: "15px",
  },
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.1)",
    border: "2px solid white",
  },
}));

const HeroBanner = () => {
  const slides = [
    {
      type: "image",
      src: "/banner1.png",
      title: "Welcome to Acting Performance Studio",
      subtitle: "Transform your passion into performance",
      button1: {
        text: "Book a Trial",
        link: "/book-trial",
      },
      button2: {
        text: "Sign Up",
        link: "/signup",
      },
    },
    {
      type: "video",
      src: "/banner2.mp4",
      title: "Unleash Your Creativity",
      subtitle: "Professional acting classes for all ages",
      button1: {
        text: "View Classes",
        link: "/classes",
      },
      button2: {
        text: "Learn More",
        link: "/about",
      },
    },
    {
      type: "image",
      src: "/banner3.png",
      title: "Build Confidence on Stage",
      subtitle: "",
      button1: {
        text: "Get Started",
        link: "/signup",
      },
      button2: {
        text: "",
        link: "",
      },
    },
  ];

  return (
    <HeroWrapper>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        loop={true}
        style={{ width: "100%", height: "100%" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <BackgroundMedia>
              {slide.type === "image" ? (
                <Image
                  src={slide.src}
                  alt={slide.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority={index === 0}
                />
              ) : (
                <video autoPlay loop muted playsInline>
                  <source src={slide.src} type="video/mp4" />
                </video>
              )}
            </BackgroundMedia>
            <SlideContent>
              <ContentWrapper maxWidth="lg">
                {slide.title && (
                  <Typography
                    variant="h1"
                    sx={{
                      fontFamily: "var(--font-inter)",
                      fontSize: {
                        xs: "25px",
                        sm: "30px",
                        md: "45px",
                        lg: "50px",
                      },
                      color: "#FFFFFF",
                      fontWeight: 600,
                      lineHeight: 1.3,
                      letterSpacing: "1px",
                      mb: { xs: 1, sm: 2, md: 3 },
                      maxWidth: "600px",
                    }}
                  >
                    {slide.title}
                  </Typography>
                )}
                {slide.subtitle && (
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "var(--font-inter)",
                      fontSize: { xs: "14px", md: "18px" },
                      color: "#ECE1DB",
                      mb: { xs: 2, sm: 3, md: 4 },
                      maxWidth: "500px",
                      fontWeight: 300,
                    }}
                  >
                    {slide.subtitle}
                  </Typography>
                )}
                {(slide.button1?.text || slide.button2?.text) && (
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ flexWrap: "wrap", gap: 2 }}
                  >
                    {slide.button1?.text && (
                      <BookButton href={slide.button1.link}>
                        {slide.button1.text}
                      </BookButton>
                    )}
                    {slide.button2?.text && (
                      <SignUpButton href={slide.button2.link}>
                        {slide.button2.text}
                      </SignUpButton>
                    )}
                  </Stack>
                )}
              </ContentWrapper>
            </SlideContent>
          </SwiperSlide>
        ))}
      </Swiper>
    </HeroWrapper>
  );
};

export default HeroBanner;
