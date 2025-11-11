"use client";
import React from "react";
import { Box, Container, Typography, Button, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./SpecialWorkshop.css";

const SectionWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "700px",
  overflow: "hidden",
  [theme.breakpoints.between(0, 550)]: {
    height: "500px",
  },
}));

const SlideWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "700px",
  [theme.breakpoints.between(0, 550)]: {
    height: "500px",
  },
}));

const BackgroundImage = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)",
    zIndex: 1,
  },
});

const ContentWrapper = styled(Container)(({ theme }) => ({
  position: "relative",
  padding: "60px 100px 30px 0px",
  zIndex: 2,
  width: "50%",
  height: "100%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-end",
  [theme.breakpoints.between(0, 700)]: {
    width: "100%",
    justifyContent: "center",
    padding: "40px",
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "100px",
  right: "-150px",
  maxWidth: "550px",
  paddingLeft: "40px",
  textAlign: "center",
  [theme.breakpoints.between(0, 700)]: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    right: "0px",
    paddingLeft: "0px",
    top: "0px",
  },
}));

const TagLabel = styled(Typography)(({ theme }) => ({
  color: "#B38349",
  fontFamily: "var(--font-inter)",
  fontSize: "16px",
  fontWeight: 700,
  lineHeight: "30px",
  letterSpacing: "0.75px",
  marginBottom: "10px",
  textTransform: "uppercase",
  textAlign: "center",
  [theme.breakpoints.between(0, 550)]: {
    fontSize: "15px",
  },
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  color: "#FFFFFF",
  fontFamily: "var(--font-inter)",
  fontSize: "35px",
  fontWeight: 700,
  lineHeight: "30px",
  letterSpacing: "0.75px",
  marginBottom: "10px",
  textAlign: "center",
  [theme.breakpoints.between(0, 550)]: {
    fontSize: "30px",
  },
}));

const PriceText = styled(Typography)(({ theme }) => ({
  color: "#FFFFFF",
  fontFamily: "var(--font-inter)",
  fontSize: "55px",
  fontWeight: 700,
  marginBottom: "20px",
  textAlign: "center",
  [theme.breakpoints.between(0, 550)]: {
    fontSize: "50px",
  },
}));

const InfoGrid = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  gap: "30px",
  marginBottom: "40px",
  textAlign: "center",
});

const InfoBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const IconWrapper = styled(Box)({
  color: "#C99A4F",
  fontSize: "28px",
  marginBottom: "10px",
});

const InfoLabel = styled(Typography)(({ theme }) => ({
  color: "#B38349",
  fontFamily: "var(--font-inter)",
  fontSize: "15px",
  fontWeight: 600,
  lineHeight: "30px",
  letterSpacing: "0.75px",
  textTransform: "uppercase",
  [theme.breakpoints.between(0, 550)]: {
    fontSize: "14px",
  },
}));

const InfoValue = styled(Typography)(({ theme }) => ({
  color: "#FFFFFF",
  fontFamily: "var(--font-inter)",
  fontSize: "15px",
  fontWeight: 600,
  lineHeight: "30px",
  letterSpacing: "0.75px",
  [theme.breakpoints.between(0, 550)]: {
    fontSize: "14px",
  },
}));

const ApplyButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#B38349",
  color: "white",
  padding: "12px 45px",
  borderRadius: "30px",
  fontFamily: "var(--font-inter)",
  fontSize: "16px",
  fontWeight: 600,
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#B88A3F",
  },
  [theme.breakpoints.between(0, 550)]: {
    fontSize: "15px",
    padding: "8px 40px",
  },
}));

const SpecialWorkshop = () => {
  const workshops = [
    {
      id: 1,
      tag: "SPECIAL WORKSHOP",
      title: "Theatre Show",
      price: "$999",
      date: "December 28, 2025",
      instructor: "Maria Lopez",
      image: "/bg2.png",
      link: "/workshop/theatre-show",
    },
    {
      id: 2,
      tag: "SPECIAL WORKSHOP",
      title: "Acting Intensive",
      price: "$799",
      date: "January 15, 2026",
      instructor: "John Smith",
      image: "/bg2.png",
      link: "/workshop/acting-intensive",
    },
  ];

  return (
    <SectionWrapper className="special-workshop">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "workshop-bullet",
          bulletActiveClass: "workshop-bullet-active",
        }}
        loop={true}
        style={{ height: "100%" }}
      >
        {workshops.map((workshop) => (
          <SwiperSlide key={workshop.id}>
            <SlideWrapper>
              {/* Background Image */}
              <BackgroundImage>
                <Image
                  src={workshop.image}
                  alt={workshop.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority={workshop.id === 1}
                />
              </BackgroundImage>

              {/* Content - Right Side */}
              <ContentWrapper maxWidth="xl">
                <ContentBox>
                  <TagLabel>{workshop.tag}</TagLabel>
                  <MainTitle variant="h1">{workshop.title}</MainTitle>
                  <PriceText>{workshop.price}</PriceText>

                  <InfoGrid>
                    <InfoBox>
                      <IconWrapper>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                        >
                          <path
                            d="M8.75 0V2.5H16.25V0H18.75V2.5H23.75C24.0815 2.5 24.3995 2.6317 24.6339 2.86612C24.8683 3.10054 25 3.41848 25 3.75V23.75C25 24.0815 24.8683 24.3995 24.6339 24.6339C24.3995 24.8683 24.0815 25 23.75 25H1.25C0.918479 25 0.600537 24.8683 0.366116 24.6339C0.131696 24.3995 0 24.0815 0 23.75V3.75C0 3.41848 0.131696 3.10054 0.366116 2.86612C0.600537 2.6317 0.918479 2.5 1.25 2.5H6.25V0H8.75ZM22.5 12.5H2.5V22.5H22.5V12.5ZM6.25 5H2.5V10H22.5V5H18.75V7.5H16.25V5H8.75V7.5H6.25V5Z"
                            fill="white"
                          />
                        </svg>
                      </IconWrapper>
                      <InfoLabel>Dates</InfoLabel>
                      <InfoValue>{workshop.date}</InfoValue>
                    </InfoBox>

                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ background: "#FFFFFF", width: "1px" }}
                    />

                    <InfoBox>
                      <IconWrapper>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27"
                          height="27"
                          viewBox="0 0 27 27"
                          fill="none"
                        >
                          <path
                            d="M1 22.875C1 21.2174 1.65848 19.6277 2.83058 18.4556C4.00268 17.2835 5.5924 16.625 7.25 16.625H19.75C21.4076 16.625 22.9973 17.2835 24.1694 18.4556C25.3415 19.6277 26 21.2174 26 22.875C26 23.7038 25.6708 24.4987 25.0847 25.0847C24.4987 25.6708 23.7038 26 22.875 26H4.125C3.2962 26 2.50134 25.6708 1.91529 25.0847C1.32924 24.4987 1 23.7038 1 22.875Z"
                            stroke="white"
                            stroke-width="2"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13.5 10.375C16.0888 10.375 18.1875 8.27633 18.1875 5.6875C18.1875 3.09867 16.0888 1 13.5 1C10.9112 1 8.8125 3.09867 8.8125 5.6875C8.8125 8.27633 10.9112 10.375 13.5 10.375Z"
                            stroke="white"
                            stroke-width="2"
                          />
                        </svg>
                      </IconWrapper>
                      <InfoLabel>Instructor</InfoLabel>
                      <InfoValue>{workshop.instructor}</InfoValue>
                    </InfoBox>
                  </InfoGrid>

                  <ApplyButton href={workshop.link}>Apply Today</ApplyButton>
                </ContentBox>
              </ContentWrapper>
            </SlideWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionWrapper>
  );
};

export default SpecialWorkshop;
