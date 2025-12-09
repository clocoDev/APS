"use client";
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Box,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SessionCard from "./SessionCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// ==================== STYLED COMPONENTS ====================

const StyledCard = styled(Card)({
  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
  borderRadius: "20px",
  overflow: "hidden",
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

const StyledCardMedia = styled(CardMedia)({
  height: "350px",
  objectFit: "cover",
  borderRadius: "20px",
});

const ContentWrapper = styled(CardContent)({
  padding: "32px",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#FFFFFF",
  "@media (max-width: 768px)": {
    padding: "24px",
  },
});

const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: "16px",
  gap: "16px",
  "@media (max-width: 568px)": {
    flexDirection: "column",
  },
});

const CourseTitle = styled(Typography)({
  fontSize: "25px",
  fontWeight: 700,
  color: "#000000",
  letterSpacing: "-0.078px",
  flex: 1,
  "@media (max-width: 768px)": {
    fontSize: "24px",
    lineHeight: "32px",
  },
});

const BookTrialButton = styled(Button)({
  backgroundColor: "#B38349",
  color: "#FFFFFF",
  textTransform: "none",
  fontSize: "12px",
  fontWeight: 600,
  padding: "3px 25px",
  borderRadius: "5px",
  whiteSpace: "nowrap",
  flexShrink: 0,
  "&:hover": {
    backgroundColor: "#a07d5a",
  },
});

const Description = styled(Typography)({
  fontSize: "14px",
  color: "#5E5E5E",
  lineHeight: "24px",
  marginBottom: "5px",
  fontWeight: 400,
  lineHeight: "25px",
});

const StyledLink = styled(Link)({
  color: "#B38349",
  fontWeight: 700,
  textDecoration: "none",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
});

const SessionsContainer = styled(Box)({
  position: "relative",
  marginTop: "auto",
  paddingTop: "20px",
  "& .swiper": {
    paddingLeft: "0",
    paddingRight: "0",
    margin: "0 auto",
    width: "100%",
  },
  "& .swiper-wrapper": {
    alignItems: "stretch",
  },
  "& .swiper-slide": {
    height: "auto",
    display: "flex",
    justifyContent: "center",
  },
});

const NavigationButton = styled(IconButton)({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "#B38349",
  color: "#FFFFFF",
  width: "30px",
  height: "30px",
  zIndex: 10,
  "&:hover": {
    backgroundColor: "#a07d5a",
  },
  "&.swiper-button-disabled": {
    backgroundColor: "#E0E0E0",
    color: "#999999",
    cursor: "not-allowed",
    opacity: 0.5,
  },
});

const LeftNavButton = styled(NavigationButton)({
  left: "-15px",
});

const RightNavButton = styled(NavigationButton)({
  right: "-15px",
});

// ==================== COMPONENT ====================

const CourseCard = ({ course }) => {
  const prevButtonId = `prev-${course.id}`;
  const nextButtonId = `next-${course.id}`;

  return (
    <StyledCard>
      {/* Course Image */}
      <StyledCardMedia
        component="img"
        image={course.image}
        alt={course.title}
      />

      <ContentWrapper>
        {/* Header with Title and Book Trial Button */}
        <Header>
          <CourseTitle>{course.title}</CourseTitle>
          <BookTrialButton>Book a Trial</BookTrialButton>
        </Header>

        {/* Description */}
        <Description>
          {course.description.length > 120
            ? `${course.description.substring(0, 120)}... `
            : `${course.description} `}
          <StyledLink href={`/Pages/classes/${course.id}`}>[More]</StyledLink>
        </Description>

        {/* Sessions Swiper */}
        <SessionsContainer>
          {/* Custom Navigation Buttons */}
          <LeftNavButton className={prevButtonId}>
            <IconChevronLeft size={22} />
          </LeftNavButton>
          <RightNavButton className={nextButtonId}>
            <IconChevronRight size={22} />
          </RightNavButton>

          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: `.${prevButtonId}`,
              nextEl: `.${nextButtonId}`,
            }}
            watchSlidesProgress={true}
            centeredSlides={true}
            breakpoints={{
              1350: {
                slidesPerView: 2,
                spaceBetween: 24,
                centeredSlides: false,
              },
            }}
          >
            {course.sessions.map((session) => (
              <SwiperSlide key={session.id}>
                <Box
                  sx={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}
                >
                  <SessionCard session={session} />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </SessionsContainer>
      </ContentWrapper>
    </StyledCard>
  );
};

export default CourseCard;
