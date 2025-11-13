"use client";
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { InstagramEmbed } from "react-social-media-embed";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Instagram.css";

const SectionWrapper = styled(Box)({
  position: "relative",
  width: "100%",
  overflow: "hidden",
  backgroundColor: "#FFFFFF",
});

const HeaderSection = styled(Box)({
  backgroundColor: "#B8915F",
  padding: "20px 0",
  textAlign: "center",
});

const HeaderText = styled(Typography)({
  color: "#FFFFFF",
  fontSize: "16px",
  fontWeight: 600,
  letterSpacing: "1px",
  textTransform: "uppercase",
  "@media (max-width: 960px)": {
    fontSize: "14px",
    padding: "0 20px",
  },
});

const GallerySection = styled(Box)({
  padding: "40px 0",
  backgroundColor: "#F9F9F9",
});

const EmbedWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  "& > div": {
    width: "100%",
    maxWidth: "400px",
  },
});

const Instagram = () => {
  // Replace these URLs with your actual Instagram post URLs
  const instagramPosts = [
    "https://www.instagram.com/p/CUbHfhpswxt/",
    "https://www.instagram.com/p/CV9qT7FFZKR/",
    "https://www.instagram.com/p/CW8MHnDFZKT/",
    "https://www.instagram.com/p/CXkLMnPF9KU/",
    "https://www.instagram.com/p/CYjKMnOF8KV/",
    "https://www.instagram.com/p/CZiJKnNF7KW/",
  ];

  return (
    <SectionWrapper>
      {/* Header */}
      <HeaderSection>
        <Container maxWidth="xl">
          <HeaderText>
            Click to follow us on social media for all the latest APS updates
          </HeaderText>
        </Container>
      </HeaderSection>

      {/* Instagram Posts Swiper */}
      <GallerySection>
        <Container maxWidth="xl">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              968: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="instagram-swiper"
          >
            {instagramPosts.map((url, index) => (
              <SwiperSlide key={index}>
                <EmbedWrapper>
                  <InstagramEmbed url={url} width="100%" captioned />
                </EmbedWrapper>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </GallerySection>
    </SectionWrapper>
  );
};

export default Instagram;
